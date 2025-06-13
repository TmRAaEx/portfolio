import Link from "next/link";
import {Translations} from "@/interfaces/Locale";

export default function Footer({texts}: { texts: Translations }) {
    return (
        <footer className="w-full border-t border-gray-700 text-white p-6 mt-20">
            <nav className="max-w-6xl mx-auto flex flex-col md:flex-row flex-wrap justify-around gap-6 text-sm">

                {/* Sektion 1 – Navigering */}
                <ul className="space-y-1 text-md/6">
                    <li className="font-semibold text-gray-300 text-lg/8 underline">{texts.titles.navigation}</li>
                    <li><Link href="#skills" className="hover:underline">{texts.titles.skills}</Link></li>
                    <li><Link href="#projects" className="hover:underline">{texts.titles.projects}</Link></li>
                    <li><Link href="#contact" className="hover:underline">{texts.titles.contact}</Link></li>
                </ul>

                {/* Sektion 2 – Kontakt */}
                <ul className="space-y-1">
                    <li className="font-semibold text-gray-300 text-lg/8 underline">{texts.titles.contact}</li>
                    <li><Link href="mailto:04alexander.hirsch@gmail.com"
                              className="hover:underline">{texts.titles.email}</Link></li>
                    <li><Link href={texts.links["github"]} className="hover:underline"
                              target="_blank">GitHub</Link></li>
                    <li><Link href={texts.links["linkedin"]} className="hover:underline"
                              target="_blank">LinkedIn</Link></li>
                </ul>

            </nav>

            <div className="mt-6 text-center text-xs text-gray-500">
                &copy; {new Date().getFullYear()} Alexander Hirsch. {texts.copyright}
            </div>
        </footer>
    );
}
