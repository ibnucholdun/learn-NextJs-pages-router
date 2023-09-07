import { getToken } from "next-auth/jwt";
import {
  NextMiddleware,
  NextRequest,
  NextFetchEvent,
  NextResponse,
} from "next/server";
export const withAuth = (
  middleware: NextMiddleware,
  requireAuth: string[] = []
) => {
  return async (req: NextRequest, next: NextFetchEvent) => {
    const pathname = req.nextUrl.pathname;

    if (requireAuth.includes(pathname)) {
      const token = await getToken({
        req,
        secret: process.env.NEXTAUTH_SECRET,
      });
      if (!token) {
        const url = new URL("/auth/login", req.url);
        url.searchParams.append("callbackUrl", encodeURI(req.url)); //code ini digunakan ketika kita membuka page yang kita inginkan tetpai belum login, dan ketika kita login maka akan diredirect ke halamanya tadi
        return NextResponse.redirect(url);
      }
    }
    return middleware(req, next);
  };
};
