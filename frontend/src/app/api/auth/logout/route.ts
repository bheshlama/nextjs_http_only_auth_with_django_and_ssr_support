import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // Create response
    const res = NextResponse.json({ success: "Successfully logged out" });

    // Clear cookies
    res.cookies.set("access", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      maxAge: 0,
      path: "/",
      sameSite: "strict",
    });

    res.cookies.set("refresh", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      maxAge: 0,
      path: "/",
      sameSite: "strict",
    });

    return res;
  } catch (err: any) {
    return NextResponse.json({ error: err.message || "Logout failed" }, { status: 500 });
  }
}
