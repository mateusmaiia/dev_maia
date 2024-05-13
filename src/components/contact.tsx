import { Button } from "./ui/button";
import {Mail, Smartphone} from 'lucide-react'
import { FaWhatsapp } from "react-icons/fa";

export function Contact(){
  return(
    <div id="contact" className="grid grid-cols-2 h-[600px] md:h-[620px] md:pt-10 mx-auto md:max-w-[1500px] px-40 border-y w-full">
      <div className="flex flex-col w-full items-center  justify-center">
       <div className="flex flex-start flex-col">
          <h1 className="text-4xl font-semibold tracking-tight mb-5">Fale comigo!</h1>
          <Button variant="ghost" className="flex gap-2">
            <Mail size="22px" />
            <a href="matteusmaia@gmail.com" className="flex items-center justify-between w-full">matteusmaia@gmail.com</a>
          </Button>
          <Button variant="ghost" className="flex gap-2 justify-start">
            <Smartphone size="22px" className="right-auto"/>
            <a 
              href="matteusmaia@gmail.com" 
              className="left-auto"
            >
              +55 83 99953-3314
            </a>
          </Button> 
          <Button variant="outline" className="flex group/button items-center gap-4 mt-4 w-5/6 p-5 border-2 border-green-600 hover:bg-green-600 hover:text-white">
            <FaWhatsapp size="22px" className="text-green-500 group-hover/button:fill-white"/>  
            <a 
              href="https://api.whatsapp.com/send?phone=5583999533314&text=Fala,%20Maia!%20Vim%20do%20teu%20portifólio,%20quero%20trabalhar%20contigo!" 
              className="text-green-500 group-hover/button:text-white text-base"
              title="Me chama no Whatsapp!"
              target="_blank"
            >
              Whatsapp
            </a>
          </Button>

       </div>
      </div>
      <div className="flex items-center justify-center duration-700">
        <img 
          src="https://portifolio-tau-two-72.vercel.app/img/celular-2.png" 
          alt="imagem celular" 
          className="ml-2 w-44 animate-bounce duration-1000 ease-in-out h-[400px] hidden md:block" 
        />
      </div>
    </div>
  )
}