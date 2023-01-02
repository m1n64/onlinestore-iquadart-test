<?php

namespace App\Http\Controllers;

use App\Models\Files;
use App\Models\Folder;
use Godruoyi\Snowflake\Snowflake;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    /**
     * @param Folder $folders
     * @param Files $files
     */
    public function __construct(
        protected Folder $folders,
        protected Files $files,
    )
    {}

    /**
     * @param Request $request
     * @param string|null $folderSlug
     * @return Response
     */
    public function index(Request $request, string $folderSlug = null) : Response
    {
        $userId = $request->user()->id;

        $parentId = null;
        $breadCrumbs = [];
        if (!is_null($folderSlug)) {
            $parentId = $this->folders->getIdBySlug($folderSlug);
            $breadCrumbs = $this->folders->breadcrumbs($parentId);
        }

        $folders = $this->folders->where("parent_id", $parentId)->where("user_id", $userId)->get();
        $files = $this->files->append(['full_image_path'])->where("folder_id", $parentId)->where("user_id", $userId)->get();


        return Inertia::render("Dashboard", [
            'folderSlug' => $folderSlug,
            'foldersBreadcrumbs' => $breadCrumbs,
            'folders' => $folders,
            'files' => $files,
        ]);
    }
}
