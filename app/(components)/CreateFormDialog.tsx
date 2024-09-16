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
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

function CreateFormDialog() {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const promptRef = useRef<HTMLTextAreaElement>(null);
  const router = useRouter();

  const createForm = async () => {
    const prompt = promptRef.current?.value;
    setIsLoading(true);

    axios
      .post("/api/form", { prompt })
      .then((response) => {
        const result = response.data;

        if (result.status === "error") setError(result.error);
        else {
          router.push(`/dashboard/form/${result.id}`);
        }
      })
      .catch((e: AxiosError) => setError(e.message))
      .finally(() => setIsLoading(false));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="m-10">Create new form</Button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>New Form</DialogTitle>
          <DialogDescription>
            Write your form description here and our AI will do the generation
            magic ✨
          </DialogDescription>
        </DialogHeader>
        {error && (
          <Alert variant="destructive">
            <AlertTitle className="flex gap-x-2">
              <ExclamationTriangleIcon className="h-4 w-4" /> Error
            </AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        <Textarea
          ref={promptRef}
          placeholder="Enter the prompt"
          disabled={isLoading}
          className={`min-h-32 ${isLoading && "ai-glow"}`}
        />
        <Button onClick={createForm} disabled={isLoading}>
          {isLoading && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}
          {isLoading ? "Generating" : "Generate"}
        </Button>
      </DialogContent>
    </Dialog>
  );
}

export default CreateFormDialog;
