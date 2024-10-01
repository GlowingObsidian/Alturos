-- DropForeignKey
ALTER TABLE "Response" DROP CONSTRAINT "Response_formid_fkey";

-- AddForeignKey
ALTER TABLE "Response" ADD CONSTRAINT "Response_formid_fkey" FOREIGN KEY ("formid") REFERENCES "Form"("id") ON DELETE CASCADE ON UPDATE CASCADE;
