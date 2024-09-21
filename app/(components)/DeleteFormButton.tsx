"use client";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Form } from "@prisma/client";
import { ReloadIcon } from "@radix-ui/react-icons";
import axios from "axios";
import { Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

function DeleteFormButton({ form }: { form: Form }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const deleteForm = () => {
    setIsLoading(true);

    axios
      .delete(`/api/form/${form.id}`)
      .then(() => router.push("/dashboard"))
      .catch((e) => console.log(e))
      .finally(() => setIsLoading(false));
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive" className="flex gap-x-2 items-center">
          <Trash className="w-4 h-4" />
          Delete
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete this form
            from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <Button
            variant="destructive"
            disabled={isLoading}
            onClick={() => deleteForm()}
          >
            {isLoading ? (
              <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              "Continue"
            )}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default DeleteFormButton;
