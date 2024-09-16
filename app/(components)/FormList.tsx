import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import prisma from "@/prisma/client";
import { CalendarIcon } from "lucide-react";

async function FormList() {
  const forms = await prisma.form.findMany();

  return (
    <div className="grid gap-x-5 gap-y-5 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
      {forms.map((form) => (
        <Card key={form.id} className="flex flex-col justify-between">
          <CardHeader>
            <CardTitle className="text-xl">
              {JSON.parse(form.data).name}
            </CardTitle>
          </CardHeader>
          <CardFooter className="text-sm text-gray-500 space-x-2">
            <CalendarIcon className="w-4 h-4" />
            <p>{new Date(form.updatedOn).toDateString()}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

export default FormList;
