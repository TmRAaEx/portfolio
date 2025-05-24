import ContactIcon from "./components/ContactIcon.tsx";
import Skill from "./components/Skill.tsx";
import Subheader from "./components/Subheader.tsx";
import Text from "./components/Text.tsx"
import type Project from "./interfaces/Project.ts";
import ProjectCard from "./components/ProjectCard.tsx";

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

    //will both probably end up on a mongo db database

    const projects: Project[] = [
        {
            name: "E-commerce Client",
            link: "https://ecomerce-client-vercel-arwp.vercel.app/products",
            image: "e-commerce-client",
            priority: 2,
            deployed: true,
            skills: [{name: "TypeSript"}, {name: "React"}],
            git_link: "https://github.com/TmRAaEx/ecomerce-client-vercel",
            description: "Arbete: Skapa en webshop med ett eget API, itegrera sedan batallösning(stripe) och google sök api."
        }, {
            name: "E-commerce API",
            link: "https://e-commerce-api-vercel-ebon.vercel.app/products",
            image: "e-commerce-api",
            priority: 1,
            deployed: true,
            skills: [{name: "TypeSript"}, {name: "Nodejs"}, {name: "Express"}],
            git_link: "https://github.com/TmRAaEx/ecomerce-api-vercel",
            description: "Skapa ett API för en e-handel, integrera med stripe och google sök."
        },
        {
            name: "Viktorshop",
            link: "https://ecommerce-client-clone.vercel.app/",
            image: "viktorshop",
            priority: 3,
            deployed: true,
            skills: [{name: "TypeScript"}, {name: "React"}],
            git_link: "https://github.com/E-commerce-ViktorsShop/ecommerce-client",
            description: "Grupparbete: Bygga en E-handel med ett färdigt api, som kunde byggas ut efter behov."
        },
        {
            name: "Custom Router",
            link: "https://www.npmjs.com/package/@tmraaex/simpleframework",
            image: "npm",
            priority: 4,
            deployed: false,
            skills: [{name: "TypeScript"}, {name: "React"}, {name: "npm"}],
            git_link: "",
            description: "NPM paket som skapar routes baserat på filstruktur i react(vite). WIP"
        }
    ]


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
                        <strong>Subject to change</strong>
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
