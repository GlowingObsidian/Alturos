import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Form } from "@prisma/client";
import axios from "axios";
import React, { useState } from "react";

function ShareResponsesToggle({
  form,
  action,
}: {
  form: Form;
  action: (value: boolean) => void;
}) {
  const [formIsSharingResponses, setFormIsSharingResponses] = useState(
    form.shareResponses
  );

  return (
    <div className="flex items-center space-x-2">
      <Switch
        id="form-is-sharing-responses"
        checked={formIsSharingResponses}
        onCheckedChange={(state: boolean) =>
          axios
            .patch(`/api/form/${form.id}`, { shareResponses: state })
            .then(() => {
              setFormIsSharingResponses(state);
              action(state);
            })
        }
      />
      <Label htmlFor="form-can-share-responses">Share Responses</Label>
    </div>
  );
}

export default ShareResponsesToggle;
