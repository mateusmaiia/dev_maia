import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
import { Button } from './ui/button'
import { Github } from 'lucide-react'
import { Instagram } from 'lucide-react'
import { Linkedin } from 'lucide-react'
  
interface Props {
    socialMediaName: string,
    socialMediaIcon: 'github' | 'instagram' | 'linkedin',
    url: string
}

export function SocialMedias({socialMediaName, socialMediaIcon, url}: Props){
    return(
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button  variant="ghost" size="icon" className='p-4  w-10 h-10  hover:border-b-2 rounded-none  border-b-cyan-600 '>
                        <a href={url} target='_blank' className='flex flex-1'>
                            { socialMediaIcon == 'github' && <Github size={18}/>}
                            { socialMediaIcon == 'instagram' && <Instagram size={18}/>}
                            { socialMediaIcon == 'linkedin' && <Linkedin size={18}/>}
                        </a>
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                     <p>{socialMediaName}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}