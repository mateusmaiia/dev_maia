
interface SkillCardProps{
  urlSkill: string
}
export function SkillCard({urlSkill}: SkillCardProps){
  return(
    <div className="md:w-44 md:h-44 w-40 h-40 bg-slate-500/10 hover:bg-white/10 border hover:border-b-gray-800 flex items-center justify-center cursor-pointer" >
      <img src={urlSkill} className="w-24 h-24" alt="" />
    </div>
  )
}