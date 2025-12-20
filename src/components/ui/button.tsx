import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
    "inline-flex items-center gap-2 whitespace-nowrap preset-4-mobile rounded-md shrink-0 outline-transparent border-2 border-solid border-transparent aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive ",
    {
        variants: {
            variant: {
                default:
                    "bg-white text-blue-900 dark:bg-blue-850 dark:text-white",
                purple: "hover:border-3 focus-visible:border-3 hover:border-purple-600 focus-visible:border-purple-600",
                submit: "text-white bg-purple-600",
                // outline:
                //   "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
                // secondary:
                //   "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                // ghost:
                //   "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
                // link: "text-primary underline-offset-4 hover:underline",
            },
            size: {
                default: "h-9 px-4 py-2 has-[>svg]:px-3",
                sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
                lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
                icon: "size-9",
                "icon-sm": "size-8",
                "icon-lg": "size-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    },
);

function Button({
    className,
    variant = "default",
    size = "default",
    asChild = false,
    ...props
}: React.ComponentProps<"button"> &
    VariantProps<typeof buttonVariants> & {
        asChild?: boolean;
    }) {
    const Comp = asChild ? Slot : "button";

    return (
        <Comp
            data-slot="button"
            type="button"
            data-variant={variant}
            data-size={size}
            className={cn(buttonVariants({ variant, size }), className)}
            {...props}
        />
    );
}

export { Button, buttonVariants };
