"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Form } from "@prisma/client";
import { Save } from "lucide-react";
import DeleteFormButton from "./DeleteFormButton";
import FormShare from "./FormShare";

function FormEditBar({ form }: { form: Form }) {
  return (
    <div className="flex justify-between flex-col-reverse md:flex-row gap-y-5">
      <div className="flex items-center gap-x-2">
        <Checkbox id="multipleOpt" />
        <Label htmlFor="multipleOpt">Multiple Responses</Label>
      </div>
      <div className="flex gap-x-2">
        <Button disabled>
          <Save className="mr-2 h-4 w-4" />
          Save Changes
        </Button>
        <FormShare url={process.env.URL || ""} formId={form.id} />
        <DeleteFormButton form={form} />
      </div>
    </div>
  );
}

export default FormEditBar;
