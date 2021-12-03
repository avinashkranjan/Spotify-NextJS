import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  //Token will exist if user is logged in
  const token = await getToken({ req, secret: process.env.JWT_SECRET });

  const { pathname } = req.nextUrl;

  // Allow access to the login page

  if (pathname.includes("api/auth") || token) {
    return NextResponse.next();
  }
  //Redirect to logn if no token
  if (!token && pathname != "/login") {
    return NextResponse.redirect("/login");
  }
}
