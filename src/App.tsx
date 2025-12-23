import "./App.css";
import { Home } from "@/components/home";
import { Questions } from "@/components/questions";
import { Result } from "@/components/result";
import { ThemeProvider } from "@/components/theme-provider";
import type { LogoType } from "@/components/logo";

import { useState } from "react";

import type { Quiz } from "@/types/quiz";
import quizData from "@/data/data.json";

function App() {
    const [selectedQuiz, setSelectedQuiz] = useState<Quiz | null>(null);
    const [showResults, setShowResults] = useState(false);
    const [score, setScore] = useState(0);

    const handleCategorySelect = (category: string) => {
        if (!quizData) return;
        const quiz = quizData.quizzes.find((q) => q.title === category);
        if (quiz) setSelectedQuiz(quiz);
    };

    const handleQuizComplete = (finalScore: number) => {
        setScore(finalScore);
        setShowResults(true);
    };

    const handleBackToHome = () => {
        setSelectedQuiz(null);
        setShowResults(false);
    };

    return (
        <ThemeProvider defaultTheme="system" storageKey="quiz-theme">
            <div className="flex flex-col min-h-svh tablet:items-center tablet:gap-12 desktop:gap-21  text-blue-900 dark:text-white bg-svg bg-grey-50 dark:bg-blue-900">
                {!selectedQuiz ? (
                    <Home onSelectQuiz={handleCategorySelect} />
                ) : showResults ? (
                    <Result
                        title={selectedQuiz.title as LogoType}
                        score={score}
                        totalQuestions={selectedQuiz.questions.length}
                        onPlayAgain={handleBackToHome}
                    />
                ) : (
                    <Questions
                        quiz={selectedQuiz}
                        onQuizComplete={handleQuizComplete}
                    />
                )}
            </div>
        </ThemeProvider>
    );
}

export default App;
