import { Separator } from "@/components/ui/separator";

export function Footer(){
  return(
    <footer className="w-full px-10 py-14 flex flex-col gap-2  bg-slate-500/10 text-lg">
      <div className="w-full flex justify-center items-center gap-2 mx-auto text-semibold">
        2024
        <Separator orientation="vertical" className="h-4 bg-black dark:bg-white  w-[2px]" />
        <span className="text-cyan-400 text-lg tracking-tight">Mateus Maia</span>
      </div>
      <div className="w-full flex justify-center items-center gap-2 flex-col md:flex-row">
        <p className="text-base  dark:text-white/50">Página desenvolvida com</p>
        <div className="flex items-center justify-center gap-2 ">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt=""  className="w-4 h-4"/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="" className="w-4 h-4" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" alt=""  className="w-4 h-4"/>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt=""  className="w-4 h-4"/>
        </div>
      </div>
    </footer>
  )
}

        {/* <p className="text-center text-sm text-gray-500">
          © 2021  |  Todos os direitos reservados
        </p> */}