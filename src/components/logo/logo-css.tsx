import { IconContainer } from "@/components/icon-container";
import { IconCSS } from "@/components/icons/icon-css";

import { cn } from "@/lib/utils";

export function LogoCSS({ className }: { className?: string }) {
    return (
        <div className={cn("flex items-center gap-4 tablet:gap-6", className)}>
            <IconContainer
                icon={IconCSS}
                iconSize={"28.57px"}
                iconClassName="fill-green-500"
                containerClassName="bg-green-100 size-10 tablet:size-14"
            />
            <p className="text-blue-850 dark:text-white preset-4-mobile tablet:preset-4">
                CSS
            </p>
        </div>
    );
}
