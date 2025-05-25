import type {ReactNode} from "react";


export default function Subheader({children}: {children: ReactNode}) {
    return <p className={"text-white text-3xl/11 font-subheader my-3"}>{children}</p>;
}