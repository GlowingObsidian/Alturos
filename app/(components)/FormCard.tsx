"use client";

import { Card, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { CalendarIcon } from "lucide-react";
import { useRouter } from "next/navigation";

function FormCard({
  form,
}: {
  form: { id: string; updatedOn: Date; data: string };
}) {
  const router = useRouter();

  return (
    <Card
      key={form.id}
      className="flex flex-col justify-between cursor-pointer border-2 border-transparent transition-colors hover:border-primary hover:border-2"
      onClick={() => router.push(`/dashboard/form/${form.id}`)}
    >
      <CardHeader>
        <CardTitle className="text-xl">{JSON.parse(form.data).name}</CardTitle>
      </CardHeader>
      <CardFooter className="text-sm text-gray-500 space-x-2">
        <CalendarIcon className="w-4 h-4" />
        <p>{new Date(form.updatedOn).toDateString()}</p>
      </CardFooter>
    </Card>
  );
}

export default FormCard;
