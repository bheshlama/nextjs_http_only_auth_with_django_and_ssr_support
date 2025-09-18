import { NextResponse } from "next/server";
import { axiosInstance } from "core/utils/axiosInstance";
import { backendRoutes } from "core/routes/backendRoutes";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { username, password } = body;

    // Call backend using axiosInstance (with base URL pointing to BE)
    const backendRes = await axiosInstance.post(backendRoutes.auth.login, {
      username,
      password,
    });

    const data = backendRes.data;

    if (backendRes.status !== 200) {
      return NextResponse.json(
        { error: data?.error || "Authentication failed" },
        { status: backendRes.status }
      );
    }

    // Create response for frontend
    const res = NextResponse.json({ success: "Logged in successfully" });

    // Set httpOnly cookies
    res.cookies.set("access", data.access, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      maxAge: 60 * 30,
      path: "/",
      sameSite: "strict",
    });
    res.cookies.set("refresh", data.refresh, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      maxAge: 60 * 60 * 24,
      path: "/",
      sameSite: "strict",
    });

    return res;
  } catch (err: any) {
    if (err.response) {
      return NextResponse.json(
        { error: err.response.data?.error || "Invalid credentials" },
        { status: err.response.status }
      );
    } else if (err.request) {
      return NextResponse.json(
        { error: "No response from server" },
        { status: 500 }
      );
    } else {
      return NextResponse.json(
        { error: err.message || "Unexpected error" },
        { status: 500 }
      );
    }
  }
}
