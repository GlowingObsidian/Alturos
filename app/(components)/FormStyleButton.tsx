import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ThemeSelector from "./ThemeSelector";
import { Palette } from "lucide-react";
import { Form } from "@prisma/client";

function FormStyleButton({ form }: { form: Form }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" className="flex gap-x-2 items-center">
          <Palette className="w-4 h-4" />
          Style
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mx-2">
        <ThemeSelector form={form} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default FormStyleButton;
