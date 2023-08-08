"use client";

import Link from "next/link";
import UseIdExample from "@/components/useId/useId";

export default function UseId() {
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
                    useId Hook
                </p>
                <Link
                    href="https://react.dev/reference/react/useId"
                    className=" text-indigo-400 text-lg hover:text-indigo-200 transition-all underline my-3"
                >
                    Official Docs
                </Link>
            </div>
            <div className="flex-1 flex w-full flex-wrap flex-col">
                <p className="text-lg text-stone-200">
                    useTransition is a React Hook that creates random generated
                    id.
                </p>
                <code className="my-2 pl-5">
                    const passwordHintId = useId();
                </code>
                <p className="text-lg text-stone-200">
                    useId should not be used to generate keys in a list. Keys
                    should be generated from your data.
                </p>
                <hr className="mt-10" />
                <div className="my-10">
                    <UseIdExample />
                </div>
                <hr className="mt-10" />
            </div>
        </main>
    );
}
