import Link from "next/link";

export default function UseTransition() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="flex-1 flex items-center">
                <p className={`text-9xl antialiased  text-indigo-200`}>
                    React Hooks
                </p>
            </div>
            <div className="flex-1 flex justify-around w-full flex-wrap">
                <Link
                    className={`text-3xl antialiased text-indigo-500 m-5 cursor-pointer hover:text-indigo-300 transition-none underline `}
                    href="/use-transition"
                >
                    useTransition
                </Link>
                <Link
                    className={`text-3xl antialiased text-indigo-500 m-5 cursor-pointer hover:text-indigo-300 transition-none underline `}
                    href="/use-deferred-value"
                >
                    useDeferredValue
                </Link>
                <Link
                    className={`text-3xl antialiased text-indigo-500 m-5 cursor-pointer hover:text-indigo-300 transition-none underline `}
                    href="use-id"
                >
                    useId
                </Link>
                <Link
                    className={`text-3xl antialiased text-indigo-500 m-5 cursor-pointer hover:text-indigo-300 transition-none underline `}
                    href="use-sync-external-store"
                >
                    useSyncExternalStore
                </Link>
                <Link
                    className={`text-3xl antialiased text-indigo-500 m-5 cursor-pointer hover:text-indigo-300 transition-none underline `}
                    href="use-insertion-effect"
                >
                    useInsertionEffect
                </Link>
                <Link
                    className={`text-3xl antialiased text-indigo-500 m-5 cursor-pointer hover:text-indigo-300 transition-none underline `}
                    href="use-memo"
                >
                    useMemo
                </Link>
            </div>
        </main>
    );
}
