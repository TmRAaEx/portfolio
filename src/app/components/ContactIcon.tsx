import Link from "next/link";

interface ContactIconProps {
    link: string;
}


export default function ContactIcon({link}: ContactIconProps) {
    const parsedLink = link.split("https://")[1].split(".com")[0]
    return (
        <Link href={link} className={"flex items-center justify-center w-8 h-fit"} target="_blank">
            <img className="object-scale-down w-full" src={`/icons/${parsedLink}.svg`}
                 alt={`link to ${parsedLink}`}/>
        </Link>
    )
}