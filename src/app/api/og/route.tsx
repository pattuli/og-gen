import { ImageResponse } from "@vercel/og";
import { NextRequest, NextResponse } from "next/server";
export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const title = searchParams.get("title");
  const date = searchParams.get("date");

  if (!title || !date) {
    return NextResponse.json({
      success: false,
      msg: "please pass title and date as searchParams",
    });
  }
  return new ImageResponse(
    (
      <div tw="flex flex-col w-full h-full bg-zinc-900 p-6">
        <div tw="flex">
          <h4 tw="text-zinc-400">{date}</h4>
        </div>
        <div tw="flex flex-1">
          <div tw="flex flex-col">
            <h2 tw="flex flex-col text-3xl max-w-[80%] sm:text-4xl font-bold tracking-tight text-zinc-200 text-left">
              {title}
            </h2>
          </div>
        </div>
        <div tw="flex items-center justify-between">
          <h4 tw="text-zinc-400">niraj.com.np</h4>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://avatars.githubusercontent.com/u/54741119?v=4"
            height="64"
            width="64"
            alt="avatar"
            tw="rounded-full border-2 border-white"
          />
        </div>
      </div>
    ),
    {
      width: 800,
      height: 400,
    }
  );
}
