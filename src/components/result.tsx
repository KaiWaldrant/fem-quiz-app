import { Header } from "./header";
import { Main } from "./main";
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
            <Main>
                <section className="grid content-start gap-2">
                    <h1 className="preset-2-light-mobile tablet:preset-2-light">
                        Quiz completed
                    </h1>
                    <h2 className="preset-2-medium-mobile tablet:preset-2-medium">
                        You Scored...
                    </h2>
                </section>
                <section className="grid gap-4 tablet:gap-8">
                    <div className="grid bg-white dark:bg-blue-850 justify-center gap-4 tablet:gap-10 p-8 tablet:p-12 rounded-xl tablet:rounded-3xl">
                        <Logo type={title} />
                        <div className="grid gap-4">
                            <p className="preset-1-mobile tablet:preset-1 text-center">
                                {score}
                            </p>
                            <p className="preset-4-mobile tablet:preset-5-regular text-grey-500 dark:text-blue-300 text-center">
                                out of {totalQuestions}
                            </p>
                        </div>
                    </div>
                    <Button
                        variant={"submit"}
                        className="p-4 tablet:p-8 rounded-xl justify-center min-h-fit"
                        onClick={onPlayAgain}
                    >
                        Play again
                    </Button>
                </section>
            </Main>
        </>
    );
}
