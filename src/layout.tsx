import { Header } from "@/components/header";
import { Outlet } from "react-router-dom";

export function Layout() {
    return (
        <div className="flex flex-col min-h-svh min-w-svw text-blue-900 dark:text-white bg-svg bg-grey-50 dark:bg-blue-900">
            <Header />
            <main className="grid gap-10 px-6 py-8 ">
                <Outlet />
            </main>
        </div>
    );
}
