import NavigationList from "../(components)/NavigationList";
import Logo from "./Logo";

function Sidebar() {
  return (
    <aside className="hidden border-r p-4 sticky top-0 h-screen lg:block">
      <Logo />
      <NavigationList />
    </aside>
  );
}

export default Sidebar;
