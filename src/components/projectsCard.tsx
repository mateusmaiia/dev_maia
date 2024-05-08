import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"


export function ProjectsCard(){
  return(
    <Card className="cursor-pointer dark:hover:bg-white/5 hover:bg-black/10 hover:scale-105 transition ease-in-out delay-75">
      <CardContent className='p-6'>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
                <img className="h-48  w-fit" src="https://raw.githubusercontent.com/famgz/famgz/main/presentations/food-ordering-app/0.jpg" />
            </TooltipTrigger>
            <TooltipContent className='bg-background p-4 font-semibold text-lg'>
              Clique pare ver mais sobre o projeto.
            </TooltipContent>      
          </Tooltip>
        </TooltipProvider>
      </CardContent>
      <CardHeader className="space-y-0 p-6">
        <CardTitle className="text-start">Project Name</CardTitle>
        <CardDescription className="text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem distinctio consequatur atque possimus magni quo libero ratione eo.</CardDescription>
      </CardHeader>
    </Card>
  )
}

