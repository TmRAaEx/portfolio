import Subheader from "@/app/components/Subheader";
import Project from "@/interfaces/Project";
import ProjectCard from "@/app/components/ProjectCard";
import Locale from "@/interfaces/Locale";
import sv from "@/lib/locales/sv"
import en from "@/lib/locales/en"


interface Props {
    projects: Project[];
    locale: Locale["locale"];
}

const texts = {sv, en}

export default function Projects({projects, locale}: Props) {

    return (
        <section id={"projects"} className={"text-white "}>
            <Subheader>{texts[locale].titles.projects}</Subheader>
            <ul className="p-5 flex flex-col gap-6">
                {projects.sort((current, next) => current.priority - next.priority).map((project) => {
                    return <ProjectCard key={project._id} project={project} locale={locale}/>
                })}
            </ul>
        </section>
    )
}