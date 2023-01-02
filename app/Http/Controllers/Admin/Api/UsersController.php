<?php

namespace App\Http\Controllers\Admin\Api;

use App\Classes\AdminLog;
use App\Enums\RoleCodesEnum;
use App\Enums\RolesEnum;
use App\Http\Controllers\Controller;
use App\Mail\UserBanned;
use App\Mail\UserChangeRole;
use App\Models\User;
use App\Traits\JsonResponseTrait;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\Routing\ResponseFactory;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;

class UsersController extends Controller
{
    use JsonResponseTrait;

    /**
     * @param User $users
     */
    public function __construct(
        protected User $users,
    )
    {
    }

    /**
     * @param Request $request
     * @param int $id
     * @return Application|ResponseFactory|Response
     */
    public function setRole(Request $request, int $id)
    {
        $validator = Validator::make($request->only("role"), [
            "role" => ["required", "string"]
        ]);

        if ($validator->fails()) return $this->error(data: $validator->messages());

        $role = $validator->validated()["role"];

        $roleName = match ($role) {
            RoleCodesEnum::User->value => RolesEnum::User->value,
            RoleCodesEnum::Moder->value => RolesEnum::Moder->value,
            RoleCodesEnum::Admin->value => RolesEnum::Admin->value,
        };

        $user = $this->users::where("id", $id);

        $userInfo = $user->first();

        Mail::to($userInfo)->send(new UserChangeRole($userInfo, $roleName));

        $newUserRoleChange = [
            "role" => $role,
            "role_name" => $roleName,
            "max_files_size" => 100,
        ];

        if ($role === RoleCodesEnum::Admin->value) $newUserRoleChange["max_files_size"] = -1;

        $user->update($newUserRoleChange);

        AdminLog::info("Admin {$request->user()->name} change role {$id} to {$roleName}");

        return $this->success(message: "Ok", data: $this->users->find($id));
    }

    /**
     * @param Request $request
     * @param int $id
     * @return Application|ResponseFactory|Response
     */
    public function setBanStatus(Request $request, int $id)
    {
        $validator = Validator::make($request->only(["status"]), [
            "status" => ["required", "boolean"],
        ]);

        if ($validator->fails()) return $this->error(data: $validator->messages());

        $status = $validator->validated()["status"];
        $user = $this->users::where("id", $id);

        $userInfo = $user->first();
        Mail::to($userInfo)->send(new UserBanned($userInfo, $status));

        $user->update([
            'is_banned' => $status,
        ]);

        AdminLog::info("Admin {$request->user()->name} change ban status {$id} to {$status}");

        return $this->success(message: "Ok", data: $this->users->find($id));
    }

    /**
     * @param Request $request
     * @param int $id
     * @return Application|ResponseFactory|Response
     */
    public function setMaxFilesSize(Request $request, int $id)
    {
        $validator = Validator::make($request->only(["max_size"]), [
            "max_size" => ["required", "numeric"],
        ]);

        if ($validator->fails()) return $this->error(data: $validator->messages());

        $maxFilesSize = (float)$validator->validated()["max_size"];

        $this->users::where("id", $id)
            ->update([
                'max_files_size' => $maxFilesSize
            ]);

        AdminLog::info("Admin {$request->user()->name} change max files size {$id} to {$maxFilesSize}");

        return $this->success(message: "Ok", data: $this->users->find($id));
    }

}
