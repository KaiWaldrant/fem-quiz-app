import { IconContainer } from "./icon-container";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { type IconProps } from "./icons/icon";

interface IconButtonProps extends React.ComponentProps<"button"> {
    icon?: React.ComponentType<IconProps>;
    text?: string;
    iconSize?: number | string;
    iconClassName?: string;
    textClassName?: string;
    containerClassName?: string;
    containerVariant?: "default" | "success" | "error";
    containerRounded?: "sm" | "md" | "lg" | "full";
}

export function IconButton({
    icon,
    text,
    iconSize,
    iconClassName,
    textClassName,
    containerClassName,
    containerVariant = "default",
    containerRounded = "md",
    className,
    children,
    ...props
}: IconButtonProps) {
    return (
        <Button
            className={cn(
                "flex align-left gap-4 p-4 rounded-xl min-h-fit",
                className,
            )}
            {...props}
        >
            <IconContainer
                icon={icon}
                text={text}
                iconSize={iconSize}
                iconClassName={iconClassName}
                textClassName={textClassName}
                containerClassName={containerClassName}
                variant={containerVariant}
                rounded={containerRounded}
            />
            {children}
        </Button>
    );
}
