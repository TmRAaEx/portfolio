import type Project from "../interfaces/Project.ts";

export default function ProjectCard({project}: { project: Project }) {
    return (
        <li id={"projectCard" + project.priority}
            className="flex flex-col md:flex-row bg-white/5 text-white w-full p-4 border border-gray-700 rounded-xl gap-4">
            {/* Bildsektion */}
            <img src={`/projectimages/${project.image}.png`} alt={project.name}
                 className="w-full md:w-1/3 h-auto rounded-md object-cover"/>

            {/* Textsektion */}
            <div className="flex flex-col justify-between flex-1">
                <div>
                    <h3 className="text-3xl font-subheader mb-2 capitalize">{project.name}</h3>
                    <p className={"text-md/4 my-2"}>{project.description}</p>

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
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-blue-400 underline hover:text-blue-300 transition"
                        >
                            Demo
                            <img src="/icons/link.svg" width={16} height={16} alt="Extern länk"/>
                        </a>

                    )}
                    {project.npm_link && (
                        <a
                            href={project.npm_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative group inline-block"
                        >
                            <img
                                src="/icons/npm.svg"
                                alt="NPM"
                                className="w-8 h-8 hover:opacity-80 transition"
                            />
                            <span className="absolute top-1/2 left-full ml-2 -translate-y-1/2
                     hidden group-hover:block
                     bg-gray-800 text-white text-xs rounded py-1 px-2
                     whitespace-nowrap
                     pointer-events-none
                     z-10">
      Visa på npm
    </span>
                        </a>
                    )}

                    {project.git_link && (
                        <a
                            href={project.git_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative group inline-block"
                        >
                            <img
                                src="/icons/github.svg"
                                alt="GitHub"
                                className="w-6 h-6 hover:opacity-80 transition"
                            />
                            <span className="absolute top-1/2 left-full ml-2 -translate-y-1/2
                     hidden group-hover:block
                     bg-gray-800 text-white text-xs rounded py-1 px-2
                     whitespace-nowrap
                     pointer-events-none
                     z-10">
      Visa på GitHub
    </span>
                        </a>
                    )}


                </div>
            </div>
        </li>
    );
}
