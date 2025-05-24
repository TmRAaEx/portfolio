import Subheader from "../components/Subheader.tsx";
import Text from "../components/Text.tsx";

export default function AboutMe() {
    return <section id={"about-me"}>
        <Subheader>Om mig</Subheader>
        <Text>
            Nyfiken och engagerad fullstackstudent med ett starkt intresse för programmering som väcktes
            redan i barndomen via enkla spelprojekt i Scratch. Jag drivs av kreativ problemlösning och
            kan sitta timmar i sträck när jag får dyka ner i något jag brinner för. Jag lär mig snabbt
            genom att testa, läsa dokumentation och bryta ner komplexa problem steg för steg. Just nu
            trivs jag särskilt bra med React och Next.js i kombination med TypeScript, och arbetar även
            mycket med TypeScript/JavaScript i backend. Jag har viss erfarenhet av Python, PHP och ett
            växande intresse för att fördjupa mig i .NET.
        </Text>
    </section>
}