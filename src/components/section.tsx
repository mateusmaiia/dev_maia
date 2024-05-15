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
          <Button className="w-full md:w-auto text-sm md:text-base bg-[#172554] text-white dark:hover:text-black " size="lg">
            <a href={CV} target='_blank' className='flex items-center gap-3'>
              <Download size="22px" /> Baixar CV
            </a>
          </Button>
          <Button className="w-full md:w-auto text-sm md:text-base mb-14 md:mb-0 mt-2 md:mt-0" size="lg" variant="outline">
            Entrar em contato
          </Button>
        </div>
      </motion.div>
      <motion.div
        initial={{opacity: 0, y: 200, scale:0.5}}
        whileInView={{opacity: 1, y:0, scale: 1}} 
        exit={{opacity: 0, y: 200, scale: 1}}
        transition={{duration: 0.5}}
        
        className="origin-center flex justify-center   md:justify-end"
      >
        <img className="h-64 w-h-64 md:h-[380px] md:w-[380px] mb-10 rounded-full md:ml-10 " src="https://avatars.githubusercontent.com/u/131715627?v=4" alt="Mateus Maia" />
      </motion.div>
    </div>
  );
}
