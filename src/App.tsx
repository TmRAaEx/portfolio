import Introduction from "./components/Introduction.tsx";
import Skills from "./components/Skills.tsx";
import Projects from "./components/Projects.tsx";
import {useEffect, useState} from "react";
import type Project from "./interfaces/Project.ts";

function App() {

    const fetchProjects = async () => {
        const response = await fetch("/api/projects")
        return await response.json();
    }

    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        fetchProjects().then((projects) => setProjects(projects));
    }, []);

    return (
        <>
            <main className={"flex flex-col items-center mt-40 font-text px-1"}>
                <article className="w-full max-w-[900px] flex flex-col p-3 gap-16">
                    {/* -- Namn+kontakt+beskrivning --*/}
                    <Introduction/>

                    {/* -- Lista med färdigheter --*/}
                    <Skills/>

                    {/* -- Lista med projekt --*/}
                    <Projects projects={projects}/>
                </article>
            </main>
        </>
    )
}

export default App
