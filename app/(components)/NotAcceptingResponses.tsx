import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

function NotAcceptingResponses() {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center justify-center text-xl font-semibold text-center text-red-600">
          <AlertCircle className="w-6 h-6 mr-2" />
          Not Accepting Responses!
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-center text-gray-700">
          This form is currently not accepting responses.
        </p>
        <p className="mt-2 text-center text-sm text-gray-500">
          If you believe this is an error, please contact the form
          administrator.
        </p>
      </CardContent>
    </Card>
  );
}

export default NotAcceptingResponses;
