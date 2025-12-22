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
            <div className="flex flex-col min-h-svh min-w-svw text-blue-900 dark:text-white bg-svg bg-grey-50 dark:bg-blue-900">
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
        //   <>
        //       {/*<div>
        //   <a href="https://vite.dev" target="_blank">
        //     <img src={viteLogo} className="logo" alt="Vite logo" />
        //   </a>
        //   <a href="https://react.dev" target="_blank">
        //     <img src={reactLogo} className="logo react" alt="React logo" />
        //   </a>
        // </div>
        // <h1>Vite + React</h1>
        // <div className="card">
        //   <button onClick={() => setCount((count) => count + 1)}>
        //     count is {count}
        //   </button>
        //   <p>
        //     Edit <code>src/App.tsx</code> and save to test HMR
        //   </p>
        // </div>
        // <p className="read-the-docs">
        //   Click on the Vite and React logos to learn more
        // </p>*/}
        // </>
    );
}

export default App;
