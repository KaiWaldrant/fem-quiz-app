import type { SVGProps } from "react";
import { cn } from "@/lib/utils";

export function BgDesktop({ className }: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1440"
            height="960"
            fill="none"
            viewBox="0 0 1440 960"
            className={cn(className)}
        >
            <rect
                className="fill-grey-50 dark:fill-blue-900"
                width="100%"
                height="100%"
            />
            <circle cx="-50.5" cy="75.5" r="416.5" stroke-width="144" />
            <circle cx="1388.5" cy="840.5" r="416.5" stroke-width="144" />
        </svg>
    );
}
