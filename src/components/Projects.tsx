import Subheader from "./Subheader.tsx";
import ProjectCard from "./ProjectCard.tsx";
import type Project from "../interfaces/Project.ts";

export default function Projects({projects}: { projects: Project[] }) {

    console.log(projects);
    return (
        <section id={"projects"} className={"text-white "}>
            <Subheader>Projekt</Subheader>
            <ul className="p-5 flex flex-col gap-6">
                {projects.sort((current, next) => current.priority - next.priority).map((project) => {
                    return <>
                        <ProjectCard project={project}/>
                    </>
                })}
            </ul>
        </section>
    )
}