import { NextResponse } from "next/server";
import * as cookie from "cookie"; // ✅ use namespace import to avoid default import issues
import { axiosInstance } from "core/utils/axiosInstance";
import { backendRoutes } from "core/routes/backendRoutes";

export async function GET(req: Request) {
  try {
    // ✅ Parse cookies
    const cookies = cookie.parse(req.headers.get("cookie") ?? "");
    const access = cookies.access ?? null;

    if (!access) {
      return NextResponse.json(
        { error: "User forbidden from making the request" },
        { status: 403 }
      );
    }

    // ✅ Verify token using backend API
    const res = await axiosInstance.post(backendRoutes.auth.verify, {
      token: access,
    });

    if (res.status === 200) {
      return NextResponse.json({ success: "Authenticated successfully" });
    }

    return NextResponse.json(
      { error: "Failed to authenticate" },
      { status: res.status }
    );
  } catch (err: any) {
    return NextResponse.json(
      {
        error:
          err.response?.data?.detail ??
          err.message ??
          "Something went wrong when trying to authenticate",
      },
      { status: 500 }
    );
  }
}
