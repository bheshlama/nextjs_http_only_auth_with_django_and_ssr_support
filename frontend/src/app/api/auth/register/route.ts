import { NextResponse } from "next/server";
import { axiosInstance } from "core/utils/axiosInstance";
import { backendRoutes } from "core/routes/backendRoutes";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Call backend register endpoint
    const backendRes = await axiosInstance.post(backendRoutes.auth.register, body);

    const data = backendRes.data;

    if (![200, 201].includes(backendRes.status)) {
      return NextResponse.json(
        { error: data?.error || "Registration failed" },
        { status: backendRes.status }
      );
    }

    // Optionally, you can set cookies here if your backend returns tokens
    // e.g., access/refresh token for automatic login after registration

    const res = NextResponse.json({ success: data?.success ?? true });

    // Example: if backend returns access/refresh tokens
    if (data.access && data.refresh) {
      res.cookies.set("access", data.access, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        maxAge: 60 * 30, // 30 minutes
        path: "/",
        sameSite: "strict",
      });
      res.cookies.set("refresh", data.refresh, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        maxAge: 60 * 60 * 24, // 24 hours
        path: "/",
        sameSite: "strict",
      });
    }

    return res;
  } catch (err: any) {
    if (err.response) {
      return NextResponse.json(
        { error: err.response.data?.error || "Registration failed" },
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
