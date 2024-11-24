"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Form } from "@prisma/client";
import { CheckIcon, CopyIcon, ShareIcon } from "lucide-react";
import { useState } from "react";
import ShareResponsesToggle from "./ShareResponsesToggle";

function FormResponseShare({ url, form }: { url: string; form: Form }) {
  const [allowResponseViewing, setAllowResponseViewing] = useState(
    form.shareResponses
  );
  const [isCopied, setIsCopied] = useState(false);
  const shareUrl = `${url}/response/${form.id}`; // Replace with your actual share URL

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Reset copied state after 2 seconds
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <ShareIcon className="mr-2 h-4 w-4" />
          Share Responses
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share your form responses</DialogTitle>
        </DialogHeader>
        <ShareResponsesToggle form={form} action={setAllowResponseViewing} />
        {allowResponseViewing && (
          <>
            <div className="flex items-center space-x-2">
              <Input id="link" defaultValue={shareUrl} readOnly />
              <Button size="sm" className="px-3" onClick={copyToClipboard}>
                <span className="sr-only">Copy</span>
                {isCopied ? (
                  <CheckIcon className="h-4 w-4" />
                ) : (
                  <CopyIcon className="h-4 w-4" />
                )}
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              {isCopied
                ? "Copied to clipboard!"
                : "Click the button to copy the link"}
            </p>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

export default FormResponseShare;
