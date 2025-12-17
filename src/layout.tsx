import { Header } from "@/components/header";
import { Outlet } from "react-router-dom";
import { BackgroundSVG } from "@/components/background-SVG";

export function Layout() {
    return (
        <div className="flex flex-col min-h-svh min-w-svw text-blue-900 dark:text-white">
            <BackgroundSVG />
            <Header />
            <main className="grid gap-10 px-6 py-8 ">
                <Outlet />
            </main>
        </div>
    );
}
