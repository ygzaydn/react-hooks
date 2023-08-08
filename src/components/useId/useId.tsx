import { useId } from "react";

const UseIdExample = () => {
    const id = useId();

    return (
        <div>
            <div className="flex ">
                <p>Generated Key by useId {id}</p>
            </div>
        </div>
    );
};

export default UseIdExample;
