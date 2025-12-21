import { cn } from "@/lib/utils";
import { type IconProps } from "./icons/icon";

interface IconContainerProps {
    icon?: React.ComponentType<IconProps>;
    text?: string;
    iconSize?: number | string;
    iconClassName?: string;
    textClassName?: string;
    containerClassName?: string;
    variant?: "default" | "selected" | "success" | "error";
    rounded?: "sm" | "md" | "lg" | "full";
    children?: React.ReactNode;
}

const variantStyles = {
    default: "bg-grey-50 text-grey-500",
    selected: "bg-purple-600 text-white",
    success: "bg-green-500 text-white ",
    error: "bg-red-500 text-white ",
};

const roundedStyles = {
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full",
};

export function IconContainer({
    icon: IconComponent,
    text,
    iconSize,
    iconClassName,
    textClassName,
    containerClassName,
    variant = "default",
    rounded = "md",
    children,
}: IconContainerProps) {
    return (
        <div
            className={cn(
                "flex items-center justify-center",
                variantStyles[variant],
                roundedStyles[rounded],
                containerClassName,
            )}
        >
            {IconComponent && (
                <IconComponent size={iconSize} className={iconClassName} />
            )}
            {text && (
                <span
                    className={cn(
                        "preset-4-mobile md:text-preset4",
                        textClassName,
                    )}
                >
                    {text}
                </span>
            )}
            {children}
        </div>
    );
}
