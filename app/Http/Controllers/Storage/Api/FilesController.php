<?php

namespace App\Http\Controllers\Storage\Api;

use App\Classes\Helpers\SizesHelper;
use App\Http\Controllers\Controller;
use App\Models\Files;
use App\Models\Folder;
use App\Traits\JsonResponseTrait;
use Godruoyi\Snowflake\Snowflake;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\Routing\ResponseFactory;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class FilesController extends Controller
{
    use JsonResponseTrait;

    /**
     * @param Files $files
     * @param Snowflake $snowflake
     * @param Folder $folders
     */
    public function __construct(
        protected Files     $files,
        protected Snowflake $snowflake,
        protected Folder    $folders,
    )
    {}

    /**
     * @param Request $request
     * @return Application|ResponseFactory|Response
     */
    public function create(Request $request): Application|ResponseFactory|Response
    {
        $validator = Validator::make($request->only(["files", "folderSlug"]), [
            "files" => ["required"],
            "folderSlug" => ["nullable"],
        ]);

        if ($validator->fails()) return $this->error(data: $validator->messages());

        $userSize = $request->user()->files_size;
        $userMaxFilesSize = $request->user()->max_files_size;
        $userId = $request->user()->id;

        $files = [];

        foreach ($request->file("files") as $file) {
            $fileSizeInMb = SizesHelper::convertBytesToMb($file->getSize());

            if ($userMaxFilesSize > -1) {
                if (($userSize + $fileSizeInMb) >= $userMaxFilesSize) {
                    return $this->error(
                        message: "File {$file->getClientOriginalName()} don't uploaded. You don't have free space.",
                        data: [
                            "files" => $files,
                            "userSize" => $userSize,
                        ]
                    );
                }
            }

            $userFolder = "{$userId}{$request->user()->unique_folder_id}";
            $uploadFolder = "public/$userFolder";
            $fileName = $this->snowflake->id();

            Storage::putFileAs($uploadFolder, $file, $fileName);

            $files[] = $this->files::create([
                'user_id' => $userId,
                'folder_id' => $this->folders->getIdBySlug($request->folderSlug),
                'name' => $file->getClientOriginalName(),
                'mime_type' => $file->getMimeType(),
                'size' => SizesHelper::convertBytesToMb($file->getSize()),
                'slug' => $fileName,
                'server_path' => "$userFolder/$fileName",
            ]);

            $userSize += $fileSizeInMb;
            $userSize = round($userSize, 2);

            $request->user()->setFilesSize($userSize);
        }

        return $this->success(data: [
            "files" => $files,
            "userSize" => $userSize,
        ]);
    }

    /**
     * @param Request $request
     * @param int $id
     * @return Application|ResponseFactory|Response
     */
    public function rename(Request $request, int $id): Application|ResponseFactory|Response
    {
        $validator = Validator::make($request->only(["name"]), [
            "name" => ["required", "string"],
        ]);

        if ($validator->fails()) return $this->error(data: $validator->messages());

        $this->files::whereId($id)
            ->where("user_id", $request->user()->id)
            ->update([
                'name' => $request->name,
            ]);

        return $this->success(data: $this->files->find($id));
    }

    /**
     * @param Request $request
     * @param int $id
     * @return Application|ResponseFactory|Response
     */
    public function delete(Request $request, int $id): Application|ResponseFactory|Response
    {
        $userSize = $request->user()->files_size;

        $file = $this->files::whereId($id)
            ->where("user_id", $request->user()->id);

        $fileInfo = $file->first();

        $userSize -= $fileInfo->size;

        File::delete($fileInfo->full_path_size);

        $file->delete();
        $this->files->setSharingStatus($id, false);

        $userSize = round($userSize, 2);
        $request->user()->setFilesSize($userSize);

        return $this->success(message: "Ok", data: ["userSize" => $userSize]);
    }
}
