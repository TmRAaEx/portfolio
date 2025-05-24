import Introduction from "./components/Introduction.tsx";
import Skills from "./components/Skills.tsx";
import Projects from "./components/Projects.tsx";

function App() {

    return (
        <>
            <main className={"flex flex-col items-center mt-40 font-text px-1"}>
                <article className="w-full max-w-[900px] flex flex-col p-3 gap-16">
                    {/* -- Namn+kontakt+beskrivning --*/}
                    <Introduction/>

                    {/* -- Lista med färdigheter --*/}
                    <Skills/>

                    {/* -- Lista med projekt --*/}
                    <Projects/>
                </article>
            </main>
        </>
    )
}

export default App
