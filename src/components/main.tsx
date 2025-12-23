interface MainProps {
    children?: React.ReactNode;
}

export function Main({ children }: MainProps) {
    return (
        <main className="grid desktop:grid-cols-2 gap-10 tablet:gap-16 desktop:gap-32 max-tablet:px-6 max-tablet:py-8 tablet:w-160 desktop:w-290">
            {children}
        </main>
    );
}
