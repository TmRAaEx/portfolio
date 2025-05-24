import type Project from "../interfaces/Project.ts";

export default function ProjectCard({project}: { project: Project }) {
    return (
        <li id={"projectCard" + project.priority}
            className="flex flex-col items-center md:flex-row bg-white/5 text-white w-full p-4 border border-gray-700 rounded-xl gap-4">
            {/* Bildsektion */}
            <img src={`/projectimages/${project.image}.png`} alt={project.name}
                 className="w-full md:w-4/10 h-fit rounded-md object-scale-down"/>

            {/* Textsektion */}
            <div className="flex flex-col justify-between flex-1">
                <div>
                    <h3 className="text-3xl font-subheader mb-2 capitalize">{project.name}</h3>
                    <p className={"text-md/4 my-2"}>{project.description}</p>

                    <ul className="flex flex-wrap gap-2 mb-4">
                        {project.skills.map((skill) => (
                            <li
                                key={skill.name}
                                className="bg-white/10 px-3 py-1 rounded-full text-sm"
                            >
                                {skill.name}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex items-center gap-4 mt-2">
                    {project.deployed && (
                        <a
                            href={project.link}
                            target="_blank"
                            className="text-blue-400 underline hover:text-blue-300 transition"
                        >
                            Demo
                        </a>
                    )}
                    {!project.deployed && project.link && (
                        <a
                            href={project.link}
                            target="_blank"
                            className="text-blue-400 underline hover:text-blue-300 transition"
                        >
                            Se mer
                        </a>
                    )}
                    {
                        project.git_link && (
                            <a href={project.git_link} target="_blank">
                                <img
                                    src="/icons/github.svg"
                                    alt="GitHub"
                                    className="w-6 h-6 hover:opacity-80 transition"
                                />
                            </a>
                        )}
                </div>
            </div>
        </li>
    );
}
