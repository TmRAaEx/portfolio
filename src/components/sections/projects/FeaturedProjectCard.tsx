'use client'
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Project from "@/interfaces/Project";
import Locale from "@/interfaces/Locale";
import IconLink from "@/components/sections/projects/IconLink";

export default function FeaturedProjectCard({ project, locale }: { project: Project, locale: Locale["locale"] }) {
    const [expanded, setExpanded] = useState(false);

    return (
        <li
            className="snap-start flex-shrink-0 w-full bg-white/5 border border-gray-700 rounded-xl overflow-hidden flex flex-col cursor-pointer"
            onClick={() => setExpanded(v => !v)}
        >
            <Image
                src={`/projectimages/${project.image}.png`}
                alt={project.name}
                className="w-full h-40 object-cover"
                width={288}
                height={160}
            />
            <div className="p-4 flex flex-col flex-1">
                <h3 className="text-xl font-subheader capitalize mb-1">{project.name}</h3>
                <p className={`text-sm text-white/70 transition-all duration-300 ${expanded ? '' : 'line-clamp-2'}`}>
                    {project.description[locale]}
                </p>
                {expanded && (
                    <div className="mt-3">
                        <ul className="flex flex-wrap gap-1.5 mb-3">
                            {project.skills.map(skill => (
                                <li key={skill} className="bg-white/10 px-2 py-0.5 rounded-full text-xs">{skill}</li>
                            ))}
                        </ul>
                        <div className="flex gap-3" onClick={e => e.stopPropagation()}>
                            {project.deployed && (
                                <Link
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-400 underline hover:text-blue-300 text-sm"
                                >
                                    Demo
                                </Link>
                            )}
                            {project.git_link && <IconLink link={project.git_link} locale={locale} company="github" />}
                            {project.npm_link && <IconLink link={project.npm_link} locale={locale} company="npm" />}
                        </div>
                    </div>
                )}
                <button className="mt-auto pt-2 text-xs text-white/40 hover:text-white/70 text-left">
                    {expanded ? '▲ Less' : '▼ More'}
                </button>
            </div>
        </li>
    );
}
