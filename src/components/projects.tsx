import { ProjectCardTrigger } from "./projectCardTrigger"
 

export function Projects ( ){
  return(
    <div id="projetos" className="w-full flex  items-center flex-col py-24 mx-auto px-4 mb-24">
        <h3 className="text-center text-4xl font-semibold mb-6">Projetos</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 w-full max-w-5xl gap-6">
       
          <ProjectCardTrigger />
          <ProjectCardTrigger />
          <ProjectCardTrigger />
          <ProjectCardTrigger />
          <ProjectCardTrigger />
          <ProjectCardTrigger />
        </div>
    </div>
  )
}