"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { ExclamationTriangleIcon, ReloadIcon } from "@radix-ui/react-icons";
import { useRef, useState } from "react";

function CreateFormDialog() {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const promptRef = useRef<HTMLTextAreaElement>(null);

  const createForm = async () => {};

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="m-10">Create new form</Button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>New Form</DialogTitle>
          <DialogDescription>
            Write your form description here and our AI will create the form for
            you.
          </DialogDescription>
        </DialogHeader>
        {error && (
          <Alert variant="destructive">
            <ExclamationTriangleIcon className="h-5 w-5" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        <Textarea
          ref={promptRef}
          placeholder="Enter the prompt"
          className="shadow-md"
        />
        <Button onClick={createForm} disabled={isLoading}>
          {isLoading && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}
          Create
        </Button>
      </DialogContent>
    </Dialog>
  );
}

export default CreateFormDialog;
