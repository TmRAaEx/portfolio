import Subheader from "./Subheader.tsx";
import {projects} from "../utils/projectArray.ts";
import ProjectCard from "./ProjectCard.tsx";

export default function Projects() {
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