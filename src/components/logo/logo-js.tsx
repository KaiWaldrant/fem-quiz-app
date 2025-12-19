import { IconContainer } from "@/components/icon-container";
import { IconJs } from "@/components/icons/icon-js";

import { cn } from "@/lib/utils";

export function LogoJS({ className }: { className?: string }) {
    return (
        <div className={cn("flex items-center gap-4 md:gap-6", className)}>
            <IconContainer
                icon={IconJs}
                iconSize={"28.57px"}
                iconClassName="fill-blue-500"
                containerClassName="bg-blue-50 size-10"
            />
            <p className="text-blue-850 dark:text-white preset-4-mobile md:preset-4">
                JS
            </p>
        </div>
    );
}
