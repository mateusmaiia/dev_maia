import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export interface ProjectCardProps{
  ProjectCardName: string,
  ProjectCardDescription: string,
  urlCard: string
}

export function ProjectsCard({ProjectCardName, ProjectCardDescription, urlCard}: ProjectCardProps){
  return(
    <Card className="cursor-pointer dark:hover:bg-white/5 hover:bg-black/10 hover:scale-105 transition ease-in-out delay-75">
      <CardContent className='p-6'>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
                <img className="h-48  w-fit" src={urlCard} />
            </TooltipTrigger>
            <TooltipContent className='bg-background p-4 font-semibold text-lg'>
              Clique pare ver mais sobre o projeto.
            </TooltipContent>      
          </Tooltip>
        </TooltipProvider>
      </CardContent>
      <CardHeader className="space-y-0 p-6">
        <CardTitle className="text-start">{ProjectCardName}</CardTitle>
        <CardDescription className="text-start">{ProjectCardDescription}</CardDescription>
      </CardHeader>
    </Card>
  )
}

