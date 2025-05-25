
export default interface Project {
    _id: string;
    name: string;
    link: string;
    npm_link?: string;
    image: string;
    priority: number;
    deployed: boolean;
    skills: string[]
    git_link: string;
    description: {
        "en": string;
        "sv": string;
    };
}
