import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export function RootLayout() {
  return (
    <div className="flex h-screen">
      <aside className="h-full bg-red-600 w-52">Sidebar</aside>
      <main>
        <Header />
        {/* Page */}
        <Outlet />
      </main>
    </div>
  );
}
