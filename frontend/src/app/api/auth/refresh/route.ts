import { NextResponse } from "next/server";
import * as cookie from "cookie";
import { axiosInstance } from "core/utils/axiosInstance";
import { backendRoutes } from "core/routes/backendRoutes";

export async function GET(req: Request) {
  try {
    const cookies = cookie.parse(req.headers.get("cookie") ?? "");
    const refresh = cookies.refresh ?? null;

    if (!refresh) {
      return NextResponse.json(
        { error: "User unauthorized to make this request" },
        { status: 401 }
      );
    }

    // Call backend refresh endpoint
    const apiRes = await axiosInstance.post(backendRoutes.auth.refresh, { refresh });

    if (apiRes.status === 200) {
      const data = apiRes.data;

      const res = NextResponse.json({ success: "Refresh request successful" });

      // Set cookies individually
      res.cookies.set("access", data.access, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        maxAge: 60 * 30,
        sameSite: "strict",
        path: "/",
      });

      res.cookies.set("refresh", data.refresh, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        maxAge: 60 * 60 * 24,
        sameSite: "strict",
        path: "/",
      });

      return res;
    }

    return NextResponse.json(
      { error: "Failed to fulfill refresh request" },
      { status: apiRes.status }
    );
  } catch (err: any) {
    return NextResponse.json(
      {
        error:
          err.response?.data?.detail ??
          err.message ??
          "Something went wrong when trying to fulfill refresh request",
      },
      { status: 500 }
    );
  }
}
