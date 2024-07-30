"use client";
import GoogleIcon from "@/components/icons/GoogleIcon";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Login({ searchParams }: any) {
  const { push } = useRouter();

  const callbackUrl = searchParams.callbackUrl || "/";
  const [isLoading, setIsLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const { data: session, status } = useSession();
  const handleLogin = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: e.target.email.value,
        password: e.target.password.value,
        callbackUrl,
      });

      if (res?.error) {
        toast.error("Wrong password or email");
      } else {
        // Cek peran pengguna dan arahkan sesuai peran
        if (session?.user?.role === "admin") {
          push("/dashboard");
        } else {
          push(callbackUrl);
        }

        toast.success("Welcome to Dashboard");
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      toast.error("Internal server Error!");
    }
  };

  const handleGoogleLogin = async () => {
    setGoogleLoading(true);
    try {
      const res = await signIn("google", { callbackUrl, redirect: false });
      if (res?.error) {
        toast.error("Login to Google Failed");
      }

      if (res?.status === 200 || res) {
        push("/dashboard");
        toast.success("Welcome to Dashboard");
      } else {
        push(callbackUrl);
      }

      setGoogleLoading(false);
    } catch (error) {
      console.log(error);

      setGoogleLoading(false);
      toast.error("Internal server Error!");
    }
  };
  return (
    <div className="p-6 space-y-4 md:space-y-6 sm:p-8 ">
      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
        Sign in to your account
      </h1>
      <form
        className="space-y-4 md:space-y-6 flex flex-col"
        onSubmit={(e) => handleLogin(e)}
      >
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Your email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 outline-none"
            placeholder="name@example.com"
            required
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gray-950 py-2 rounded-xl hover:opacity-85 text-white"
        >
          {!isLoading ? (
            <p>Sign in</p>
          ) : (
            <p className="flex justify-center gap-2 items-center">
              {" "}
              <div className="w-5 h-5 border-2 border-white rounded-full animate-spin border-t-transparent"></div>{" "}
              <span> loading...</span>
            </p>
          )}
        </button>
        <span className="w-1/2 border mx-auto border-black"></span>
        <button
          type="button"
          onClick={handleGoogleLogin}
          className="w-full border-2 hover:opacity-85  border-gray-700 bg-gray-700 py-2 rounded-xl  text-white"
        >
          <div className="flex justify-center items-center gap-3">
            {googleLoading ? (
               <p className="flex justify-center gap-2 items-center">
               {" "}
               <div className="w-5 h-5 border-2 border-white rounded-full animate-spin border-t-transparent"></div>{" "}
               <span> loading...</span>
             </p>
            ) : (
              <>
                <span className="h-6 w-6 ">
                  <GoogleIcon />
                </span>
                <p>Sign in with Google</p>
              </>
            )}
          </div>
        </button>
        <div className=" flex justify-center ">
          <Link
            href={"/register"}
            className="text-sm border-b hover:opacity-90 font-light text-gray-700"
          >
            Don’t have an account yet?
          </Link>
        </div>
      </form>
    </div>
  );
}
