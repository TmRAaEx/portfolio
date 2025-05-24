export default interface Project {
    name: string;
    link: string;
    image: string;
    priority?: number;
    deployed: boolean;
    skills: [{ name: string }]
    git_link: string;
    description: string;
}
