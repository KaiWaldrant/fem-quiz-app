import { IconContainer } from "@/components/icon-container";
import { IconHTML } from "@/components/icons/icon-html";

import { cn } from "@/lib/utils";

export function LogoHTML({ className }: { className?: string }) {
    return (
        <div className={cn("flex items-center gap-4 tablet:gap-6", className)}>
            <IconContainer
                icon={IconHTML}
                iconSize={"28.57px"}
                iconClassName="fill-orange-400"
                containerClassName="bg-orange-50 size-10 tablet:size-14"
            />
            <p className="text-blue-850 dark:text-white preset-4-mobile tablet:preset-4">
                HTML
            </p>
        </div>
    );
}
