import Subheader from "./Subheader.tsx";
import {skills} from "../utils/skillsArray.ts";
import Skill from "./Skill.tsx";

export default function Skills() {
    return (
        <section id={"skills"}>
            <Subheader>Färdigheter</Subheader>
            <ul className={"text-white"}>
                {skills.map((skill) => {
                    return <Skill name={skill}/>
                })}
            </ul>
        </section>
    )
}
