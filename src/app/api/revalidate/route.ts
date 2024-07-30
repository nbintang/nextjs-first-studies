import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export async function POST(req: NextRequest) {
  const tag = req.nextUrl.searchParams.get("tag");
  const secret = req.nextUrl.searchParams.get("secret");

  if (secret !== process.env.REV_TOKEN) {
    return NextResponse.json(
      {
        status: 401,
        message: "invalid secret",
      },
      { status: 401 }
    );
  }
  if (!tag) {
    return NextResponse.json(
      {
        status: 400,
        message: "Missing Tag Param",
      },
      {
        status: 400,
      }
    );
  }
  console.log(tag);
  revalidateTag(tag);

  return NextResponse.json({
    revalidate: true,
    time: new Date(),
  });
}
