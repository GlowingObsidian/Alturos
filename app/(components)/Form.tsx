"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SignInButton, SignOutButton, useAuth, useUser } from "@clerk/nextjs";
import { Form as FormType } from "@prisma/client";
import { ReloadIcon } from "@radix-ui/react-icons";
import axios from "axios";
import { LogIn, LogOut } from "lucide-react";
import { notFound, usePathname } from "next/navigation";
import { FormEvent, useEffect, useRef, useState } from "react";
import { useThemeContext } from "../(context)/FormThemeContext";
import FormCheckBox from "./formFields/FormCheckBox";
import FormInput from "./formFields/FormInput";
import FormRadioGroup from "./formFields/FormRadioGroup";
import FormSelect from "./formFields/FormSelect";
import FormTextArea from "./formFields/FormTextArea";
import ResponseRecorded from "./ResponseRecorded";
import { backgrounds, borders, themes } from "../services/colors";

export interface Field {
  label: string;
  placeholder?: string;
  type: string;
  value: string;
  required: boolean;
  dtype?: string;
  options?: string[];
}

export interface GeneratedForm {
  status: string;
  error?: string;
  name: string;
  description: string;
  fields: Field[];
}

function Form({ form }: { form: FormType }) {
  const { userId } = useAuth();
  const { user } = useUser();
  const path = usePathname();
  const [responded, setResponded] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const isEditing = path.includes("dashboard");
  const formUrl = `/form/${form.id}`;

  if (isEditing) {
    if (userId && form.userId !== userId) notFound();
  }

  const theme = useThemeContext();

  const savedTheme = form.theme ? JSON.parse(form.theme) : null;

  const formTheme = {
    name: themes[
      !isEditing && savedTheme ? savedTheme.name : theme?.currentTheme.name || 0
    ].name,
    title:
      themes[
        !isEditing && savedTheme
          ? savedTheme.name
          : theme?.currentTheme.name || 0
      ].colors[0],
    description:
      themes[
        !isEditing && savedTheme
          ? savedTheme.name
          : theme?.currentTheme.name || 0
      ].colors[1],
    bg: themes[
      !isEditing && savedTheme ? savedTheme.name : theme?.currentTheme.name || 0
    ].colors[2],
    general:
      themes[
        !isEditing && savedTheme
          ? savedTheme.name
          : theme?.currentTheme.name || 0
      ].colors[3],
  };
  const formBackground =
    backgrounds[
      !isEditing && savedTheme
        ? savedTheme.background
        : theme?.currentTheme.background || 0
    ];

  useEffect(() => {
    if (!isEditing)
      document.body.className =
        document.body.className + " " + formBackground.gradient;
  });

  const formBorder =
    borders[
      !isEditing && savedTheme
        ? savedTheme.style
        : theme?.currentTheme.style || 0
    ];

  const formRef = useRef<HTMLFormElement>(null);
  const formStructure: GeneratedForm = JSON.parse(form.data);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(formRef.current!);

    const data: { [key: string]: string | string[] } = {};

    formStructure.fields.map(
      (field) =>
        (data[field.value] =
          field.type !== "checkbox"
            ? (formData.getAll(field.value)[0] as string)
            : (formData.getAll(field.value) as string[]))
    );

    setIsSubmitting(true);
    axios
      .post("/api/response", {
        id: form.id,
        data: data,
      })
      .then(() => setResponded(true))
      .catch((e) => console.log(e))
      .finally(() => setIsSubmitting(false));
  };

  const renderField = (key: number, field: Field, isEditing: boolean) => {
    if (field.type === "input" && field.placeholder)
      return (
        <FormInput
          key={key}
          label={field.label}
          placeholder={field.placeholder}
          value={field.value}
          dtype={field.dtype}
          required={field.required}
          disabled={isEditing}
        />
      );
    else if (field.type === "text_area" && field.placeholder)
      return (
        <FormTextArea
          key={key}
          label={field.label}
          placeholder={field.placeholder}
          value={field.value}
          required={field.required}
          disabled={isEditing}
        />
      );
    else if (field.type === "radio_group" && field.options)
      return (
        <FormRadioGroup
          key={key}
          label={field.label}
          value={field.value}
          options={field.options}
          required={field.required}
          disabled={isEditing}
        />
      );
    else if (field.type === "checkbox" && field.options)
      return (
        <FormCheckBox
          key={key}
          label={field.label}
          value={field.value}
          options={field.options}
          disabled={isEditing}
        />
      );
    else if (
      field.type === "select" &&
      field.placeholder !== undefined &&
      field.options
    )
      return (
        <FormSelect
          key={key}
          label={field.label}
          placeholder={field.placeholder}
          value={field.value}
          options={field.options}
          required={field.required}
          disabled={isEditing}
        />
      );
  };

  return (
    <div
      className={`p-10 w-full ${isEditing && formBackground.gradient} ${
        isEditing && "rounded-xl"
      }`}
    >
      {!isEditing && responded ? (
        <ResponseRecorded multipleResponses={form.multipleResponses} />
      ) : (
        <Card
          className={`container mx-auto max-w-xl ${formBorder.class}`}
          style={{
            color: formTheme.general,
            backgroundColor: formTheme.bg,
          }}
        >
          <CardHeader className="text-center">
            <CardTitle className="text-2xl" style={{ color: formTheme.title }}>
              {formStructure.name}
            </CardTitle>
            <CardDescription style={{ color: formTheme.description }}>
              {formStructure.description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {!isEditing && !form.multipleResponses && !userId && (
              <SignInButton forceRedirectUrl={formUrl}>
                <p className="cursor-pointer text-sm font-bold mb-2 flex gap-x-2 justify-center items-center text-primary">
                  <LogIn className="w-4 h-4" /> You need to sign in to submit
                  this form.
                </p>
              </SignInButton>
            )}
            {!isEditing && !form.multipleResponses && userId && user && (
              <p className="text-sm mb-2 text-center text-primary">
                Signed in as{" "}
                <span className="font-bold">
                  {user.primaryEmailAddress!.emailAddress || ""}
                </span>{" "}
              </p>
            )}
            <form ref={formRef} className="space-y-7" onSubmit={handleSubmit}>
              {formStructure.fields.map((field, index) =>
                renderField(index, field, isEditing)
              )}
              {!isEditing && (
                <div className="flex justify-end gap-x-2">
                  {!form.multipleResponses && userId && (
                    <SignOutButton redirectUrl={formUrl}>
                      <Button type="button" variant="ghost">
                        <p className="flex justify items-center gap-x-2 text-sm text-primary">
                          <LogOut className="w-4 h-4" />
                          Sign Out
                        </p>
                      </Button>
                    </SignOutButton>
                  )}
                  <Button
                    disabled={
                      isSubmitting || (!form.multipleResponses && !userId)
                    }
                  >
                    {isSubmitting ? (
                      <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                      "Submit"
                    )}
                  </Button>
                </div>
              )}
            </form>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

export default Form;
