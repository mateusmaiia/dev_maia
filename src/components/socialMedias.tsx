import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
import { Button } from './ui/button'
import { Github } from 'lucide-react'
  

export function SocialMedias(){
    return(
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button  variant="ghost" size="icon" className='p-4  w-10 h-10  hover:border-b-2 rounded-none  border-b-cyan-600 '>
                        <a href="https://github.com/mateusmaiia" target='_blank' className='flex flex-1'>
                            <Github size={18}/>
                        </a>
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                     <p>GitHub</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}