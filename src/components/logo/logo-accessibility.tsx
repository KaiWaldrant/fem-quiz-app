import { IconContainer } from "@/components/icon-container";
import { IconAccessibility } from "@/components/icons/icon-accessibility";

import { cn } from "@/lib/utils";

export function LogoAccessibility({ className }: { className?: string }) {
    return (
        <div className={cn("flex items-center gap-4 md:gap-6", className)}>
            <IconContainer
                icon={IconAccessibility}
                iconSize={"28.57px"}
                iconClassName="fill-purple-600"
                containerClassName="bg-purple-100 size-10"
            />
            <p className="text-blue-850 dark:text-white preset-4-mobile md:preset-4">
                Accessibility
            </p>
        </div>
    );
}
