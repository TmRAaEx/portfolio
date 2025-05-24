import ContactIcon from "./components/ContactIcon.tsx";
import Skill from "./components/Skill.tsx";
import Subheader from "./components/Subheader.tsx";

function App() {

    const skills = [
        "TypeScript",
        "JavaScript",
        "React",
        "Nodejs",
        "Express",
        "Nextjs",
        "PHP",
        "CodeIgniter4",
        "CSS",
        "HTML5",
        "Python",
        "C#.NET",
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "Git/Github"
    ];


    return (
        <>
            <main className={"flex flex-col items-center mt-40 font-text"}>
                <div className="w-full max-w-[900px] flex flex-col p-3 gap-16">
                    <div>
                        <p className="text-white  text-6xl/17 font-bold font-header">Alexander Hirsch</p>
                        <p className="text-white  text-4xl/10 font-bold font-subheader">Fullstack utvecklare</p>
                        <div className={"flex flex-row gap-3"}>
                            <ContactIcon link={"https://github.com/TmRAaEx?tab=repositories"}/>
                            <ContactIcon link={"https://linkedin.com/in/alexander-hirsch-b125342a1/"}/>

                        </div>
                    </div>
                    <p className={"text-white text-2xl/8"}>
                        Blivande fullstackutvecklare med ett starkt intresse för kreativ problemlösning, med
                        fokus på ren kod, responsiva applikationer och min egen utveckling.
                        <br/>
                        <br/>
                        <strong>Subject to change</strong>
                    </p>


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
                        <ul className={"text-white"}>

                        </ul>
                    </section>

                    <section id={"about-me"}>
                        <Subheader>Om mig</Subheader>
                        <p className={"text-white text-xl/8"}>
                            Nyfiken och engagerad fullstackstudent med ett starkt intresse för programmering som väcktes
                            redan i barndomen via enkla spelprojekt i Scratch. Jag drivs av kreativ problemlösning och
                            kan sitta timmar i sträck när jag får dyka ner i något jag brinner för. Jag lär mig snabbt
                            genom att testa, läsa dokumentation och bryta ner komplexa problem steg för steg. Just nu
                            trivs jag särskilt bra med React och Next.js i kombination med TypeScript, och arbetar även
                            mycket med TypeScript/JavaScript i backend. Jag har viss erfarenhet av Python, PHP och ett
                            växande intresse för att fördjupa mig i .NET.
                        </p>
                    </section>
                </div>
            </main>
        </>
    )
}

export default App
