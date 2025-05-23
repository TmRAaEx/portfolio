interface ContactIconProps {
    link: string;
    icon: string;
}


export default function ContactIcon({link, icon}: ContactIconProps) {
    return (
        <a href={link} className={"flex items-center justify-center w-8 h-fit"} target="_blank" >
            <img className="object-scale-down w-full" src={icon} alt={`link to ${link.split("https://")[1].split(".com")[0]}`}/>
        </a>
    )
}