import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Form } from "@prisma/client";
import axios from "axios";
import React, { useState } from "react";

function MultipleResponsesToggle({ form }: { form: Form }) {
  const [formTakesMultipleResponses, setFormTakesMultipleResponses] = useState(
    form.multipleResponses
  );

  return (
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
  );
}

export default MultipleResponsesToggle;
