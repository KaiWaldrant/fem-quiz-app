import { IconButton } from "@/components/icon-button";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import type { Quiz } from "@/types/quiz";
import { useState } from "react";
import { IconError } from "@/components/icons/icon-error";
import { Header } from "./header";

export function Questions({ quiz }: { quiz: Quiz }) {
    const questions = quiz.questions;
    const [notSelected, setNotSelected] = useState<string | null>(null);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

    const handleNotSelected = () => {
        setNotSelected("Please select an answer");
    };

    const handleSubmit = () => {
        if (!selectedAnswer) {
            handleNotSelected();
        }
    };

    return (
        <>
            <Header />
            <main className="grid gap-10 px-6 py-8 ">
                <section className="grid gap-6">
                    <div className="grid gap-4">
                        <div className="preset-5-mobile italic text-grey-500">
                            Question 6 of 10
                        </div>
                        <h2 className="preset-3-mobile">
                            Which of these color contrast ratios defines the
                            minimum WCAG 2.1 Level AA requirement for normal
                            text?
                        </h2>
                    </div>
                    <div className="bg-white dark:bg-blue-850 h-4 rounded-full px-1 flex items-center">
                        <Progress
                            className="bg-white dark:bg-blue-850"
                            value={60}
                        />
                    </div>
                </section>

                <section className="grid gap-4">
                    <IconButton text="A">4.5:1</IconButton>
                    <IconButton text="B">3:1</IconButton>
                    <IconButton text="C">2.5:1</IconButton>
                    <IconButton text="D">5:1</IconButton>
                    <Button
                        variant={"submit"}
                        className={`p-4 rounded-xl justify-center min-h-fit ${notSelected ? "white-overlay" : ""}`}
                        onClick={handleSubmit}
                    >
                        Submit Answer
                    </Button>
                    <div
                        className="flex gap-2 justify-center items-center text-red-500 preset-4-mobile md:preset-4"
                        aria-live="polite"
                    >
                        {notSelected ? (
                            <IconError className="fill-red-500 size-6" />
                        ) : null}
                        <p>{notSelected}</p>
                    </div>
                </section>
            </main>
        </>
    );
}
