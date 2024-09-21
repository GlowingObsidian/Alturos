import DeleteFormButton from "@/app/(components)/DeleteFormButton";
import Form from "@/app/(components)/Form";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";

async function page({ params }: { params: { id: string } }) {
  const form = await prisma.form.findUnique({
    where: {
      id: params.id,
    },
  });

  if (!form) return notFound();

  return (
    <div className="space-y-5">
      <div className="flex justify-end">
        <DeleteFormButton form={form} />
      </div>
      <Form form={form} />
    </div>
  );
}

export default page;
