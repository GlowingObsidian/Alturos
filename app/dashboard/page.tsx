import { revalidatePath } from "next/cache";
import CreateFormDialog from "../(components)/CreateFormDialog";
import FormList from "../(components)/FormList";

function page() {
  revalidatePath("/dashboard");

  return (
    <div className="container mx-auto space-y-5">
      <CreateFormDialog />
      <FormList />
    </div>
  );
}

export const dynamic = "force-dynamic";

export default page;
