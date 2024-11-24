import ExportAsXLSX from "@/app/(components)/ExportAsXLSX";
import FormResponseSelector from "@/app/(components)/FormResponseSelector";
import FormResponseShare from "@/app/(components)/FormResponseShare";
import ResponsesTable from "@/app/(components)/ResponsesTable";
import ResponseSummary from "@/app/(components)/ResponseSummary";
import prisma from "@/prisma/client";
import { auth } from "@clerk/nextjs/server";

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
        <FormResponseSelector forms={forms} current={searchParams.index} />
        {form && <FormResponseShare url={process.env.URL || ""} form={form} />}
        {form && form.Response.length > 0 && (
          <ExportAsXLSX form={form} fileName={form.id} />
        )}
      </div>
      {form && <ResponseSummary form={form} />}
      {form && <ResponsesTable form={form} />}
    </div>
  );
}

export default page;
