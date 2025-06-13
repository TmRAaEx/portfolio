import Link from "next/link";
import Image from "next/image";

interface ContactIconProps {
    link: string;
}


export default function ContactIcon({link}: ContactIconProps) {
    const parsedLink = link.split("https://")[1].split(".com")[0]
    return (
        <Link href={link} className={"flex items-center justify-center w-8 h-fit"} target="_blank">
            <Image className="object-scale-down w-full" src={`/icons/${parsedLink}.svg`}
                   alt={`link to ${parsedLink}`} width={256} height={256}/>
        </Link>
    )
}