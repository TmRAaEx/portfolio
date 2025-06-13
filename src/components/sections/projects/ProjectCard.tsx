import Image from "next/image";
import Link from "next/link";
import Project from "@/interfaces/Project";
import Locale from "@/interfaces/Locale";
import IconLink from "@/components/sections/projects/IconLink";

export default function ProjectCard({project, locale}: { project: Project, locale: Locale["locale"] }) {
    return (
        <li id={"projectCard" + project.priority}
            className="card">
            {/* Bildsektion */}
            <Image src={`/projectimages/${project.image}.png`} alt={project.name}
                   className="w-full md:w-1/3 h-auto rounded-md object-cover"
                   width={600}
                   height={200}
            />

            {/* Textsektion */}
            <div className="flex flex-col justify-between flex-1">
                <div>
                    <h3 className="text-3xl font-subheader mb-2 capitalize">{project.name}</h3>
                    <p className={"text-md/4 my-2"}>{project.description[locale]}</p>

                    <ul className="flex flex-wrap gap-2 mb-4">
                        {project.skills.map((skill) => (
                            <li
                                key={skill}
                                className="bg-white/10 px-3 py-1 rounded-full text-sm"
                            >
                                {skill}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex items-center gap-4 mt-2">
                    {project.deployed && (
                        <Link
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-blue-400 underline hover:text-blue-300 transition"
                        >
                            <p>Demo</p>
                            <Image src="/icons/link.svg" width={16} height={16} alt="Extern länk"/>
                        </Link>

                    )}
                    {project.npm_link && (
                        <IconLink link={project.npm_link} locale={locale} company={"npm"}/>
                    )}

                    {project.git_link && (
                        <IconLink link={project.git_link} locale={locale} company={"github"}/>
                    )}
                </div>
            </div>
        </li>
    );
}
