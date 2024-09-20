import { instruction } from "@/app/instruction";
import { removeJSON } from "@/app/services/removejson";
import prisma from "@/prisma/client";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = body.prompt;
  const output = await model.generateContent(prompt + instruction);

  const generation = JSON.parse(removeJSON(output.response.text()));

  if (generation.status === "success") {
    const newForm = await prisma.form.create({
      data: {
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
