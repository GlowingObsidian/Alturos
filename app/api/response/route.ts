import prisma from "@/prisma/client";
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { userId } = auth();
  if (!userId) return NextResponse.json({}, { status: 401 });

  const body = await req.json();

  const newResponse = await prisma.response.create({
    data: {
      userId: userId,
      formid: body.id,
      data: JSON.stringify(body.data),
    },
  });

  return NextResponse.json(newResponse, { status: 200 });
}
