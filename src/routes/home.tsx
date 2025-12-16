import { IconButton } from "@/components/icon-button";
import { IconAccessibility } from "@/components/icons/icon-accessibility";

export function Home() {
    return (
        <>
            <section className="grid gap-4">
                <h1 className="text-blue-900 text-preset-2-light-mobile">
                    Welcome to the{" "}
                    <span className="text-preset-2-medium-mobile">
                        Frontend Quiz!
                    </span>
                </h1>
                <h2 className="text-preset-5-mobile italic text-grey-500">
                    Pick a subject to get started.
                </h2>
            </section>
            <section className="grid gap-4">
                <IconButton>HTML</IconButton>
                <IconButton>CSS</IconButton>
                <IconButton>Javascript</IconButton>
                <IconButton
                    containerClassName="bg-purple-100 size-10"
                    icon={IconAccessibility}
                    iconClassName="stroke-purple-600"
                    iconSize="28.75px"
                >
                    Accessibility
                </IconButton>
            </section>
        </>
    );
}
