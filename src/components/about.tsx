import {motion} from 'framer-motion'

export function About(){
  return(
    <div id="about" className="w-full flex bg-card items-center flex-col justify-center border-y md:max-w-[1500px] border-y-white/10 h-4/6 py-20 mx-auto  ">
      <motion.div
        initial={{opacity: 0.5, scale: 0}}
        whileInView={{opacity: 1, scale: 1}}
        exit={{opacity: 0.5, scale: 0}}  
        transition={{duration: 0.9}}
      >
        <h2 className="text-center text-4xl font-semibold mb-6">Sobre</h2>
      </motion.div>
      <motion.p 
        initial={{opacity: 0.5, scale: 0}}
        whileInView={{opacity: 1, scale: 1}}
        exit={{opacity: 0.5, scale: 0}}  
        transition={{duration: 0.7}}
        className="text-center dark:text-slate-400 text-lg md:text-lg w-4/6 max-w-3xl  font-light tracking-wider"
      >
        Desenvolvedor de software desde 2022 com experiência de programação em aplicações Front-end e Back-end, análise e gerenciamento de dados e APIs, scripts utilitários e de automação. Rápida capacidade de assimilação e aprendizado, com domínio de tecnologias como Javascript Typescript, React, React Native, Next.js, Tailwind, PostgreSQL, MySQL.Recentemente dedica-se à criação de aplicações Full-stack com React, Next.js, React Native e Tailwind
      </motion.p>
    </div>
  )
}