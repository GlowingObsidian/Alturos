import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function FormSelect({
  name,
  value,
  required,
  options,
}: {
  name: string;
  value: string;
  options: string[];
  required: boolean;
}) {
  return (
    <div>
      <Select name={value} required={required}>
        <SelectTrigger>
          <SelectValue placeholder={name} />
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
