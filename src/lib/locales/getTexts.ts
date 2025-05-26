import sv from "./sv";
import en from "./en";

const texts = {sv, en};
/**
 * Function that loads the static texts that will be displayed on the site based on locale
 * De
 * */
export function getTexts(locale: string) {
    if (locale === "en") return texts.en;
    return texts.sv; // default
}
