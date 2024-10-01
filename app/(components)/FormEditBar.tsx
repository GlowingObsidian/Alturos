"use client";

import { Form } from "@prisma/client";
import DeleteFormButton from "./DeleteFormButton";
import FormShare from "./FormShare";

function FormEditBar({ form }: { form: Form }) {
  return (
    <div className="flex justify-between flex-col-reverse md:flex-row gap-y-5">
      <div></div>
      <div className="flex gap-x-2">
        <FormShare url={process.env.DATABASE_URL || ""} formId={form.id} />
        <DeleteFormButton form={form} />
      </div>
    </div>
  );
}

export default FormEditBar;
