"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { utils, writeFile } from "xlsx";
import { Field } from "./Form";

interface Form {
  id: string;
  userId: string;
  updatedOn: Date;
  data: string;
  prompt: string;
  Response: {
    id: string;
    userId: string;
    formid: string;
    data: string;
  }[];
}

const ExportAsXLSX = ({ form, fileName }: { form: Form; fileName: string }) => {
  const exportToExcel = () => {
    const headers: string[] = JSON.parse(form.data).fields.map(
      (field: Field) => field.label
    );
    const responses = form.Response.map((response) =>
      JSON.parse(response.data)
    );

    const formattedData = responses.map((response) =>
      Object.values(response).map((value) =>
        Array.isArray(value) ? value.join(", ") : value
      )
    );

    const data = [headers, ...formattedData];

    console.log(data);

    const workbook = utils.book_new();
    const worksheet = utils.aoa_to_sheet(data);
    utils.book_append_sheet(workbook, worksheet, "Sheet1");
    writeFile(workbook, fileName + ".xlsx", { bookType: "xlsx" });
  };

  return (
    <Button onClick={exportToExcel} className="flex items-center gap-2">
      <Download className="h-4 w-4" />
      Export to Excel
    </Button>
  );
};

export default ExportAsXLSX;
