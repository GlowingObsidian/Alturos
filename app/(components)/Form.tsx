import { Form as FormType } from "@prisma/client";

function Form({ form }: { form: FormType }) {
  return <div>{form.prompt}</div>;
}

export default Form;
