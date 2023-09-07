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
        const url = new URL("/", req.url);
        return NextResponse.redirect(url);
      }
    }
    return middleware(req, next);
  };
};
