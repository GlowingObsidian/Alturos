import { Badge } from "@/components/ui/badge";
import Logo from "./Logo";

export default function FloatingBadge() {
  return (
    <div className="fixed bottom-2 left-2 z-50 cursor-pointer backdrop-blur-sm">
      <Badge
        variant="outline"
        className="text-sm font-medium shadow-lg hover:bg-secondary/80 transition-colors"
      >
        Built with <Logo width={72} />
      </Badge>
    </div>
  );
}
