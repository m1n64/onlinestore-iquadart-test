<?php

namespace App\Http\Controllers\Storage\Api;

use App\Http\Controllers\Controller;
use App\Models\Folder;
use App\Traits\JsonResponseTrait;
use Godruoyi\Snowflake\Snowflake;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\Routing\ResponseFactory;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class FoldersController extends Controller
{
    use JsonResponseTrait;

    /**
     * @param Folder $folders
     */
    public function __construct(
        protected Folder $folders,
    )
    {}

    /**
     * @param Request $request
     * @return Application|ResponseFactory|Response
     */
    public function create(Request $request) : Application|ResponseFactory|Response
    {
        $validator = Validator::make($request->only(["name", "folderSlug"]), [
            "name" => ["required", "string"],
            "folderSlug" => ["nullable"],
        ]);

        if ($validator->fails()) return $this->error(data: $validator->messages());

        list($name, $folderSlug) = array_values($validator->validated());

        $parentId = null;
        if (!is_null($folderSlug)) {
            $parentId = $this->folders->getIdBySlug($folderSlug);
        }

        $folder = $this->folders::create([
            "user_id" => $request->user()->id,
            "name" => $name,
            "parent_id" => $parentId,
            "slug" => Str::random(10),
        ]);

        return $this->success(data: $folder);
    }

    /**
     * @param Request $request
     * @param int $id
     * @return Application|ResponseFactory|Response
     */
    public function delete(Request $request, int $id) : Application|ResponseFactory|Response
    {
        try {
            $this->folders->where("id", $id)
                ->where("user_id", $request->user()->id)
                ->delete();

            return $this->success(message: "Ok");
        } catch (\Exception $exception) {
            return $this->error(message: "You are not deleting this folder because there are other folders or files in this folder");
        }
    }
}
