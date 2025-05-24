import ContactIcon from "./components/ContactIcon.tsx";
import Skill from "./components/Skill.tsx";
import Subheader from "./components/Subheader.tsx";
import Text from "./components/Text.tsx"
import {projects} from "./utils/projectArray.ts";
import {skills} from "./utils/skillsArray.ts";
import ProjectCard from "./components/ProjectCard.tsx";

function App() {

    return (
        <>
            <main className={"flex flex-col items-center mt-40 font-text px-1"}>
                <div className="w-full max-w-[900px] flex flex-col p-3 gap-16">
                    <div>
                        <p className="text-white text-6xl/17 font-bold font-header">Alexander Hirsch</p>
                        <p className="text-white text-4xl/10 font-bold font-subheader">Fullstack utvecklare</p>
                        <div className={"flex flex-row gap-3"}>
                            <ContactIcon link={"https://github.com/TmRAaEx?tab=repositories"}/>
                            <ContactIcon link={"https://linkedin.com/in/alexander-hirsch-b125342a1/"}/>

                        </div>
                    </div>
                    <Text>
                        Blivande fullstackutvecklare med ett starkt intresse för kreativ problemlösning, med
                        fokus på ren kod, responsiva applikationer och min egen utveckling.
                        <br/>
                        <br/>
                        <strong className={"text-red-500"}>^Subject to change^</strong>
                    </Text>


                    <section id={"skills"}>
                        <Subheader>Färdigheter</Subheader>
                        <ul className={"text-white"}>
                            {skills.map((skill) => {
                                return <Skill name={skill}/>
                            })}
                        </ul>
                    </section>

                    <section id={"projects"} className={"text-white "}>
                        <Subheader>Projekt</Subheader>
                        <ul className="p-5 flex flex-col gap-6">
                            {projects.sort((current, next) => current.priority - next.priority).map((project) => {
                                return <>
                                    <ProjectCard
                                        priority={project.priority}
                                        name={project.name} link={project.link}
                                        image={project.image}
                                        deployed={project.deployed}
                                        skills={project.skills}
                                        git_link={project.git_link}
                                        description={project.description}
                                    />

                                </>
                            })}

                        </ul>
                    </section>
                </div>
            </main>
        </>
    )
}

export default App
