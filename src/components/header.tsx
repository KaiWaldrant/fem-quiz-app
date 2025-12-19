import { ThemeToggle } from "./theme-toggle";
import { LogoHTML } from "./logo/logo-html";
import { LogoCSS } from "./logo/logo-css";
import { LogoJS } from "./logo/logo-js";
import { LogoAccessibility } from "./logo/logo-accessibility";

export function Header() {
    return (
        <header className="flex justify-between px-6 py-4">
            <LogoAccessibility />
            <ThemeToggle />
        </header>
    );
}
