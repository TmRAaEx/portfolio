export default function IconLink({link, company}: { link: string, company: string }) {
    return (
        <>
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group inline-block"
            >
                <img
                    src={`/icons/${company.toLowerCase()}.svg`}
                    alt={company}
                    className="w-8 h-8 hover:opacity-80 transition"
                />
                <span className="absolute top-1/2 left-full ml-2 -translate-y-1/2
                     hidden group-hover:block
                     bg-gray-800 text-white text-xs rounded py-1 px-2
                     whitespace-nowrap
                     pointer-events-none
                     z-10">
      Visa på {company}
    </span>
            </a>
        </>
    )
}