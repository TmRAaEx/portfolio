import type Project from "../interfaces/Project.ts";

export default function ProjectCard({
                                        name,
                                        link,
                                        image,
                                        deployed,
                                        skills,
                                        git_link,
                                        description,
                                        priority
                                    }: Project) {
    return (
        <li id={"projectCard" + priority}
            className="flex flex-col md:flex-row bg-white/5 text-white w-full p-4 border border-gray-700 rounded-xl gap-4">
            {/* Bildsektion */}
            <img src={`/projectimages/${image}.png`} alt={name}
                 className="w-full md:w-1/3 h-auto rounded-md object-cover"/>

            {/* Textsektion */}
            <div className="flex flex-col justify-between flex-1">
                <div>
                    <h3 className="text-3xl font-subheader mb-2 capitalize">{name}</h3>
                    <p className={"text-md/4 my-2"}>{description}</p>

                    <ul className="flex flex-wrap gap-2 mb-4">
                        {skills.map((skill) => (
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
                    {deployed && (
                        <a
                            href={link}
                            target="_blank"
                            className="text-blue-400 underline hover:text-blue-300 transition"
                        >
                            Demo
                        </a>
                    )}
                    {!deployed && link && (
                        <a
                            href={link}
                            target="_blank"
                            className="text-blue-400 underline hover:text-blue-300 transition"
                        >
                            Se mer
                        </a>
                    )}
                    {
                        git_link && (
                            <a href={git_link} target="_blank">
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
