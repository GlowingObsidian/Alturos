import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="flex items-center space-x-2">
            <Logo width={128} />
          </div>
          <div className="text-sm text-gray-600">
            © {new Date().getFullYear()} Alturos. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
