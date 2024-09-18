"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

function FormInput({
  label,
  placeholder,
  value,
  dtype,
  required,
}: {
  label: string;
  placeholder: string;
  value: string;
  dtype?: string;
  required?: boolean;
}) {
  const [error, setError] = useState<string | null>();

  const validate = (email: string) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setError(!emailPattern.test(email) ? "Invalid email address" : null);
  };

  return (
    <div>
      <Label htmlFor={value}>{label}</Label>
      <Input
        id={value}
        placeholder={placeholder}
        type={dtype === "number" ? "number" : ""}
        name={value}
        onChange={(e) => dtype === "email" && validate(e.target.value)}
        required={required}
      />
      {dtype && error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
}

export default FormInput;
