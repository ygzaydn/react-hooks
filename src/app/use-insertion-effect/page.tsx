"use client";

import Link from "next/link";

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
                    useInsertionEffect Hook
                </p>
                <Link
                    href="https://react.dev/reference/react/useInsertionEffect"
                    className=" text-indigo-400 text-lg hover:text-indigo-200 transition-all underline my-3"
                >
                    Official Docs
                </Link>
            </div>
            <div className="flex-1 flex w-full flex-wrap flex-col">
                <p className="text-lg text-stone-200">
                    useInsertionEffect allows inserting elements into the DOM
                    before any layout effects fire. useInsertionEffect is for
                    CSS-in-JS library authors. Unless you are working on a
                    CSS-in-JS library and need a place to inject the styles, you
                    probably want useEffect or useLayoutEffect instead.
                </p>
                <code className="my-2 pl-5">
                    useInsertionEffect(setup, dependencies?)
                </code>
            </div>
        </main>
    );
}
