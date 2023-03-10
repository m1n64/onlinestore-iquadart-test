<?php

namespace App\Http\Controllers\Auth;

use App\Classes\Constants\Messages;
use App\Classes\Helpers\CookiesHelper;
use App\Http\Controllers\Controller;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Godruoyi\Snowflake\Snowflake;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;

class RegisteredUserController extends Controller
{

    /**
     * @param Snowflake $snowflake
     */
    public function __construct(
        protected Snowflake $snowflake,
    )
    {}

    /**
     * Display the registration view.
     *
     * @return \Inertia\Response
     */
    public function create()
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:'.User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        $user = User::create([
            'unique_folder_id' => $this->snowflake->id(),
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        event(new Registered($user));

        Auth::login($user);

        $token = Auth::user()->createToken(Messages::TOKEN_NAME);

        return redirect(RouteServiceProvider::HOME)->withCookie(CookiesHelper::setCookie(Messages::AUTH_TOKEN_NAME, $token->plainTextToken));
    }
}
