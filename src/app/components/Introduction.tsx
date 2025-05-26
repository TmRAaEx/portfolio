import ContactIcon from "@/app/components/ContactIcon";
import Text from "./Text"
import {Translations} from "@/interfaces/Locale";


export default function Introduction({texts}: { texts: Translations }) {
    return <>
        <header className={"flex flex-col gap-3"}>
            <div className={"text-white font-bold"}>
                <p className=" text-6xl/17  font-header">Alexander Hirsch</p>
                <p className=" text-4xl/10  font-subheader">{texts.work_role}</p>
            </div>
            <div className={"flex flex-row gap-3"}>
                <ContactIcon link={`${texts.links["github"]}tab=repositories`}/>
                <ContactIcon link={texts.links["linkedin"]}/>
            </div>
        </header>

        <Text>{texts.descriptions.intro}</Text>
    </>
}