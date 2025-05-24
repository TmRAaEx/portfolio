interface SkillProps {
    name: string;
}

export default function Skill({ name }: SkillProps) {
    return (
        <div className="inline-block rounded-full px-4 py-2 bg-white/10 text-white text-sm mr-2 mb-2">
            {name}
        </div>
    );
}
