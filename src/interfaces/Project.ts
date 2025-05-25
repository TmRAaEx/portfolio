
export default interface Project {
    name: string;
    link: string;
    npm_link?: string;
    image: string;
    priority: number;
    deployed: boolean;
    skills: string[]
    git_link: string;
    description: string;
}
