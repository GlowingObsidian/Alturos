import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import RequiredField from "../RequiredField";

function FormTextArea({
  label,
  placeholder,
  value,
  required,
  disabled,
}: {
  label: string;
  placeholder: string;
  value: string;
  required: boolean;
  disabled: boolean;
}) {
  return (
    <div>
      <Label htmlFor={value}>
        {label}
        {required && <RequiredField />}
      </Label>
      <Textarea
        id={value}
        placeholder={placeholder}
        name={value}
        required={required}
        disabled={disabled}
      />
    </div>
  );
}

export default FormTextArea;
