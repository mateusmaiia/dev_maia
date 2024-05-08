import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ProjectsCard } from "./projectsCard"
import { CarouselDApiDemo } from "./carrousel"

export function ProjectCardTrigger(){
  return(
    <Dialog >
      <DialogTrigger >
        <ProjectsCard />
      </DialogTrigger>
      <DialogContent className="h-3/4">
        <DialogHeader className="flex items-center">
          <DialogTitle className="text-center py-4 pb-8 text-3xl">Project Name</DialogTitle>
          <CarouselDApiDemo />
          <DialogDescription className="text-lg mt-2">
            Aplicação fullstack com interface de admin para pedidos online de pizzaria.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}