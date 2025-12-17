import { ThemeToggle } from "./theme-toggle";

export function Header() {
    return (
        <header className="flex justify-between p-4">
            <div className="">logo</div>
            <ThemeToggle />
        </header>
    );
}
