import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Form } from "@prisma/client";
import axios from "axios";
import React, { useState } from "react";

function AcceptResponsesToggle({ form }: { form: Form }) {
  const [formIsAcceptingResponses, setFormIsAcceptingResponses] = useState(
    form.acceptingResponses
  );

  return (
    <div className="flex items-center space-x-2">
      <Switch
        id="form-is-accepting-responses"
        checked={formIsAcceptingResponses}
        onCheckedChange={(state: boolean) =>
          axios
            .patch(`/api/form/${form.id}`, { acceptingResponses: state })
            .then(() => setFormIsAcceptingResponses(state))
        }
      />
      <Label htmlFor="form-is-accepting-responses">Accept Responses</Label>
    </div>
  );
}

export default AcceptResponsesToggle;
