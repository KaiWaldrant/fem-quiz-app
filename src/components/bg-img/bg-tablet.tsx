import type { SVGProps } from "react";
import { cn } from "@/lib/utils";

export function BgTablet({
    className,
    stroke = "currentColor",
}: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="438"
            height="531"
            fill="none"
            viewBox="0 0 438 531"
            className={cn(className)}
        >
            <circle
                cx="-50.5"
                cy="42.5"
                r="416.5"
                stroke={stroke}
                stroke-width="144"
            />
        </svg>
    );
}
