import Subheader from "@/components/styled/Subheader";
import Project from "@/interfaces/Project";
import ProjectCard from "@/components/sections/projects/ProjectCard";
import FeaturedProjects from "@/components/sections/projects/FeaturedProjects";
import Locale, {Translations} from "@/interfaces/Locale";


interface Props {
    projects: Project[];
    texts: Translations,
    locale: Locale["locale"]
}


export default function Projects({projects, texts, locale}: Props) {
    console.log(projects)

    return (
        <section id={"projects"} className={"text-white "}>

            <FeaturedProjects
                projects={projects.filter(p => p.featured)}
                texts={texts}
                locale={locale}
            />


            <Subheader>{texts.titles.projects}</Subheader>
            <ul className="p-5 flex flex-col gap-6">
                {projects.sort((current, next) => current.priority - next.priority).map((project) => {
                    return <ProjectCard key={project._id} project={project} locale={locale} />
                })}
            </ul>
        </section>
    )
}