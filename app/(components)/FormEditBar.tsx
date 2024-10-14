"use client";

import { Form } from "@prisma/client";
import DeleteFormButton from "./DeleteFormButton";
import FormShare from "./FormShare";
import UpdateFormDialog from "./UpdateFormDialog";
import FormStyleButton from "./FormStyleButton";
import MultipleResponsesToggle from "./MultipleResponsesToggle";

function FormEditBar({ form, url }: { form: Form; url: string }) {
  return (
    <div className="flex justify-between flex-col-reverse md:flex-row gap-y-5">
      <MultipleResponsesToggle form={form} />
      <div className="flex gap-x-2 gap-y-2 flex-wrap-reverse">
        <FormStyleButton />
        <UpdateFormDialog form={form} />
        <FormShare url={url} formId={form.id} />
        <DeleteFormButton form={form} />
      </div>
    </div>
  );
}

export default FormEditBar;
