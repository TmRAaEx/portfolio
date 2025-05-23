function App() {


    return (
        <>
            <main className={"flex flex-col items-center"}>
                <div className="w-full max-w-[900px] flex flex-col p-3 gap-16">
                    <div>
                        <p className="text-white  text-6xl/17 font-bold font-header">Alexander Hirsch</p>
                        <p className="text-white  text-4xl/10 font-bold font-text">Fullstack utvecklare</p>
                        <div className={"flex flex-row gap-3"}>
                            <a className="text-white" href={"https://github.com/TmRAaEx?tab=repositories"}>Github</a>
                            <a className="text-white" href={"https://www.linkedin.com/in/alexander-hirsch-b125342a1/"}>Linked
                                in</a>
                        </div>
                    </div>
                    <p className={"text-white"}>
                        Blivande fullstackutvecklare med ett starkt intresse för kreativ problemlösning, med
                        fokus på ren kod, responsiva applikationer och min egen utveckling.
                        <br/>
                        <br/>
                        <strong>Subject to change</strong>
                    </p>


                    <section id={"skills"}>
                        <p className={"text-white text-3xl/7"}>Färdigheter</p>
                        <ul className={"text-white"}>
                            <li>TypeScript</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Nodejs</li>
                            <li>Express</li>
                            <li>Nextjs</li>
                            <li>PHP</li>
                            <li>CodeIgniter4</li>
                            <li>CSS</li>
                            <li>HTML5</li>
                            <li>Python</li>
                            <li>C#.NET !!!</li>
                            <li>MySQL</li>
                            <li>PostgreSQL</li>
                            <li>MongoDB</li>
                            <li>Git/Github</li>
                        </ul>
                    </section>

                    <section id={"projects"} className={"text-white "}>
                        <p className={"text-white text-3xl/7"}>Projekt</p>
                        <ul className={"text-white"}>

                        </ul>
                    </section>

                    <section id={"about-me"}>
                        <p className={"text-white text-3xl/7"}>Om mig</p>
                        <p className={"text-white font-text text-xl/8"}>
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
