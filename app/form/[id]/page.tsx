import AlreadyResponded from "@/app/(components)/AlreadyResponded";
import FloatingBadge from "@/app/(components)/FloatingBadge";
import Form, { GeneratedForm } from "@/app/(components)/Form";
import NotAcceptingResponses from "@/app/(components)/NotAcceptingResponses";
import prisma from "@/prisma/client";
import { auth } from "@clerk/nextjs/server";
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

  if (!form.acceptingResponses)
    return (
      <div className="p-10">
        <NotAcceptingResponses />
      </div>
    );

  const { userId } = auth();

  if (userId && !form.multipleResponses) {
    const responseExists = await prisma.response.findFirst({
      where: {
        formid: form.id,
        userId: userId,
      },
    });

    if (responseExists) {
      return (
        <div className="p-10">
          <AlreadyResponded />
        </div>
      );
    }
  }

  return (
    <div className="h-screen">
      <Form form={form} />
      <FloatingBadge />
    </div>
  );
}

export default page;
