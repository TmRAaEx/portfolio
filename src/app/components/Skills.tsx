import Subheader from "@/app/components/Subheader";
import {skills} from "@/utils/skillsArray";
import Skill from "@/app/components/Skill";
import Locale from "@/interfaces/Locale";
import sv from "@/lib/locales/sv"
import en from "@/lib/locales/en"

export default function Skills({locale}: Locale) {

    const texts = {sv, en}

    return (
        <section id={"skills"}>
            <Subheader>{texts[locale].titles.skills}</Subheader>
            <ul className={"text-white"}>
                {skills.map((skill) => {
                    return <Skill key={skill} name={skill}/>
                })}
            </ul>
        </section>
    )
}
