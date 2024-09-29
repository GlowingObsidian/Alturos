import FloatingBadge from "@/app/(components)/FloatingBagde";
import Form, { GeneratedForm } from "@/app/(components)/Form";
import prisma from "@/prisma/client";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: {
    id: string;
  };
}): Promise<Metadata> {
  const form = await prisma.form.findUnique({
    where: {
      id: params.id,
    },
  });

  if (!form) return notFound();

  const formStruct: GeneratedForm = JSON.parse(form.data);

  return {
    title: formStruct.name,
    description: formStruct.description,
  };
}

async function page({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const form = await prisma.form.findUnique({
    where: {
      id: params.id,
    },
  });

  if (!form) return notFound();

  return (
    <div className="p-10">
      <Form form={form} />
      <FloatingBadge />
    </div>
  );
}

export default page;
