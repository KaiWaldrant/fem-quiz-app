import { IconButton } from "@/components/icon-button";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import type { Quiz } from "@/types/quiz";
import { useState } from "react";
import { IconError } from "@/components/icons/icon-error";
import { Header } from "./header";

export function Questions({ quiz }: { quiz: Quiz }) {
    const questions = quiz.questions;
    const lengthOfQs = questions.length;
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
    const currentQuestion = questions[currentQuestionIndex];
    const options = currentQuestion.options;
    const [notSelected, setNotSelected] = useState<string | null>(null);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
    const [isCorrect, setIsCorrect] = useState<boolean>(false);
    const [submitText, setSubmitText] = useState("Submit Answer");

    const [countCorrect, setCountCorrect] = useState(0);

    const handleNotSelected = () => {
        setNotSelected("Please select an answer");
    };

    const checkAnswer = (answer: string, option: string | null) => {
        setIsCorrect(answer === option);
        setCountCorrect(isCorrect ? countCorrect + 1 : 0);
    };

    const handleSubmit = () => {
        if (!selectedAnswer) {
            handleNotSelected();
            return;
        }
        setNotSelected(null);
        setIsSubmitted(true);
        setSubmitText("Next Question");
        checkAnswer(currentQuestion.answer, selectedAnswer);
    };

    const handleNextQuestion = () => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setIsCorrect(false);
        setIsSubmitted(false);
        setSelectedAnswer(null);
        setNotSelected(null);
        setSubmitText("Submit Answer");
    };

    return (
        <>
            <Header />
            <main className="grid gap-10 px-6 py-8 ">
                <section className="grid gap-6">
                    <div className="grid gap-4">
                        <div className="preset-5-mobile italic text-grey-500">
                            Question {currentQuestionIndex + 1} of {lengthOfQs}
                        </div>
                        <h2 className="preset-3-mobile">
                            {currentQuestion.question}
                        </h2>
                    </div>
                    <div className="bg-white dark:bg-blue-850 h-4 rounded-full px-1 flex items-center">
                        <Progress
                            className="bg-white dark:bg-blue-850"
                            value={
                                (100 / lengthOfQs) * currentQuestionIndex + 1
                            }
                        />
                    </div>
                </section>

                <section className="grid gap-4">
                    <IconButton
                        className={
                            selectedAnswer === options[0] && !isSubmitted
                                ? "border-purple-600"
                                : isSubmitted &&
                                    isCorrect &&
                                    selectedAnswer === options[0]
                                  ? "border-green-500"
                                  : isSubmitted &&
                                      selectedAnswer === options[0] &&
                                      !isCorrect
                                    ? "border-red-500"
                                    : ""
                        }
                        containerVariant={
                            selectedAnswer === options[0] && !isSubmitted
                                ? "selected"
                                : isSubmitted &&
                                    isCorrect &&
                                    selectedAnswer === options[0]
                                  ? "success"
                                  : isSubmitted &&
                                      selectedAnswer === options[0] &&
                                      !isCorrect
                                    ? "error"
                                    : "default"
                        }
                        text="A"
                        onClick={() => setSelectedAnswer(options[0])}
                    >
                        {options[0]}
                    </IconButton>
                    <IconButton
                        className={
                            selectedAnswer === options[1] && !isSubmitted
                                ? "border-purple-600"
                                : isSubmitted &&
                                    isCorrect &&
                                    selectedAnswer === options[1]
                                  ? "border-green-500"
                                  : isSubmitted &&
                                      selectedAnswer === options[1] &&
                                      !isCorrect
                                    ? "border-red-500"
                                    : ""
                        }
                        containerVariant={
                            selectedAnswer === options[1] && !isSubmitted
                                ? "selected"
                                : isSubmitted &&
                                    isCorrect &&
                                    selectedAnswer === options[1]
                                  ? "success"
                                  : isSubmitted &&
                                      selectedAnswer === options[1] &&
                                      !isCorrect
                                    ? "error"
                                    : "default"
                        }
                        text="B"
                        onClick={() => setSelectedAnswer(options[1])}
                    >
                        {currentQuestion.options[1]}
                    </IconButton>
                    <IconButton
                        className={
                            selectedAnswer === options[2] && !isSubmitted
                                ? "border-purple-600"
                                : isSubmitted &&
                                    isCorrect &&
                                    selectedAnswer === options[2]
                                  ? "border-green-500"
                                  : isSubmitted &&
                                      selectedAnswer === options[2] &&
                                      !isCorrect
                                    ? "border-red-500"
                                    : ""
                        }
                        containerVariant={
                            selectedAnswer === options[2] && !isSubmitted
                                ? "selected"
                                : isSubmitted &&
                                    isCorrect &&
                                    selectedAnswer === options[2]
                                  ? "success"
                                  : isSubmitted &&
                                      selectedAnswer === options[2] &&
                                      !isCorrect
                                    ? "error"
                                    : "default"
                        }
                        text="C"
                        onClick={() => setSelectedAnswer(options[2])}
                    >
                        {currentQuestion.options[2]}
                    </IconButton>
                    <IconButton
                        className={
                            selectedAnswer === options[3] && !isSubmitted
                                ? "border-purple-600"
                                : isSubmitted &&
                                    isCorrect &&
                                    selectedAnswer === options[3]
                                  ? "border-green-500"
                                  : isSubmitted &&
                                      selectedAnswer === options[3] &&
                                      !isCorrect
                                    ? "border-red-500"
                                    : ""
                        }
                        containerVariant={
                            selectedAnswer === options[3] && !isSubmitted
                                ? "selected"
                                : isSubmitted &&
                                    isCorrect &&
                                    selectedAnswer === options[3]
                                  ? "success"
                                  : isSubmitted &&
                                      selectedAnswer === options[3] &&
                                      !isCorrect
                                    ? "error"
                                    : "default"
                        }
                        text="D"
                        onClick={() => setSelectedAnswer(options[3])}
                    >
                        {currentQuestion.options[3]}
                    </IconButton>
                    <Button
                        variant={"submit"}
                        className={`p-4 rounded-xl justify-center min-h-fit ${notSelected ? "white-overlay" : ""}`}
                        onClick={
                            submitText == "Next Question"
                                ? handleNextQuestion
                                : handleSubmit
                        }
                    >
                        {submitText}
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
