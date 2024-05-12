import { SkillCard } from "./skillsCard";

export function Skills(){
  return(
    <div className="mx-auto w-full border border-green-500 h-[500px] p-4 px-72">
        <h1 className="text-center text-4xl font-semibold mb-8">Skills</h1>
        <div className="grid grid-cols-5 w-full justify-items-center gap-2">
          <SkillCard />
          <SkillCard />
          <SkillCard />
          <SkillCard />
          <SkillCard />
          <SkillCard />
        </div>
    </div>
  )
}