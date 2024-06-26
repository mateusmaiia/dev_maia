import { Button } from "./ui/button";
 import { Download } from "lucide-react";
import CV from '@/assets/Curriculo Mateus Maia .pdf'
import {motion} from 'framer-motion'

export function Section() {
  return (
    <div className="w-full max-w-screen-lg mx-auto mt-24 pb-32 md:mt-44 grid md:grid-cols-2 grid-row gap-4 px-8 md:h-full">
      <motion.div 
        className="order-last md:order-first w-full mx-auto flex items-center  flex-col md:items-start justify-center"
        initial={{opacity: 0, x: -100}}
        whileInView={{opacity: 1, x:0}}
        exit={{opacity:0, x:-100}}
        transition={{duration: 0.5}}
      >  
        <h1 className="text-4xl md:text-5xl tracking-tighter font-semibold">Mateus Maia</h1>
        <h3 className="text-accent-foreground-foreground mt-1 tracking-wide dark:text-zinc-300 ">Desenvolvedor de software</h3>
          
        <div className="flex flex-col md:flex-row md:gap-5 mt-6">
          <motion.span
            initial={{opacity: 0, scale: 0}}
            whileInView={{opacity: 1, scale: 1}}
            exit={{opacity: 0, scale: 0}}
            transition={{duration: 0.5, delay: 0.1}}
          >
            {/*
            <Button className="w-full md:w-auto text-sm md:text-base bg-[#172554] text-white dark:hover:text-black " size="lg">
              
                
          </Button> */}
             <a href={CV} target='_blank' className='flex items-center gap-4'>
             <button className="inline-flex h-12 gap-2 cursor-pointer w-full text-slate-100  dark:hover:text-black animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
             <Download size="22px" color='#fff'/> Baixar CV
            </button>
          </a>
          </motion.span>
          
          <motion.span
            initial={{opacity: 0, scale: 0}}
            whileInView={{opacity: 1, scale: 1}}
            exit={{opacity: 0, scale: 0}}
            transition={{duration: 0.6, delay: 0.2}}
          >
            <Button className="w-full md:w-auto text-sm md:text-base mb-14 md:mb-0 mt-2 md:mt-0" size="lg" variant="outline">
              Entrar em contato
            </Button>
          </motion.span>
        </div>
      </motion.div>
      <motion.div

        
        className="origin-center flex justify-center   md:justify-end"
      >
        <img className="h-64 w-h-64 md:h-[380px] md:w-[380px] mb-10 rounded-full md:ml-10 " src="https://avatars.githubusercontent.com/u/131715627?v=4" alt="Mateus Maia" />
      </motion.div>
    </div>
  );
}
