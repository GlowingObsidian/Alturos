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
    <div className="p-5">
      <Form form={form} />
    </div>
  );
}

export default page;
