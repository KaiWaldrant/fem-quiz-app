import type { SVGProps } from "react";
import { cn } from "@/lib/utils";

export function BgDesktop({
    className,
    stroke = "currentColor",
}: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1440"
            height="960"
            fill="none"
            viewBox="0 0 1440 960"
            className={cn(className)}
        >
            <circle
                cx="-50.5"
                cy="75.5"
                r="416.5"
                stroke={stroke}
                stroke-width="144"
            />
            <circle
                cx="1388.5"
                cy="840.5"
                r="416.5"
                stroke={stroke}
                stroke-width="144"
            />
        </svg>
    );
}
