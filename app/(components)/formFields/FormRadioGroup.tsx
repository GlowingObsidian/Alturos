import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import RequiredField from "../RequiredField";

function FormRadioGroup({
  label,
  value,
  required,
  options,
  disabled,
}: {
  label: string;
  value: string;
  options: string[];
  required: boolean;
  disabled: boolean;
}) {
  return (
    <div className="w-full space-y-2 flex flex-col items-start">
      <div className="w-full flex items-center justify-between">
        <p className="text-sm text-stone-500">
          {label}
          {required && <RequiredField />}
        </p>
      </div>
      <RadioGroup name={value} required={required}>
        {options.map((option) => (
          <div key={option} className="flex items-center space-x-2">
            <RadioGroupItem value={option} id={option} disabled={disabled} />
            <Label htmlFor={option}>{option}</Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
}

export default FormRadioGroup;
