"use client";

import Link from "next/link";
import UseSyncExternalStoreExample from "@/components/useSyncExternalStore/useSyncExternalStore";

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
                    useSyncExternalStore Hook
                </p>
                <Link
                    href="https://react.dev/reference/react/useSyncExternalStorage"
                    className=" text-indigo-400 text-lg hover:text-indigo-200 transition-all underline my-3"
                >
                    Official Docs
                </Link>
            </div>
            <div className="flex-1 flex w-full flex-wrap flex-col">
                <p className="text-lg text-stone-200">
                    useSyncExternalStore is a React Hook that lets you subscribe
                    to an external store.
                </p>
                <code className="my-2 pl-5">
                    const snapshot = useSyncExternalStore(subscribe,
                    getSnapshot, getServerSnapshot?)
                </code>

                <p className="text-md my-2 text-stone-200">
                    -subscribe: A function that takes a single callback argument
                    and subscribes it to the store. When the store changes, it
                    should invoke the provided callback. This will cause the
                    component to re-render. The subscribe function should return
                    a function that cleans up the subscription.
                </p>
                <p className="text-md my-2 text-stone-200">
                    -getSnapshot: A function that returns a snapshot of the data
                    in the store that’s needed by the component. While the store
                    has not changed, repeated calls to getSnapshot must return
                    the same value. If the store changes and the returned value
                    is different (as compared by Object.is), React re-renders
                    the component. optional
                </p>
                <p className="text-md my-2 text-stone-200">
                    -getServerSnapshot: A function that returns the initial
                    snapshot of the data in the store. It will be used only
                    during server rendering and during hydration of
                    server-rendered content on the client. The server snapshot
                    must be the same between the client and the server, and is
                    usually serialized and passed from the server to the client.
                    If you omit this argument, rendering the component on the
                    server will throw an error.
                </p>
                <hr className="mt-10" />
                <div className="my-10">
                    <UseSyncExternalStoreExample />
                </div>
                <hr className="mt-10" />
            </div>
        </main>
    );
}
