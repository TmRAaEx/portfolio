import ContactIcon from "@/app/components/ContactIcon";
import Text from "./Text"
import Locale from "@/interfaces/Locale";

export default function Introduction({locale}: Locale) {

    return <>
        <header className={"flex flex-col gap-3"}>
            <div className={"text-white font-bold"}>
                <p className=" text-6xl/17  font-header">Alexander Hirsch</p>
                <p className=" text-4xl/10  font-subheader">{locale ==="sv"? "Fullstack Utvecklare" : "Fullstack Developer"}</p>
            </div>
            <div className={"flex flex-row gap-3"}>
                <ContactIcon link={"https://github.com/TmRAaEx?tab=repositories"}/>
                <ContactIcon link={"https://linkedin.com/in/alexander-hirsch-b125342a1/"}/>
            </div>
        </header>

        {locale === "sv" ? (

            <Text>
                Blivande fullstackutvecklare med ett starkt intresse för kreativ problemlösning, med
                fokus på ren kod, responsiva applikationer och min egen utveckling.
            </Text>
        ) : (
            <Text>
                Aspiring fullstack developer with a strong passion for creative problem-solving, focusing on clean
                code, responsive applications, and my own growth.
            </Text>
        )
        }
    </>
}