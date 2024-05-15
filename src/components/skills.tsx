import { SkillCard } from "./skillsCard";
import {motion} from 'framer-motion'

const skillsLogo = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"

]
export function Skills(){
  return(
    <div id="skills" className="mx-auto md:max-w-[1500px] w-full borde border-t-white/10 md:h-[760px] mb-11  md:p-4 md:px-72">
      
      <motion.div
        initial={{opacity: 0.5, scale: 0}}
        whileInView={{opacity: 1, scale: 1}}
        exit={{opacity: 0.5, scale: 0}}  
        transition={{duration: 0.5}}
      >
        <h1 className="text-center text-4xl font-semibold mb-8 mt-10">Skills</h1>
      </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-5 w-5/6 md:w-full mx-auto items-center justify-center md:gap-2 gap-3 gap-y-4">
          {skillsLogo.map((skillLogo, index) => (
            <SkillCard 
              key={`skills-cardn${index}`} 
              urlSkill={skillLogo} 
              initial={{y: -100, scale: 0}}
              whileInView={{y: 0, scale: 1}}
              transition={{duration: 0.3, delay: 0.1}}
            />
          ))}
        </div>
    </div>
  )
}