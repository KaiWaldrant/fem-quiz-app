import { Header } from "@/components/header";
import { Outlet } from "react-router-dom";

export function Layout() {
    return (
        <div className="flex flex-col min-h-svh min-w-svw bg-grey-50 dark:bg-blue-850">
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
    );
}
