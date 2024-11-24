import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function RequiredField() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <span className="text-red-500"> *</span>
        </TooltipTrigger>
        <TooltipContent asChild>
          <p>Required field</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export default RequiredField;
