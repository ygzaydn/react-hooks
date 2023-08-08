"use client";

import Link from "next/link";
import UseDeferredValueExample from "../../components/useDeferredValue/useDeferredValue";

export default function UseDeferredValue() {
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
                    useDeferredValue Hook
                </p>
                <Link
                    href="https://react.dev/reference/react/useDeferredValue"
                    className=" text-indigo-400 text-lg hover:text-indigo-200 transition-all underline my-3"
                >
                    Official Docs
                </Link>
            </div>
            <div className="flex-1 flex w-full flex-wrap flex-col">
                <p className="text-lg text-stone-200">
                    useDeferredValue is a React Hook that defers the value on
                    state updates.
                </p>
                <code className="my-2 pl-5">
                    const deferredValue = useDeferredValue(value)
                </code>
                <p className="text-lg text-stone-200">
                    This hook generally used on state changes (and with
                    `useState`). It delays the state change during any state
                    change operation to have smoother render changes. The hook
                    &apos;lags-out&apos; the state change.
                </p>
                <hr className="mt-10" />
                <div className="my-10">
                    <UseDeferredValueExample />
                </div>
                <hr className="mt-10" />
            </div>
        </main>
    );
}
