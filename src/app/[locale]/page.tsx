import Introduction from "@/app/components/Introduction";
import Skills from "@/app/components/Skills";
import Projects from "@/app/components/Projects";
import {getProjects} from "@/lib/projects";
import {redirect} from "next/navigation";
import {getTexts} from "@/lib/locales/getTexts";
import Locale from "@/interfaces/Locale";

export async function generateStaticParams() {
    return [{locale: "sv"}, {locale: "en"}];
}

export const revalidate = 3600;

export default async function Page({params}: { params: Promise<Locale> }) {
    const {locale} = await params;


    if (locale !== "sv" && locale !== "en") {
        redirect("/sv")
    }

    const texts = getTexts(locale)

    const projects = await getProjects();

    return (
        <main className={"flex flex-col items-center mt-40 font-text px-1"}>
            <article className="w-full max-w-[900px] flex flex-col p-3 gap-16">
                {/* -- Namn+kontakt+beskrivning --*/}
                <Introduction texts={texts}/>

                {/* -- Lista med färdigheter --*/}
                <Skills texts={texts}/>

                {/* -- Lista med projekt --*/}
                <Projects projects={projects} locale={locale} texts={texts}/>
            </article>
        </main>
    );
}
