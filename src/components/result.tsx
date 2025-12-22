import { Header } from "./header";
import { Logo, type LogoType } from "./logo";
import { Button } from "./ui/button";

interface ResultProps {
    score: number;
    totalQuestions: number;
    title: LogoType;
    onPlayAgain: () => void;
}

export function Result({
    score,
    totalQuestions,
    title,
    onPlayAgain,
}: ResultProps) {
    return (
        <>
            <Header logo={title} />
            <main className="grid gap-10 px-6 py-8">
                <div className="grid gap-2">
                    <h1 className="preset-2-light-mobile">Quiz completed</h1>
                    <h2 className="preset-2-medium-mobile">You Scored...</h2>
                </div>
                <div className="grid gap-4">
                    <div className="grid bg-white dark:bg-blue-850 justify-center gap-4 p-8 rounded-xl">
                        <Logo type={title} />
                        <div className="grid gap-4">
                            <p className="preset-1-mobile text-center">
                                {score}
                            </p>
                            <p className="preset-4-mobile text-grey-500 dark:text-blue-300 text-center">
                                out of {totalQuestions}
                            </p>
                        </div>
                    </div>
                    <Button
                        variant={"submit"}
                        className="p-4 rounded-xl justify-center min-h-fit"
                        onClick={onPlayAgain}
                    >
                        Play again
                    </Button>
                </div>
            </main>
        </>
    );
}
