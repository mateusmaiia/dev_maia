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
                    <Button variant="ghost" size="icon" className='p-1  w-8 h-8  hover:border-b rounded-none  border-b-cyan-600'>
                        <Github size={18}/>
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                     <p>GitHub</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}