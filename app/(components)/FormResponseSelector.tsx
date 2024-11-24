"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Form } from "@prisma/client";
import { useRouter } from "next/navigation";

function FormResponseSelector({
  forms,
  current,
}: {
  forms: Form[];
  current?: string;
}) {
  const router = useRouter();

  const handleSelect = (index: string) => {
    router.push(`/dashboard/responses?index=${index}`);
  };

  return (
    <Select onValueChange={handleSelect}>
      <SelectTrigger className="max-w-xs">
        <SelectValue
          placeholder={
            current
              ? JSON.parse(forms[parseInt(current)].data).name
              : "Select Form"
          }
        />
      </SelectTrigger>
      <SelectContent>
        {forms.map((form, index) => (
          <SelectItem key={form.id} value={String(index)}>
            {JSON.parse(form.data).name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export default FormResponseSelector;
