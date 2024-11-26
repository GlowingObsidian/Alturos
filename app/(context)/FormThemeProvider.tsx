"use client";

import { Form } from "@prisma/client";
import { FormThemeWrapper } from "./FormThemeContext";

function FormThemeProvider({
  form,
  children,
}: {
  form: Form;
  children: React.ReactNode;
}) {
  return <FormThemeWrapper form={form}>{children}</FormThemeWrapper>;
}

export default FormThemeProvider;
