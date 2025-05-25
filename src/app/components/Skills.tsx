import Subheader from "@/app/components/Subheader";
import {skills} from "@/utils/skillsArray";
import Skill from "@/app/components/Skill";


export default function Skills() {
    return (
        <section id={"skills"}>
            <Subheader>Färdigheter</Subheader>
            <ul className={"text-white"}>
                {skills.map((skill) => {
                    return <Skill key={skill} name={skill}/>
                })}
            </ul>
        </section>
    )
}
