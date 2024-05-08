import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { HoverCardTrigger, HoverCardContent, HoverCard } from "./ui/hover-card";

export function ProjectsCard(){
  return(
    <Card className="cursor-pointer">
      <HoverCard>
        <HoverCardTrigger>
          <CardContent className="pt-6">
            <img className="h-48  w-fit" src="https://raw.githubusercontent.com/famgz/famgz/main/presentations/food-ordering-app/0.jpg" />
          </CardContent>
        </HoverCardTrigger>
        <HoverCardContent>
          Clique pare ver mais sobre o projeto.
        </HoverCardContent>      
      </HoverCard>
      <CardHeader className="space-y-0">
        <CardTitle className="text-start">Project Name</CardTitle>
        <CardDescription className="text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem distinctio consequatur atque possimus magni quo libero ratione eo.</CardDescription>
      </CardHeader>
    </Card>
  )
}

