import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const middleware = (req: NextRequest) => {
  const isLogin = false;
  if (isLogin) {
    // jika sudah login menjalakan kode ini
    return NextResponse.next();
  } else {
    // jika belum login menjalankan kode ini
    return NextResponse.redirect(new URL("/auth/login", req.url)); // halaman akan diredirect ke halaman ini
  }
};

// halaman yang mau di redirect
export const config = {
  matcher: ["/product", "/setting"],
};

// file ini digunakan untuk menghandle private routes
