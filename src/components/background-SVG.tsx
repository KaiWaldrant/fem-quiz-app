import { BgMobile } from "./bg-img/bg-mobile";
import { BgTablet } from "./bg-img/bg-tablet";
import { BgDesktop } from "./bg-img/bg-desktop";

export function BackgroundSVG() {
    return (
        <>
            <BgMobile className="md:hidden fixed -z-10 stroke-blue-100 dark:stroke-blue-950" />
            <BgTablet className="hidden md:max-lg:block fixed inset-0 w-full h-full -z-10  stroke-blue-100 dark:stroke-blue-950" />
            <BgDesktop className="hidden lg:block fixed inset-0 w-full h-full -z-10 stroke-blue-100 dark:stroke-blue-950" />
        </>
    );
}
