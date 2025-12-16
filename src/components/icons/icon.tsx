import type { SVGProps } from "react";
import { cn } from "@/lib/utils";

export interface IconProps extends SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}

export function Icon({
    size,
    className,
    children,
    stroke = "currentColor",
    strokeWidth = 2,
    strokeLinecap = "round",
    strokeLinejoin = "round",
    ...props
}: IconProps) {
    return (
        <svg
            width={size}
            height={size}
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeLinecap={strokeLinecap}
            strokeLinejoin={strokeLinejoin}
            className={cn(className)}
            {...props}
        >
            {children}
        </svg>
    );
}
