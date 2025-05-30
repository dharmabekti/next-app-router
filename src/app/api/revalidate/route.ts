import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export async function POST(req: NextRequest) {
  const tag = req.nextUrl.searchParams.get("tag");
  if (!tag)
    return NextResponse.json({ status: 400, message: "Missing tag params!" });
  revalidateTag(tag);
  return NextResponse.json({ revalidate: true, now: Date.now() });
}
