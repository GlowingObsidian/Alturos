import Form from "@/app/(components)/Form";
import FormEditBar from "@/app/(components)/FormEditBar";
import FormThemeProvider from "@/app/(context)/FormThemeProvider";
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
      <FormThemeProvider form={form}>
        <FormEditBar form={form} url={process.env.URL || ""} />
        <Form form={form} />
      </FormThemeProvider>
    </div>
  );
}

export default page;
