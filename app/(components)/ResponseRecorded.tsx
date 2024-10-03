import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

function ResponseRecorded({
  multipleResponses,
}: {
  multipleResponses: boolean;
}) {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <div className="flex justify-center mb-4">
          <CheckCircle className="h-12 w-12 text-green-500" />
        </div>
        <CardTitle className="text-2xl font-bold">Thank You!</CardTitle>
        <CardDescription>Your response has been recorded.</CardDescription>
      </CardHeader>
      <CardContent className="text-center">
        <p className="text-muted-foreground">
          We appreciate your time and input.
        </p>
      </CardContent>
      {multipleResponses && (
        <CardFooter className="flex justify-center">
          <p className="text-center text-sm text-muted-foreground">
            Refresh to submit another response.
          </p>
        </CardFooter>
      )}
    </Card>
  );
}

export default ResponseRecorded;
