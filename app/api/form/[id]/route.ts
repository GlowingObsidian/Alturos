import prisma from "@/prisma/client";
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
