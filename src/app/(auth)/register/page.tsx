"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";

export default function Register() {
  const {push} = useRouter();
  const [isLoading, setIsLoading] = useState(false)
  const handleSubmit =  async (e: any) => {
    e.preventDefault();
    setIsLoading(true)
    
  try {
    const res = await  fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({
        fullname: e.target.fullname.value,
        email: e.target.email.value,
        password: e.target.password.value,
      }),
    });

    if(res.status === 200) {
      e.target.reset();
      toast.success("Registered Successfully!")
      push("/login")
      setIsLoading(false)

    }
    if(res.status === 400 ){
      toast.error("Something went wrong at try block, try again")
    }
  } catch (error) {
    toast.error("Internal server error")
  }
    
  };
  return (
    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
        Sign up to your account
      </h1>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 md:space-y-6"
        action="#"
      >
        <div>
          <label
            htmlFor="fullname"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your fullname
          </label>
          <input
            type="fullname"
            name="fullname"
            id="fullname"
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="johndoe"
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@company.com"
            required
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
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
        disabled={isLoading}
          type="submit"
          className="w-full bg-white py-2 hover:opacity-85 rounded text-black"
        >
          {!isLoading ? "Sign up": "loading..."}
        </button>
        <div className=" flex justify-center ">
          <Link
            href={"/login"}
            className="text-sm hover:opacity-90 border-b font-light text-gray-500 dark:text-gray-400"
          >
            Already have an account?
          </Link>
        </div>
      </form>
    </div>
  );
}
