import { Button } from "@/components/ui/button";

export function Home() {
    return (
        <>
            <main>
                <section>
                    <h1 className="heading-1">
                        Welcome to the <span>Frontend Quiz!</span>
                    </h1>
                    <h2 className="subheading">
                        Pick a subject to get started.
                    </h2>
                </section>
                <section className="catagories">
                    <Button>HTML</Button>
                    <Button>CSS</Button>
                    <Button>Javascript</Button>
                    <Button>Accessibility</Button>
                </section>
            </main>
        </>
    );
}
