import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { withAuth } from "./middlewares/withAuth";

export const mainMiddleware = (req: NextRequest) => {
  const res = NextResponse.next();
  return res;
};

export default withAuth(mainMiddleware, ["/product", "/about"]); // parameter ke 2 digunakan untuk menentukan route yang ingin diprivate

// file ini digunakan untuk menghandle private routes
