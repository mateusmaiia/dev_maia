import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { CarouselDApiDemo } from "./carrousel"
import { ProjectsCard } from "./projectsCard"

export interface ProjectCardTriggerProps{
  ProjectCardDescriptionTrigger: string ,
  ProjectCardNameTrigger: string,
  ProjectNameDialog: string,
  ProjectDescriptionDialog: string,
  urlCardTrigger: string,
  CarouselImages?: string[]
}
export function ProjectCardTrigger({ProjectCardDescriptionTrigger, ProjectCardNameTrigger, ProjectDescriptionDialog, ProjectNameDialog, urlCardTrigger, CarouselImages }: ProjectCardTriggerProps){
  return(
    <Dialog >
      <DialogTrigger >
        <ProjectsCard ProjectCardDescription={ProjectCardDescriptionTrigger} ProjectCardName={ProjectCardNameTrigger} urlCard={urlCardTrigger}/>
      </DialogTrigger>
      <DialogContent className="h-3/4">
        <DialogHeader className="flex items-center">
          <DialogTitle className="text-center py-4 pb-8 text-3xl">{ProjectNameDialog}</DialogTitle>
          <CarouselDApiDemo CarouselImages={CarouselImages}/>
          <DialogDescription className="text-lg mt-2">
            {ProjectDescriptionDialog}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}