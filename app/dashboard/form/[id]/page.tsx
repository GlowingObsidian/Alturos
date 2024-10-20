import Form from "@/app/(components)/Form";
import FormEditBar from "@/app/(components)/FormEditBar";
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
      <FormEditBar form={form} url={process.env.URL || ""} />
      <div className="w-full bg-purple-400">
        <Form form={form} />
      </div>
    </div>
  );
}

export default page;
