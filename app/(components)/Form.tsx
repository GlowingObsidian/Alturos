"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Form as FormType } from "@prisma/client";
import FormCheckBox from "./formFields/FormCheckBox";
import FormInput from "./formFields/FormInput";
import FormRadioGroup from "./formFields/FormRadioGroup";
import FormSelect from "./formFields/FormSelect";
import FormTextArea from "./formFields/FormTextArea";
import { FormEvent, useRef } from "react";

interface Field {
  label: string;
  placeholder?: string;
  type: string;
  value: string;
  required: boolean;
  dtype?: string;
  options?: string[];
}

interface GeneratedForm {
  status: string;
  error?: string;
  name: string;
  description: string;
  fields: Field[];
}

function Form({ form }: { form: FormType }) {
  const formRef = useRef<HTMLFormElement>(null);

  const formData: GeneratedForm = JSON.parse(form.data);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(formRef.current!);

    const data: { [key: string]: string | string[] } = {};

    formData.forEach((value, key) => {
      if (data[key]) {
        data[key] = Array.isArray(data[key])
          ? [...(data[key] as string[]), value as string]
          : [data[key] as string, value as string];
      } else {
        data[key] = value as string;
      }
    });

    console.log(data);
  };

  const renderField = (key: number, field: Field) => {
    if (field.type === "input" && field.placeholder)
      return (
        <FormInput
          key={key}
          label={field.label}
          placeholder={field.placeholder}
          value={field.value}
          dtype={field.dtype}
          required={field.required}
        />
      );
    if (field.type === "text_area" && field.placeholder)
      return (
        <FormTextArea
          key={key}
          label={field.label}
          placeholder={field.placeholder}
          value={field.value}
        />
      );
    if (field.type === "radio_group" && field.options)
      return (
        <FormRadioGroup
          key={key}
          label={field.label}
          value={field.value}
          options={field.options}
          required={field.required}
        />
      );
    if (field.type === "checkbox" && field.options)
      return (
        <FormCheckBox
          key={key}
          label={field.label}
          value={field.value}
          options={field.options}
          required={field.required}
        />
      );
    if (field.type === "select" && field.placeholder && field.options)
      return (
        <FormSelect
          key={key}
          label={field.label}
          placeholder={field.placeholder}
          value={field.value}
          options={field.options}
          required={field.required}
        />
      );
  };

  return (
    <>
      <Card className="container mx-auto max-w-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">{formData.name}</CardTitle>
          <CardDescription>{formData.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <form ref={formRef} className="space-y-7" onSubmit={handleSubmit}>
            {formData.fields.map((field, index) => renderField(index, field))}
            <Button>Submit</Button>
          </form>
        </CardContent>
      </Card>
    </>
  );
}

export default Form;
