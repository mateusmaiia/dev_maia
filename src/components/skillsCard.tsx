import {motion} from 'framer-motion'
import { ComponentProps } from 'react'

type SkillCardProps = ComponentProps<typeof motion.span> &{
  urlSkill: string
}
export function SkillCard({urlSkill, ...props}: SkillCardProps){
  return(
    <motion.span 
      className="md:w-44 md:h-44 w-40 h-40 bg-slate-500/10 hover:bg-white/10 border hover:border-b-gray-800 flex items-center justify-center cursor-pointer" 
      {...props}
    >
      <img src={urlSkill} className="w-24 h-24" alt="" />
    </motion.span>
  )
}

//Agora permite que o componente tenha animações.