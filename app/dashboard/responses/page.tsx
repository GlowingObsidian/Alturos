import ExportAsXLSX from "@/app/(components)/ExportAsXLSX";
import FormResponseSelector from "@/app/(components)/FormResponseSelector";
import ResponsesTable from "@/app/(components)/ResponsesTable";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import prisma from "@/prisma/client";
import { auth } from "@clerk/nextjs/server";
import { ClipboardList, Users } from "lucide-react";

async function page({ searchParams }: { searchParams: { index: string } }) {
  const { userId } = auth();

  const forms = await prisma.form.findMany({
    where: {
      userId: userId!,
    },
    include: {
      Response: true,
    },
    orderBy: {
      updatedOn: "desc",
    },
  });

  const form = forms[parseInt(searchParams.index)];

  return (
    <div className="space-y-5">
      <h1 className="text-3xl font-bold mb-5">Responses</h1>
      <div className="flex gap-4 flex-wrap">
        <FormResponseSelector forms={forms} />
        {form && form.Response.length > 0 && (
          <ExportAsXLSX form={form} fileName={form.id} />
        )}
      </div>
      {form && (
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
      )}
      {form && form.Response.length > 0 && <ResponsesTable form={form} />}
    </div>
  );
}

export default page;
