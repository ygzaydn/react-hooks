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
                    useMemo Hook
                </p>
                <Link
                    href="https://react.dev/reference/react/useMemo"
                    className=" text-indigo-400 text-lg hover:text-indigo-200 transition-all underline my-3"
                >
                    Official Docs
                </Link>
            </div>
            <div className="flex-1 flex w-full flex-wrap flex-col">
                <p className="text-lg text-stone-200">
                    useMemo is a React hook that caches the result of a
                    calculation to prevent heavy loads on rerenders.
                </p>
                <code className="my-2 pl-5">
                    const cachedValue = useMemo(calculateValue, dependencies)
                </code>
                <div>
                    <code className="my-2 pl-5">
                        {`const visibleTodos = useMemo(() => filterTodos(todos, tab),[todos, tab]);`}
                    </code>
                    <p className="mt-2">
                        value of &apos;visibleTodos&apos; will be same unless
                        there are any change on &apos;todos&apos; or
                        &apos;tab&apos;
                    </p>
                    <p className="mt-2">
                        Your component should work without useMemo, useMemo is
                        here for performance issues. So if you have any problems
                        on your component, useMemo will not solve it.
                        useMemo&apos;s main goal is to escape unnecessary
                        re-calculations during re-renders.
                    </p>
                    <p className="mt-2">
                        It&apos;ll basically keep track of parameters that are
                        on its depencency array, and will not make any changes
                        if there is no change on those variables. useMemo is
                        really handy on expensive array calculations.
                    </p>
                    <p className="mt-2">
                        Another useful use case is to prevent unnecessary
                        rerenders of components. By the nature of React, any
                        re-renders of a component will cause a re-render of its
                        child components. Although it is not necessary, it is
                        the general flow. Some components may need that
                        re-render, whereas some may not. For those who does not
                        need re-renders can be memoized by using React `memo`
                        method. All you need to is to wrap component by `memo`
                        method that React provides.
                    </p>
                </div>
            </div>
        </main>
    );
}
