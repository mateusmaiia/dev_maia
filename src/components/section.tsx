import { Button } from "./ui/button";
import { Download } from "lucide-react";

export function Section() {
  return (
    <div className="w-full max-w-screen-lg mx-auto mt-24  md:mt-44 grid md:grid-cols-2 grid-row gap-4 px-8 md:h-full">
      <div className="order-last md:order-first w-full mx-auto flex items-center  flex-col md:items-start justify-center">
        <h1 className="text-4xl md:text-5xl tracking-tighter font-semibold">Mateus Maia</h1>
        <h3 className="text-accent-foreground-foreground mt-1 tracking-wide ">Desenvolvedor de software</h3>
        <div className="flex flex-col md:flex-row md:gap-5 mt-5">
          <Button className="w-full md:w-auto text-sm md:text-base bg-[#172554] text-white dark:hover:text-black flex items-center justify-center gap-2" size="lg">
            <Download size="22px" /> Baixar CV
          </Button>
          <Button className="w-full md:w-auto text-sm md:text-base mt-2 md:mt-0" size="lg" variant="outline">
            Entrar em contato
          </Button>
        </div>
      </div>
      <div className=" flex justify-center md:justify-end">
        <img className="h-64 w-h-64 md:h-[380px] md:w-[380px] mb-10 rounded-full md:ml-10" src="https://avatars.githubusercontent.com/u/131715627?v=4" alt="Mateus Maia" />
      </div>
    </div>
  );
}
