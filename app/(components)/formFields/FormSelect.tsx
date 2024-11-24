import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import RequiredField from "../RequiredField";

function FormSelect({
  label,
  placeholder,
  value,
  required,
  options,
  disabled,
}: {
  label: string;
  placeholder: string;
  value: string;
  options: string[];
  required: boolean;
  disabled: boolean;
}) {
  return (
    <div>
      <Label>
        {label}
        {required && <RequiredField />}
      </Label>
      <Select name={value} required={required}>
        <SelectTrigger>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option, index) => (
            <SelectItem key={index} value={option} disabled={disabled}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

export default FormSelect;
