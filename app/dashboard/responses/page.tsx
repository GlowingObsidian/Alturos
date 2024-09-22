import FormResponseSelector from "@/app/(components)/FormResponseSelector";
import ResponsesTable from "@/app/(components)/ResponsesTable";
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
      <FormResponseSelector forms={forms} />
      {form && <ResponsesTable form={form} />}
    </div>
  );
}

export default page;
