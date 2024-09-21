-- CreateTable
CREATE TABLE "Response" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "formid" TEXT NOT NULL,
    "data" TEXT NOT NULL,

    CONSTRAINT "Response_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Response" ADD CONSTRAINT "Response_formid_fkey" FOREIGN KEY ("formid") REFERENCES "Form"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
