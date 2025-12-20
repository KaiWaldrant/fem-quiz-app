import { ThemeToggle } from "./theme-toggle";
import { LogoHTML } from "./logo/logo-html";
import { LogoCSS } from "./logo/logo-css";
import { LogoJS } from "./logo/logo-js";
import { LogoAccessibility } from "./logo/logo-accessibility";

type LogoType = "HTML" | "CSS" | "JavaScript" | "Accessibility";

const LOGOS: Record<LogoType, React.ReactElement> = {
    HTML: <LogoHTML />,
    CSS: <LogoCSS />,
    JavaScript: <LogoJS />,
    Accessibility: <LogoAccessibility />,
};

interface HeaderProps {
    logo?: LogoType;
}

export function Header({ logo }: HeaderProps) {
    return (
        <header className="flex justify-between px-6 py-4">
            {logo && LOGOS[logo]}
            <ThemeToggle />
        </header>
    );
}
