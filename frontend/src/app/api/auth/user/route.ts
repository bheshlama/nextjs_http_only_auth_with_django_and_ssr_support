import { NextResponse } from "next/server";
// import cookie from "cookie";
import * as cookie from "cookie";
import { axiosInstance } from "core/utils/axiosInstance";
import { backendRoutes } from "core/routes/backendRoutes";

export async function GET(req: Request) {
  try {
    const cookies = cookie.parse(req.headers.get("cookie") ?? "");
    const access = cookies.access ?? null;
    console.log("COOKIES", cookies);
    console.log("ACCESS", access);

    if (!access) {
      return NextResponse.json(
        { error: "User unauthorized to make this request" },
        { status: 401 }
      );
    }

    // ✅ Call backend (send access token as Bearer)
    const backendRes = await axiosInstance.get(backendRoutes.auth.user, {
      headers: {
        Authorization: `Bearer ${access}`,
      },
    });

    if (backendRes.status === 200) {
      return NextResponse.json({ user: backendRes.data.user }, { status: 200 });
    }

    return NextResponse.json(
      { error: backendRes.data.error || "Failed to fetch user" },
      { status: backendRes.status }
    );
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || "Something went wrong when retrieving user" },
      { status: 500 }
    );
  }
}
