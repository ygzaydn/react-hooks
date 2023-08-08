"use client";

import Link from "next/link";
import UseTransitionExample from "../../components/useTransition/useTransition";

export default function UseTransition() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <Link
                href="/"
                className="absolute inset-5 text-indigo-400 text-lg hover:text-indigo-200 transition-all w-24 h-6"
            >
                Homepage
            </Link>
            <div className="flex items-center mb-16 flex-col">
                <p className={`text-6xl antialiased  text-indigo-200`}>
                    useTransition Hook
                </p>
                <Link
                    href="https://react.dev/reference/react/useTransition"
                    className=" text-indigo-400 text-lg hover:text-indigo-200 transition-all underline my-3"
                >
                    Official Docs
                </Link>
            </div>
            <div className="flex-1 flex w-full flex-wrap flex-col">
                <p className="text-lg text-stone-200">
                    useTransition is a React Hook that lets you update the state
                    without blocking the UI.
                </p>
                <code className="my-2 pl-5">
                    const [isPending, startTransition] = useTransition()
                </code>
                <p className="text-lg text-stone-200">
                    You can play with the demo component below. Section 1 has
                    heavy render load, so loading time is longer than other two.
                    Our UI will not froze when user clicks &apos;section1&apos;.
                </p>
                <hr className="mt-10" />
                <div className="my-10">
                    <UseTransitionExample />
                </div>
                <hr className="mt-10" />
            </div>
        </main>
    );
}
