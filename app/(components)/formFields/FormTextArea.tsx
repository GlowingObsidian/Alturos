import { Textarea } from "@/components/ui/textarea";

function FormTextArea({ name, value }: { name: string; value: string }) {
  return (
    <div>
      <Textarea placeholder={name} name={value} />
    </div>
  );
}

export default FormTextArea;
