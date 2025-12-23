import { Header } from "@/components/header";
import { Main } from "@/components/main";
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
            <Main>
                <section className="grid content-start gap-4 desktop:gap-12">
                    <h1 className=" preset-2-light-mobile tablet:preset-2-light">
                        Welcome to the{" "}
                        <span className="preset-2-medium-mobile tablet:preset-2-medium">
                            Frontend Quiz!
                        </span>
                    </h1>
                    <h2 className="preset-5-mobile tablet:preset-6 italic text-grey-500 dark:text-blue-300">
                        Pick a subject to get started.
                    </h2>
                </section>
                <section className="grid gap-4 tablet:gap-6">
                    <IconButton
                        containerClassName="bg-orange-50"
                        icon={IconHTML}
                        iconClassName="fill-orange-400"
                        iconSize="28.57px"
                        onClick={() => onSelectQuiz("HTML")}
                    >
                        HTML
                    </IconButton>
                    <IconButton
                        containerClassName="bg-green-100"
                        icon={IconCSS}
                        iconClassName="fill-green-500"
                        iconSize="28.57px"
                        onClick={() => onSelectQuiz("CSS")}
                    >
                        CSS
                    </IconButton>
                    <IconButton
                        containerClassName="bg-blue-50"
                        icon={IconJs}
                        iconClassName="fill-blue-500"
                        iconSize="28.57px"
                        onClick={() => onSelectQuiz("JavaScript")}
                    >
                        JavaScript
                    </IconButton>
                    <IconButton
                        containerClassName="bg-purple-100"
                        icon={IconAccessibility}
                        iconClassName="fill-purple-600"
                        iconSize="28.57px"
                        onClick={() => onSelectQuiz("Accessibility")}
                    >
                        Accessibility
                    </IconButton>
                </section>
            </Main>
        </>
    );
}
