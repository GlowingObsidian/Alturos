import { updateInstruction } from "@/app/instruction";
import prisma from "@/prisma/client";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const deletedForm = await prisma.form.delete({
    where: {
      id: params.id,
    },
  });

  revalidatePath("/dashboard");

  return NextResponse.json(deletedForm, { status: 200 });
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await req.json();

  const updatedForm = await prisma.form.update({
    where: {
      id: params.id,
    },
    data: {
      ...body,
    },
  });

  return NextResponse.json(updatedForm, { status: 200 });
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await req.json();

  const currentForm = await prisma.form.findUnique({
    where: {
      id: params.id,
    },
  });

  if (!currentForm) return NextResponse.json({}, { status: 404 });

  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: updateInstruction(currentForm.data),
    generationConfig: {
      responseMimeType: "application/json",
    },
  });

  const prompt = body.prompt;
  const output = await model.generateContent(prompt);

  const generation = JSON.parse(output.response.text());

  if (generation.status === "success") {
    const updatedForm = await prisma.form.update({
      where: {
        id: params.id,
      },
      data: {
        data: JSON.stringify(generation),
      },
    });

    return NextResponse.json({ status: "success", id: updatedForm.id });
  }

  return NextResponse.json({ status: "error", error: generation.error });
}
