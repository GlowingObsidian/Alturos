import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

function FormTextArea({
  label,
  placeholder,
  value,
}: {
  label: string;
  placeholder: string;
  value: string;
}) {
  return (
    <div>
      <Label htmlFor={value}>{label}</Label>
      <Textarea id={value} placeholder={placeholder} name={value} />
    </div>
  );
}

export default FormTextArea;
