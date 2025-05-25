import Subheader from "@/app/components/Subheader";
import Project from "@/interfaces/Project";
import ProjectCard from "@/app/components/ProjectCard";


export default function Projects({projects}: { projects: Project[] }) {

    return (
        <section id={"projects"} className={"text-white "}>
            <Subheader>Projekt</Subheader>
            <ul className="p-5 flex flex-col gap-6">
                {projects.sort((current, next) => current.priority - next.priority).map((project) => {
                    return <ProjectCard key={project._id} project={project}/>
                })}
            </ul>
        </section>
    )
}