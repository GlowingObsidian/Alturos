import prisma from "@/prisma/client";
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

  return NextResponse.json(deletedForm, { status: 200 });
}
