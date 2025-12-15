import { Button } from "@/components/ui/button";

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
                <Button>Accessibility</Button>
            </section>
        </>
    );
}
