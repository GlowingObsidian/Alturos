import { instruction } from "@/app/instruction";
import { removeMarkdown } from "@/app/services/removeMarkdown";
import prisma from "@/prisma/client";
import { auth } from "@clerk/nextjs/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { userId } = auth();

  if (!userId) return NextResponse.json({}, { status: 401 });

  const body = await req.json();

  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = body.prompt;
  const output = await model.generateContent(prompt + instruction);

  const generation = JSON.parse(removeMarkdown(output.response.text()));

  if (generation.status === "success") {
    const newForm = await prisma.form.create({
      data: {
        userId: userId,
        data: JSON.stringify(generation),
        prompt: prompt,
      },
    });

    revalidatePath("/dashboard", "page");

    return NextResponse.json(
      { status: "success", id: newForm.id },
      { status: 201 }
    );
  }

  return NextResponse.json({ status: "error", error: generation.error });
}
