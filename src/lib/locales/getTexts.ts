import sv from "./sv";
import en from "./en";

const texts = {sv, en};

export function getTexts(locale: string) {
    if (locale === "en") return texts.en;
    return texts.sv; // default
}
