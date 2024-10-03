"use client";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Form } from "@prisma/client";
import DeleteFormButton from "./DeleteFormButton";
import FormShare from "./FormShare";
import { useState } from "react";
import axios from "axios";

function FormEditBar({ form, url }: { form: Form; url: string }) {
  const [formTakesMultipleResponses, setFormTakesMultipleResponses] = useState(
    form.multipleResponses
  );

  return (
    <div className="flex justify-between flex-col-reverse md:flex-row gap-y-5">
      <div className="flex items-center space-x-2">
        <Switch
          id="form-can-take-multiple-responses"
          checked={formTakesMultipleResponses}
          onCheckedChange={(state: boolean) =>
            axios
              .patch(`/api/form/${form.id}`, { multipleResponses: state })
              .then(() => setFormTakesMultipleResponses(state))
          }
        />
        <Label htmlFor="form-can-take-multiple-responses">
          Multiple Responses
        </Label>
      </div>
      <div className="flex gap-x-2">
        <FormShare url={url} formId={form.id} />
        <DeleteFormButton form={form} />
      </div>
    </div>
  );
}

export default FormEditBar;
