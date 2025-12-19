import { IconContainer } from "@/components/icon-container";
import { IconHTML } from "@/components/icons/icon-html";

import { cn } from "@/lib/utils";

export function LogoHTML({ className }: { className?: string }) {
    return (
        <div className={cn("flex items-center gap-4 md:gap-6", className)}>
            <IconContainer
                icon={IconHTML}
                iconSize={"28.57px"}
                iconClassName="fill-orange-400"
                containerClassName="bg-orange-50 size-10"
            />
            <p className="text-blue-850 dark:text-white preset-4-mobile md:preset-4">
                HTML
            </p>
        </div>
    );
}
