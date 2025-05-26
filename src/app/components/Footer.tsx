import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full border-t border-gray-700 text-white p-6 mt-20">
            <nav className="max-w-6xl mx-auto flex flex-col md:flex-row flex-wrap justify-around gap-6 text-sm">

                {/* Sektion 1 – Navigering */}
                <ul className="space-y-1 text-md/6">
                    <li className="font-semibold text-gray-300 text-lg/8 underline">Navigering</li>
                    <li><Link href="#skills" className="hover:underline">Färdigheter</Link></li>
                    <li><Link href="#projects" className="hover:underline">Projekt</Link></li>
                    <li><Link href="#contact" className="hover:underline">Kontakt</Link></li>
                </ul>

                {/* Sektion 2 – Kontakt */}
                <ul className="space-y-1">
                    <li className="font-semibold text-gray-300 text-lg/8 underline">Kontakt</li>
                    <li><Link href="mailto:04alexander.hirsch@gmail.com" className="hover:underline">Mejla mig</Link></li>
                    <li><Link href="https://github.com/TmRAaEx" className="hover:underline"
                              target="_blank">GitHub</Link></li>
                    <li><Link href="https://linkedin.com/in/alexander-hirsch-b125342a1/" className="hover:underline"
                              target="_blank">LinkedIn</Link></li>
                </ul>

            </nav>

            <div className="mt-6 text-center text-xs text-gray-500">
                &copy; {new Date().getFullYear()} Alexander Hirsch. Alla rättigheter förbehållna.
            </div>
        </footer>
    );
}
