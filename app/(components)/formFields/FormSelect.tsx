import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function FormSelect({
  label,
  placeholder,
  value,
  required,
  options,
}: {
  label: string;
  placeholder: string;
  value: string;
  options: string[];
  required: boolean;
}) {
  return (
    <div>
      <Label>{label}</Label>
      <Select name={value} required={required}>
        <SelectTrigger>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option, index) => (
            <SelectItem key={index} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

export default FormSelect;
