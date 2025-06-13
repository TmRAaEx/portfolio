import {ReactNode} from "react";

export default function Text({children}: { children: ReactNode }) {
    return (
        <p className={"text"}>{children}</p>
    )

}

