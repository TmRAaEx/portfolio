import Locale from "@/interfaces/Locale";
import {getTexts} from "@/lib/locales/getTexts";

export default function IconLink({link, company, locale}: { link: string, company: string, locale: Locale["locale"] }) {

    const texts = getTexts(locale)
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
                    {texts.tooltips[company]}
    </span>
            </a>
        </>
    )
}