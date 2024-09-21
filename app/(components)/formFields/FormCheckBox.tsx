import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

function FormCheckBox({
  label,
  value,
  options,
}: {
  label: string;
  value: string;
  options: string[];
}) {
  return (
    <div className="w-full gap-y-2 flex flex-col items-start">
      <div className="w-full flex items-center justify-between">
        <p className="text-sm text-stone-500">{label}</p>
      </div>
      <div className="grid grid-cols-4 gap-x-2 gap-y-2">
        {options.map((option) => (
          <div key={option} className="flex items-center space-x-2">
            <Checkbox id={option} name={value} value={option} />
            <Label htmlFor={option}>{option}</Label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FormCheckBox;
