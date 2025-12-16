import type { SVGProps } from "react";
import { cn } from "@/lib/utils";

export interface IconProps extends SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}

export function Icon({
    size = 24,
    className,
    children,
    viewBox = "0 0 24 24",
    fill = "none",
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
            viewBox={viewBox}
            fill={fill}
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeLinecap={strokeLinecap}
            strokeLinejoin={strokeLinejoin}
            className={cn("size-4", className)}
            {...props}
        >
            {children}
        </svg>
    );
}
