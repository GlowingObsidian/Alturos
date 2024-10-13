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
import { Form } from "@prisma/client";
import { ExclamationTriangleIcon, ReloadIcon } from "@radix-ui/react-icons";
import axios, { AxiosError } from "axios";
import { Cog } from "lucide-react";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

function UpdateFormDialog({ form }: { form: Form }) {
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const promptRef = useRef<HTMLTextAreaElement>(null);
  const router = useRouter();

  const createForm = async () => {
    const prompt = promptRef.current?.value;
    setIsLoading(true);
    setError(null);

    axios
      .put(`/api/form/${form.id}`, { prompt })
      .then((response) => {
        const result = response.data;
        if (result.status === "error") setError(result.error);
        else {
          setIsOpen(false);
          router.refresh();
        }
      })
      .catch((e: AxiosError) => setError(e.message))
      .finally(() => setIsLoading(false));
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && setError(null)}>
      <DialogTrigger asChild>
        <Button
          className="flex gap-x-2 items-center"
          onClick={() => setIsOpen(true)}
        >
          <Cog className="w-4 h-4" /> Update form
        </Button>
      </DialogTrigger>
      <DialogContent
        className="max-w-md"
        onInteractOutside={() => setIsOpen(false)}
      >
        <DialogHeader>
          <DialogTitle>Update Form</DialogTitle>
          <DialogDescription>
            Write the changes you want and AI will do it for you ✨
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
          {isLoading ? "Updating" : "Update"}
        </Button>
      </DialogContent>
    </Dialog>
  );
}

export default UpdateFormDialog;
