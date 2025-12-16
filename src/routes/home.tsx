import { Button } from "@/components/ui/button";
import { IconAccessibility } from "@/components/icons/icon-accessibility";

export function Home() {
    return (
        <>
            <section className="grid gap-4">
                <h1 className="text-blue-900 text-preset-2-light-mobile">
                    Welcome to the{" "}
                    <span className="text-preset-2-medium-mobile">
                        Frontend Quiz!
                    </span>
                </h1>
                <h2 className="text-preset-5-mobile italic text-grey-500">
                    Pick a subject to get started.
                </h2>
            </section>
            <section className="grid gap-4">
                <Button className="p-4 text-preset-4-mobile">HTML</Button>
                <Button>CSS</Button>
                <Button>Javascript</Button>
                <Button>
                    <div className="bg-purple-100 rounded-md size-10 flex justify-center">
                        <IconAccessibility
                            className="stroke-purple-600 self-center"
                            size="28.57px"
                        />
                    </div>{" "}
                    Accessibility
                </Button>
            </section>
        </>
    );
}
