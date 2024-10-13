import Header from "../(components)/Header";
import Sidebar from "../(components)/Sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-cols-[1fr] lg:grid-cols-[280px_1fr] min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      <div className="grid grid-rows-[65px]">
        {/* Header */}
        <Header />

        {/* Main Area */}
        <main className="p-5 overflow-x-auto">{children}</main>
      </div>
    </div>
  );
}
