import { getToken } from "next-auth/jwt";
import {
  NextFetchEvent,
  NextMiddleware,
  NextRequest,
  NextResponse,
} from "next/server";

const onlyAdminPage = ["/dashboard"];
const authPage = ["/login", "/register"];

export default function withAuth(
  middleware: NextMiddleware,
  requireAuth: string[] = []
) {
  return async (req: NextRequest, next: NextFetchEvent) => {
    const pathname = req.nextUrl.pathname;
    const token = await getToken({
      req,
      secret: process.env.NEXTAUTH_SECRET,
    });

    // Jika halaman membutuhkan autentikasi
    if (requireAuth.includes(pathname)) {
      // Jika tidak ada token dan halaman bukan halaman login atau register, redirect ke login
      if (!token && !authPage.includes(pathname)) {
        const url = new URL("/login", req.url);
        url.searchParams.set("callbackUrl", encodeURI(req.url));
        return NextResponse.redirect(url);
      }

      // Jika ada token
      if (token) {
        // Jika pengguna sudah login dan mencoba mengakses halaman login atau register, redirect ke halaman utama
        if (authPage.includes(pathname)) {
          return NextResponse.redirect(new URL("/", req.url));
        }
        // Jika pengguna bukan admin dan mencoba mengakses halaman admin, redirect ke halaman utama
        if (token.role !== "admin" && onlyAdminPage.includes(pathname)) {
          return NextResponse.redirect(new URL("/", req.url));
        }
      }
    }

    // Jika tidak ada token dan halaman tidak memerlukan autentikasi, lanjutkan ke middleware berikutnya
    return middleware(req, next);
  };
}
