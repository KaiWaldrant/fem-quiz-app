import { Switch } from "./ui/switch";
import { useTheme } from "./theme-provider";
import { IconMoon } from "./icons/icon-moon";
import { IconSun } from "./icons/icon-sun";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className: string }) {
    const { theme, setTheme } = useTheme();
    const isDark = theme === "dark";

    return (
        <div className={cn("flex gap-2 tablet:gap-4 items-center", className)}>
            <IconSun className="size-4 tablet:size-6 dark:fill-white  fill-grey-500 }" />

            <Switch
                checked={isDark}
                onCheckedChange={(checked) =>
                    setTheme(checked ? "dark" : "light")
                }
                aria-label="Toggle theme"
                className="bg-purple-600 tablet:w-12 h-full"
            />

            <IconMoon className="size-4 tablet:size-6 fill-grey-500 dark:fill-white" />
        </div>
    );
}
