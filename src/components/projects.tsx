import { ProjectCardTrigger } from "./projectCardTrigger"
import {motion} from 'framer-motion'

export function Projects ( ){

  const projects = [
    {
      urlCardTrigger:"https://raw.githubusercontent.com/famgz/famgz/main/presentations/controle-de-caixas/1.jpg",
      
      ProjectCardDescriptionTrigger: "Project Card Description 1",
      ProjectNameDialog: "Projec Name Dialog 2",
      ProjectCardNameTrigger: "Projecto de rola",
      ProjectDescriptionDialog: "Project DescriptionDialog",
      CarouselImages: [
        "https://raw.githubusercontent.com/famgz/famgz/main/presentations/controle-de-caixas/1.jpg",
        "https://raw.githubusercontent.com/famgz/famgz/main/presentations/barbershop-app/1.jpg",
        
      ]
    },
    {
      urlCardTrigger: "https://raw.githubusercontent.com/famgz/famgz/main/presentations/barbershop-app/1.jpg",
      ProjectCardDescriptionTrigger: "Project Card Description 1",
      ProjectNameDialog: "Projec Name Dialog 1",
      ProjectCardNameTrigger: "Project Dadowka",
      ProjectDescriptionDialog: "Project DescriptionDialog",
      CarouselImages: [
        "https://raw.githubusercontent.com/famgz/famgz/main/presentations/barbershop-app/1.jpg",
        "https://raw.githubusercontent.com/famgz/famgz/main/presentations/controle-de-caixas/1.jpg",
        "https://raw.githubusercontent.com/famgz/famgz/main/presentations/barbershop-app/1.jpg",
      ]
    },
    {
      urlCardTrigger: "https://raw.githubusercontent.com/famgz/famgz/main/presentations/barbershop-app/1.jpg",
      ProjectCardDescriptionTrigger: "Project Card Description 1",
      ProjectNameDialog: "Projec Name Dialog 1",
      ProjectCardNameTrigger: "Project Card Name Trigger",
      ProjectDescriptionDialog: "Project DescriptionDialog",
      CarouselImages: [
        "https://raw.githubusercontent.com/famgz/famgz/main/presentations/barbershop-app/1.jpg",
        "https://raw.githubusercontent.com/famgz/famgz/main/presentations/controle-de-caixas/1.jpg",
        "https://raw.githubusercontent.com/famgz/famgz/main/presentations/barbershop-app/1.jpg",
      ]
    },
    {
      urlCardTrigger: "https://raw.githubusercontent.com/famgz/famgz/main/presentations/barbershop-app/1.jpg",
      ProjectCardDescriptionTrigger: "Project Card Description 1",
      ProjectNameDialog: "Projec Name Dialog 1",
      ProjectCardNameTrigger: "Project Card Name Trigger",
      ProjectDescriptionDialog: "Project DescriptionDialog",
      CarouselImages: [
        "https://raw.githubusercontent.com/famgz/famgz/main/presentations/barbershop-app/1.jpg",
        "https://raw.githubusercontent.com/famgz/famgz/main/presentations/controle-de-caixas/1.jpg",
        "https://raw.githubusercontent.com/famgz/famgz/main/presentations/barbershop-app/1.jpg",
      ]
    },
    {
      urlCardTrigger:"https://raw.githubusercontent.com/famgz/famgz/main/presentations/controle-de-caixas/1.jpg",
      
      ProjectCardDescriptionTrigger: "Project Card Description 1",
      ProjectNameDialog: "Projec Name Dialog 1",
      ProjectCardNameTrigger: "Project Card Name Trigger",
      ProjectDescriptionDialog: "Project DescriptionDialog",
      CarouselImages: [
        "https://raw.githubusercontent.com/famgz/famgz/main/presentations/controle-de-caixas/1.jpg",
        "https://raw.githubusercontent.com/famgz/famgz/main/presentations/barbershop-app/1.jpg",

      ]
    },
  ]

  return(
    <div id="projetos" className="w-full flex justify-center items-center flex-col py-24 mx-auto px-4 md:mb-2">
      <motion.div
        // initial={{opacity: 0.5, scale: 0}}
        // whileInView={{opacity: 1, scale: 1}}
        // exit={{opacity: 0.5, scale: 0}}  
        // transition={{duration: 0.5}}
      >
        <h3 className="text-center text-4xl font-semibold mb-6">Projetos</h3>
      </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 w-full max-w-5xl gap-6">
       
         {projects.map((project, index) => (
            <ProjectCardTrigger 
              key={index}
              CarouselImages={project.CarouselImages}
              ProjectCardDescriptionTrigger={project.ProjectCardDescriptionTrigger}
              ProjectCardNameTrigger={project.ProjectCardNameTrigger}
              ProjectDescriptionDialog={project.ProjectDescriptionDialog}
              ProjectNameDialog={project.ProjectNameDialog}
              urlCardTrigger={project.urlCardTrigger}
            />
         ))}
        </div>
    </div>
  )
}