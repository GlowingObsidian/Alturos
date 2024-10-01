import DeleteFormButton from "@/app/(components)/DeleteFormButton";
import Form from "@/app/(components)/Form";
import FormShare from "@/app/(components)/FormShare";
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
      <div className="flex justify-between flex-col-reverse md:flex-row gap-y-5">
        <div></div>
        <div className="flex gap-x-2">
          <FormShare url={process.env.URL || ""} formId={form.id} />
          <DeleteFormButton form={form} />
        </div>
      </div>
      <Form form={form} />
    </div>
  );
}

export default page;
