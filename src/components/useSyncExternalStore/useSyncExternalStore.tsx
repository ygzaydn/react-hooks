import { useSyncExternalStore } from "react";

export default function useSyncExternalStoreExample() {
    const isOnline = useSyncExternalStore(subscribe, getSnapshot);

    return (
        <div>
            <p>
                Your internet status is:{" "}
                {isOnline ? "✅ Online" : "❌ Disconnected"}
            </p>
            <h1>Try to change your status and observe the update</h1>
        </div>
    );
}

function getSnapshot() {
    return navigator.onLine;
}

function subscribe(callback: any) {
    window.addEventListener("online", callback);
    window.addEventListener("offline", callback);
    return () => {
        window.removeEventListener("online", callback);
        window.removeEventListener("offline", callback);
    };
}
