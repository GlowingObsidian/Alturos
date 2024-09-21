import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

function FormTextArea({
  label,
  placeholder,
  value,
  required,
}: {
  label: string;
  placeholder: string;
  value: string;
  required: boolean;
}) {
  return (
    <div>
      <Label htmlFor={value}>{label}</Label>
      <Textarea
        id={value}
        placeholder={placeholder}
        name={value}
        required={required}
      />
    </div>
  );
}

export default FormTextArea;
