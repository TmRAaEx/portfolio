import Subheader from "@/components/styled/Subheader";
import {skills} from "@/utils/skillsArray";
import Skill from "@/components/sections/skills/Skill";
import {Translations} from "@/interfaces/Locale";

export default function Skills({texts}: { texts: Translations }) {


    return (
        <section id={"skills"}>
            <Subheader>{texts.titles.skills}</Subheader>
            <ul className={"text-white"}>
                {skills.map((skill) => {
                    return <Skill key={skill} name={skill}/>
                })}
            </ul>
        </section>
    )
}
