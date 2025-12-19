import "./App.css";
import { Home } from "@/components/home";
import { Questions } from "@/components/questions";
import { Layout } from "./layout";
import { ThemeProvider } from "@/components/theme-provider";

import { useState } from "react";

import type { Quiz, QuizData } from "@/types/quiz";
import quizData from "@/data/data.json";

function App() {
    const [selectedQuiz, setSelectedQuiz] = useState<Quiz | null>(null);

    const handleCategorySelect = (category: string) => {
        if (!quizData) return;
        const quiz = quizData.quizzes.find((q) => q.title === category);
        if (quiz) setSelectedQuiz(quiz);
    };

    return (
        <ThemeProvider defaultTheme="system" storageKey="quiz-theme">
            <div className="flex flex-col min-h-svh min-w-svw text-blue-900 dark:text-white bg-svg bg-grey-50 dark:bg-blue-900">
                {!selectedQuiz ? (
                    <Home onSelectQuiz={handleCategorySelect} />
                ) : (
                    <Questions
                        quiz={selectedQuiz}
                        onBack={() => setSelectedQuiz(null)}
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
