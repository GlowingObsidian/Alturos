"use client";

import { Input } from "@/components/ui/input";
import { useState } from "react";

function FormInput({
  name,
  value,
  dtype,
  required,
}: {
  name: string;
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
      <Input
        placeholder={name}
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
