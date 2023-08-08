import { useState, useTransition, memo } from "react";

const className = (expected: string, actual: string) => {
    let output = "cursor-pointer mx-6 ";

    if (expected === actual) {
        output += "text-green-100";
    } else {
        output += "text-green-900";
    }
    return output;
};

function SlowPost({ index }: { index: number }) {
    let startTime = performance.now();
    while (performance.now() - startTime < 1) {}

    return <li className="item">Post #{index + 1}</li>;
}

const DelayedInput = ({}: {}) => {
    let items = [];
    for (let i = 0; i < 1000; i++) {
        items.push(<SlowPost key={i} index={i} />);
    }
    return <ul className="items">{items}</ul>;
};

const UseTransitionExample = () => {
    const [tab, setTab] = useState("/");
    const [isPending, startTransition] = useTransition();

    const changeTab = (tabName: string) => {
        startTransition(() => {
            setTab(tabName);
        });
    };

    return (
        <div>
            <div className="flex ">
                <p
                    className={className("/home", tab)}
                    onClick={() => changeTab("/home")}
                >
                    Home
                </p>

                <p
                    className={className("/section1", tab)}
                    onClick={() => changeTab("/section1")}
                >
                    Section 1
                </p>
                <p
                    className={className("/section2", tab)}
                    onClick={() => changeTab("/section2")}
                >
                    Section 2
                </p>
            </div>
            <div className="mt-5">
                {isPending ? (
                    <p>Loading...</p>
                ) : (
                    <div>
                        {tab === "/section1" ? <DelayedInput /> : <p>{tab}</p>}
                    </div>
                )}
            </div>
        </div>
    );
};

export default UseTransitionExample;
