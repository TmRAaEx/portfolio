export default interface Locale {
    locale: "en" | "sv"
}

export type Translations = {
    work_role: string;
    titles: {
        skills: string;
        projects: string;
        contact: string;
        navigation: string;
        email: string;
    };
    descriptions: {
        intro: string;
    };
    tooltips: Record<string, string>;

    links: Record<string, string>;
    copyright: string;


};
