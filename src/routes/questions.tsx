import { IconButton } from "@/components/icon-button";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
export function Questions() {
    return (
        <>
            <section className="grid gap-6">
                <div className="grid gap-4">
                    <div className="preset-5-mobile italic text-grey-500">
                        Question 6 of 10
                    </div>
                    <h2 className="preset-3-mobile">
                        Which of these color contrast ratios defines the minimum
                        WCAG 2.1 Level AA requirement for normal text?
                    </h2>
                </div>
                <div className="bg-white h-4 rounded-full px-1 flex items-center">
                    <Progress className="bg-white" value={60} />
                </div>
            </section>

            <section className="grid gap-4">
                <IconButton text="A">4.5:1</IconButton>
                <IconButton text="B">3:1</IconButton>
                <IconButton text="C">2.5:1</IconButton>
                <IconButton text="D">5:1</IconButton>
                <Button
                    variant={"submit"}
                    className="p-4 rounded-xl justify-center min-h-fit"
                >
                    Submit Answer
                </Button>
            </section>
        </>
    );
}
