import { GeneratedForm } from "@/app/(components)/Form";
import ResponsesTable from "@/app/(components)/ResponsesTable";
import ResponseSummary from "@/app/(components)/ResponseSummary";
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
    select: {
      data: true,
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
    include: {
      Response: true,
    },
  });

  if (!form || !form.shareResponses) return notFound();

  return (
    <div className="p-5 overflow-x-auto">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">
          {JSON.parse(form.data).name}
        </h1>
        <p className="text-muted-foreground">
          {JSON.parse(form.data).description}
        </p>
      </header>
      <ResponseSummary form={form} />
      <ResponsesTable form={form} />
    </div>
  );
}

export default page;
