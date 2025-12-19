import { Header } from "@/components/header";
import { IconButton } from "@/components/icon-button";
import { IconAccessibility } from "@/components/icons/icon-accessibility";
import { IconCSS } from "@/components/icons/icon-css";
import { IconHTML } from "@/components/icons/icon-html";
import { IconJs } from "@/components/icons/icon-js";

export function Home({
    onSelectQuiz,
}: {
    onSelectQuiz: (title: string) => void;
}) {
    return (
        <>
            <Header />
            <main className="grid gap-10 px-6 py-8">
                <section className="grid gap-4">
                    <h1 className=" preset-2-light-mobile">
                        Welcome to the{" "}
                        <span className="preset-2-medium-mobile">
                            Frontend Quiz!
                        </span>
                    </h1>
                    <h2 className="preset-5-mobile italic text-grey-500 dark:text-blue-300">
                        Pick a subject to get started.
                    </h2>
                </section>
                <section className="grid gap-4">
                    <IconButton
                        containerClassName="bg-orange-50 size-10"
                        icon={IconHTML}
                        iconClassName="fill-orange-400"
                        iconSize="28.57px"
                        onClick={() => onSelectQuiz("HTML")}
                    >
                        HTML
                    </IconButton>
                    <IconButton
                        containerClassName="bg-green-100 size-10"
                        icon={IconCSS}
                        iconClassName="fill-green-500"
                        iconSize="28.57px"
                        onClick={() => onSelectQuiz("CSS")}
                    >
                        CSS
                    </IconButton>
                    <IconButton
                        containerClassName="bg-blue-50 size-10"
                        icon={IconJs}
                        iconClassName="fill-blue-500"
                        iconSize="28.57px"
                        onClick={() => onSelectQuiz("JavaScript")}
                    >
                        JavaScript
                    </IconButton>
                    <IconButton
                        containerClassName="bg-purple-100 size-10"
                        icon={IconAccessibility}
                        iconClassName="fill-purple-600"
                        iconSize="28.57px"
                        onClick={() => onSelectQuiz("Accessibility")}
                    >
                        Accessibility
                    </IconButton>
                </section>
            </main>
        </>
    );
}
