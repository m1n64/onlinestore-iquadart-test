<?php

namespace App\Http\Controllers\Storage\Api;

use App\Http\Controllers\Controller;
use App\Models\Files;
use App\Traits\JsonResponseTrait;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\Routing\ResponseFactory;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ShareController extends Controller
{
    use JsonResponseTrait;

    /**
     * @param Files $files
     */
    public function __construct(
        protected Files $files,
    )
    {}

    /**
     * @param Request $request
     * @param int $id
     * @return Application|ResponseFactory|Response
     */
    public function shareFile(Request $request, int $id): Application|ResponseFactory|Response
    {
        $this->files->setSharingStatus($id);
        return $this->isFileInSharing($request, $id);
    }

    /**
     * @param Request $request
     * @param int $id
     * @return Application|ResponseFactory|Response
     */
    public function isFileInSharing(Request $request, int $id): Application|ResponseFactory|Response
    {
        return $this->success(data: [
            "inSharing" => $this->files->isFileInSharing($id),
        ]);
    }
}
