import { ThemeToggle } from "./theme-toggle";
import { Logo, type LogoType } from "./logo";

interface HeaderProps {
    logo?: LogoType;
}

export function Header({ logo }: HeaderProps) {
    return (
        <header className="flex max-tablet:px-6 max-tablet:py-4 tablet:mt-10 desktop:mt-21 tablet:w-160 desktop:w-290">
            {logo !== undefined ? <Logo type={logo} /> : ""}
            <ThemeToggle className="ml-auto my-3.5" />
        </header>
    );
}
