"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
const Navbar = () => {
  const { data: session, status } = useSession();
  const pathname = usePathname();
  const selectedRoutes = ["/dashboard"];

  const routeClassCustom = (navRoute: string) =>
    pathname === navRoute ? "border rounded border-white text-white" : "";

  return (
    <nav className=" py-4 px-7 border-b border-white w-full">
      <div className="flex  items-center justify-between">
        <div className="flex space-x-7 items-center">
          {!["/dashboard"].includes(pathname) && (
            <>
              <h1 className="text-xl">NEXTJS</h1>
              <ul className="flex gap-5">
                <li>
                  <Link
                    href="/"
                    className={`${routeClassCustom("/")}  py-1 px-3`}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className={`${routeClassCustom("/about")} py-1 px-3`}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products"
                    className={`${routeClassCustom("/products")}  py-1 px-3`}
                  >
                    Product
                  </Link>
                </li>
              </ul>
            </>
          )}
          {["/dashboard"].includes(pathname) &&(
             <div>
             <h1 className="text-3xl">WELCOME TO DASHBOARD</h1>
           </div>
          )}
         
        </div>
        <div className="flex items-center">
          {status === "loading" && (
            <div className="w-5 h-5 border-2 mr-3 border-white rounded-full animate-spin border-t-transparent"></div>
          )}
          {status === "authenticated" && (
            <div className="flex flex-col items-end mr-3">
              <h3 className="text-white ">{session.user?.fullname}</h3>
              <p className="text-gray-400 text-xs">
                {session.user?.role} | {session.user?.email}
              </p>
            </div>
          )}

          {status === "unauthenticated" ? (
            <button
              onClick={() => signIn()}
              className="bg-white rounded py-1 px-3 hover:bg-opacity-85 text-black"
            >
              Login
            </button>
          ) : (
            !selectedRoutes.includes(pathname) && (
              <button
                onClick={() => signOut()}
                className="bg-white rounded py-1 px-3 hover:bg-opacity-85 text-black"
              >
                Logout
              </button>
            )
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
