import CreateFormDialog from "../(components)/CreateFormDialog";
import FormList from "../(components)/FormList";

function page() {
  return (
    <div className="container mx-auto space-y-5">
      <h1 className="text-3xl font-bold mb-5">My Forms</h1>
      <CreateFormDialog />
      <FormList />
    </div>
  );
}

export const dynamic = "force-dynamic";

export default page;
