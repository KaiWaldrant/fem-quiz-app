import { ThemeToggle } from "./theme-toggle";
import { Logo, type LogoType } from "./logo";

interface HeaderProps {
    logo?: LogoType;
}

export function Header({ logo }: HeaderProps) {
    return (
        <header className="flex justify-between px-6 py-4">
            {logo && <Logo type={logo} />}
            <ThemeToggle />
        </header>
    );
}
