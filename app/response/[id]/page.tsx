import { GeneratedForm } from "@/app/(components)/Form";
import ResponsesTable from "@/app/(components)/ResponsesTable";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import prisma from "@/prisma/client";
import { ClipboardList, Users } from "lucide-react";
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

  if (!form) return notFound();

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
      <div className="grid gap-4 md:grid-cols-2 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Response Count
            </CardTitle>
            <ClipboardList className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{form.Response.length}</div>
            <p className="text-xs text-muted-foreground">
              Total number of responses received
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Multiple Responses
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {form.multipleResponses ? "Allowed" : "Not Allowed"}
            </div>
            <p className="text-xs text-muted-foreground">
              {form.multipleResponses
                ? "Users can submit multiple responses"
                : "Users are limited to one response"}
            </p>
          </CardContent>
        </Card>
      </div>
      <ResponsesTable form={form} />
    </div>
  );
}

export default page;
