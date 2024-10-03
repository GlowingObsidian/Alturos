import prisma from "@/prisma/client";
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const form = await prisma.form.findUnique({
    where: {
      id: body.id,
    },
  });

  if (!form) return NextResponse.json({}, { status: 404 });

  if (!form.multipleResponses) {
    const { userId } = auth();
    if (!userId) return NextResponse.json({}, { status: 401 });
    const newResponse = await prisma.response.create({
      data: {
        userId: userId,
        formid: body.id,
        data: JSON.stringify(body.data),
      },
    });
    return NextResponse.json(newResponse, { status: 200 });
  }

  const newResponse = await prisma.response.create({
    data: {
      userId: "NONE",
      formid: body.id,
      data: JSON.stringify(body.data),
    },
  });

  return NextResponse.json(newResponse, { status: 200 });
}
