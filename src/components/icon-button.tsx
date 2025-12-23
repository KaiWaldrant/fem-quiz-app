import { IconContainer } from "./icon-container";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { type IconProps } from "./icons/icon";
import { IconIncorrect } from "./icons/icon-incorrect";
import { IconCorrect } from "./icons/icon-correct";

interface IconButtonProps extends React.ComponentProps<"button"> {
    icon?: React.ComponentType<IconProps>;
    text?: string;
    iconSize?: number | string;
    iconClassName?: string;
    textClassName?: string;
    containerClassName?: string;
    containerVariant?: "default" | "selected" | "success" | "error";
    containerRounded?: "sm" | "md" | "lg" | "full";
    correct?: boolean;
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
    correct = undefined,
    className,
    children,
    ...props
}: IconButtonProps) {
    return (
        <Button
            className={cn(
                "flex align-left gap-4 tablet:gap-8 p-4 rounded-xl tablet:rounded-3xl min-h-fit whitespace-normal wrap-break-word",
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
                containerClassName={cn(
                    "flex-none size-10 tablet:size-14",
                    containerClassName,
                )}
                variant={containerVariant}
                rounded={containerRounded}
            />
            {children}
            {correct !== undefined &&
                (correct ? (
                    <IconCorrect className="fill-green-500 flex-none size-10 tablet:size-14" />
                ) : (
                    <IconIncorrect className="fill-red-500 flex-none size-10 tablet:size-14" />
                ))}
        </Button>
    );
}
