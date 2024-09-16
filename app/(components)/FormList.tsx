import prisma from "@/prisma/client";
import FormCard from "./FormCard";

async function FormList() {
  const forms = await prisma.form.findMany();

  return (
    <div className="grid gap-x-5 gap-y-5 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
      {forms.map((form) => (
        <FormCard key={form.id} form={form} />
      ))}
    </div>
  );
}

export default FormList;
