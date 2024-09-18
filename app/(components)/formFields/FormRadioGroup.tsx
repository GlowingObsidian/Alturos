import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

function FormRadioGroup({
  label,
  value,
  required,
  options,
}: {
  label: string;
  value: string;
  options: string[];
  required: boolean;
}) {
  return (
    <div className="w-full space-y-2 flex flex-col items-start">
      <div className="w-full flex items-center justify-between">
        <p className="text-sm text-stone-500">{label}</p>
      </div>
      <RadioGroup name={value} required={required}>
        {options.map((option) => (
          <div key={option} className="flex items-center space-x-2">
            <RadioGroupItem value={option} id={option} />
            <Label htmlFor={option}>{option}</Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
}

export default FormRadioGroup;
