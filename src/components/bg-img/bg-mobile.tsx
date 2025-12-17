import type { SVGProps } from "react";
import { cn } from "@/lib/utils";

export function BgMobile({ className }: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="375"
            height="812"
            fill="none"
            viewBox="0 0 375 812"
            className={cn(className)}
        >
            <rect
                className="fill-grey-50 dark:fill-blue-900"
                width="100%"
                height="100%"
            />
            <circle cx="-113.5" cy="323.5" r="416.5" stroke-width="144" />
        </svg>
    );
}
