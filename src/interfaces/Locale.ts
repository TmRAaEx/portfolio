export default interface Locale {
 locale: "en"|"sv"
}

export type Translations = {
 work_role: string;
 titles: {
  skills: string;
  projects: string;
  contact: string;
 };
 descriptions: {
  intro: string;
 };
 tooltips: Record<string, string>;
};
