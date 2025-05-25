import Introduction from "@/app/components/Introduction";
import Skills from "@/app/components/Skills";
import Projects from "@/app/components/Projects";
import {getProjects} from "@/lib/projects";


export default async function Home() {

    const projects = await getProjects();

    console.log(projects)
    return (
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
    );
}
