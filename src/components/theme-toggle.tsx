import { Switch } from "./ui/switch";
import { useTheme } from "./theme-provider";
import { IconMoon } from "./icons/icon-moon";
import { IconSun } from "./icons/icon-sun";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const isDark = theme === "dark";

    return (
        <div className="flex gap-2">
            <IconSun className="size-4 dark:fill-white : fill-grey-500 }" />

            <Switch
                checked={isDark}
                onCheckedChange={(checked) =>
                    setTheme(checked ? "dark" : "light")
                }
                aria-label="Toggle theme"
                className="bg-purple-600"
            />

            <IconMoon className="size-4 fill-grey-500 dark:fill-white" />
        </div>
    );
}
