import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ClipboardList, Users, XCircle } from "lucide-react";

interface Form {
  id: string;
  userId: string;
  updatedOn: Date;
  data: string;
  prompt: string;
  multipleResponses: boolean;
  acceptingResponses: boolean;
  Response: {
    id: string;
    userId: string;
    formid: string;
    data: string;
  }[];
}

function ResponseSummary({ form }: { form: Form }) {
  return (
    <div className="grid gap-4 md:grid-cols-3 mb-8">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Response Count</CardTitle>
          <ClipboardList className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{form.Response.length}</div>
          <p className="text-xs text-muted-foreground">
            Total number of responses received
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Multiple Responses
          </CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {form.multipleResponses ? "Allowed" : "Not Allowed"}
          </div>
          <p className="text-xs text-muted-foreground">
            {form.multipleResponses
              ? "Users can submit multiple responses"
              : "Users are limited to one response"}
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Accepting Responses
          </CardTitle>
          {form.acceptingResponses ? (
            <CheckCircle className="h-4 w-4 text-green-500" />
          ) : (
            <XCircle className="h-4 w-4 text-red-500" />
          )}
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {form.acceptingResponses ? "Open" : "Closed"}
          </div>
          <p className="text-xs text-muted-foreground">
            {form.acceptingResponses
              ? "Form is currently accepting new responses"
              : "Form is closed for new submissions"}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

export default ResponseSummary;
