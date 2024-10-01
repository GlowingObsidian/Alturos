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
