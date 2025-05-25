import Subheader from "@/app/components/Subheader";
import {skills} from "@/utils/skillsArray";
import Skill from "@/app/components/Skill";
import Locale from "@/interfaces/Locale";


export default function Skills({locale}: Locale) {
    return (
        <section id={"skills"}>
            <Subheader>{locale === "sv" ? "Färdigheter" : "Skills"}</Subheader>
            <ul className={"text-white"}>
                {skills.map((skill) => {
                    return <Skill key={skill} name={skill}/>
                })}
            </ul>
        </section>
    )
}
