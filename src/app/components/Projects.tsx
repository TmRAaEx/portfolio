import Subheader from "@/app/components/Subheader";
import Project from "@/interfaces/Project";
import ProjectCard from "@/app/components/ProjectCard";
import Locale, {Translations} from "@/interfaces/Locale";


interface Props {
    projects: Project[];
    texts: Translations,
    locale: Locale["locale"]
}


export default function Projects({projects, texts, locale}: Props) {

    return (
        <section id={"projects"} className={"text-white "}>
            <Subheader>{texts.titles.projects}</Subheader>
            <ul className="p-5 flex flex-col gap-6">
                {projects.sort((current, next) => current.priority - next.priority).map((project) => {
                    return <ProjectCard key={project._id} project={project} locale={locale} />
                })}
            </ul>
        </section>
    )
}