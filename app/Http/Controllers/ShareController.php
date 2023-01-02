<?php

namespace App\Http\Controllers;

use App\Classes\Constants\Messages;
use App\Classes\Constants\StatusCodes;
use App\Models\Files;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Inertia\Inertia;
use Inertia\Response;

class ShareController extends Controller
{
    /**
     * @param Files $files
     */
    public function __construct(
        protected Files $files,
    )
    {}

    /**
     * @param Request $request
     * @param string $slug
     * @return Response
     */
    public function index(Request $request, string $slug): Response
    {
        $file = $this->files::with("user")
            ->whereSlug($slug)
            ->first();

        if (is_null($file)) abort(StatusCodes::NOT_FOUND);

        $cacheFileInd = Messages::SHARING_FILES_NAME."--{$file->id}";

        if (!Cache::has($cacheFileInd)) {
            abort(StatusCodes::NOT_FOUND);
        }

        $cacheFile = Cache::get($cacheFileInd);
        if (@$cacheFile["file"] !== $file->slug) {
            abort(StatusCodes::NOT_FOUND);
        }

        return Inertia::render("Share", [
            'file' => $file,
            'fileExpired' => $cacheFile["expired"]
        ]);
    }
}
