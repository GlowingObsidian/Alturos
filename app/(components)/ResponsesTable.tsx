import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
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

function ResponsesTable({ form }: { form: Form }) {
  const formatData = (data: string | string[]) => {
    if (Array.isArray(data)) {
      let values = "";
      data.map((data) => (values = values + data + ","));
      values = values.substring(0, values.length - 1);
      return values;
    }

    return data;
  };

  const headers: string[] = JSON.parse(form.data).fields.map(
    (field: Field) => field.label
  );

  const responses = form.Response.map((response) => JSON.parse(response.data));

  return (
    <Table>
      <TableHeader>
        <TableRow>
          {headers.map((header) => (
            <TableHead key={header}>{header}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {responses.map((response, index) => (
          <TableRow key={index}>
            {Object.values(response).map((data: any) => (
              <TableCell key={formatData(data)}>{formatData(data)}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default ResponsesTable;
