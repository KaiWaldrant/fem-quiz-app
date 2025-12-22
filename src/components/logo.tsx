import { LogoHTML } from "./logo/logo-html";
import { LogoCSS } from "./logo/logo-css";
import { LogoJS } from "./logo/logo-js";
import { LogoAccessibility } from "./logo/logo-accessibility";

export type LogoType = "HTML" | "CSS" | "JavaScript" | "Accessibility";

const LOGOS: Record<LogoType, React.ReactElement> = {
    HTML: <LogoHTML />,
    CSS: <LogoCSS />,
    JavaScript: <LogoJS />,
    Accessibility: <LogoAccessibility />,
};

export function Logo({ type }: { type: LogoType }) {
    return LOGOS[type];
}
