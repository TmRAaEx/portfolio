import Introduction from "@/app/components/Introduction";
import Skills from "@/app/components/Skills";
import Projects from "@/app/components/Projects";
import {getProjects} from "@/lib/projects";
import Locale from "@/interfaces/Locale";

interface Params {
    params: Promise<Locale>;
}

export const revalidate = 3600;

export default async function Page({params}: Params) {
    const {locale} = await params;
    const projects = await getProjects();

    return (
        <main className={"flex flex-col items-center mt-40 font-text px-1"}>
            <article className="w-full max-w-[900px] flex flex-col p-3 gap-16">
                {/* -- Namn+kontakt+beskrivning --*/}
                <Introduction locale={locale}/>

                {/* -- Lista med färdigheter --*/}
                <Skills locale={locale}/>

                {/* -- Lista med projekt --*/}
                <Projects projects={projects} locale={locale}/>
            </article>
        </main>
    );
}
