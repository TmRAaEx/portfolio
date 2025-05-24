import {skills} from "../utils/skillsArray.ts";


type Skill = typeof skills[number];

type SkillObject = {
    name: Skill
}

export default interface Project {
    name: string;
    link: string;
    image: string;
    priority: number;
    deployed: boolean;
    skills: SkillObject[]
    git_link: string;
    description: string;
}
