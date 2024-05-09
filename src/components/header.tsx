import { useState } from "react";
import { SideMenu } from "./sideMenu";
import { ThemeToggle } from "./theme/theme-toggle";
import { SocialMedias } from './socialMedias'

export function Header() {
  const [bars, setBars] = useState(false);
  const [sideMenuOpen, setSideMenuOpen] = useState(false);

  const handleClickMenu = () => {
    setBars(!bars)
    setSideMenuOpen(!sideMenuOpen)
    document.body.style.overflow = bars ? 'initial' : 'hidden';
  };


  return (
    <header className="fixed top-0 w-full backdrop-blur-sm">
      <div className="w-full p-4 mx-auto max-w-screen-lg flex items-center justify-between">
  
        <h1 className="text-lg md:text-2xl font-bold z-50">Dev Portfolio</h1>
        <nav className=" hidden md:block">
          <SideMenu handleClickMenu={handleClickMenu} isOpen={sideMenuOpen}/>
          
          <ul className="flex items-center  gap-4 md:gap-8">
            <li>
              <a href="#contact" className="relative text-base md:text-lg w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#3b9be5] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">Contato</a>
            </li>
            <li>
              <a href="#about" className="relative text-base md:text-lg w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#3b9be5] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">Sobre</a>
            </li>
            <li>
              <a href="#projetos" className="relative text-base md:text-lg w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#3b9be5] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">Projetos</a>
            </li>
            <li>
              <a href="#skills" className="relative text-base md:text-lg w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#3b9be5] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">Skills</a>
            </li>
          </ul>
        </nav>
        <div className='hidden md:block'>
          <div className='flex items-center gap-1 md:block'>
            <SocialMedias socialMediaName='Github'  socialMediaIcon='github' url='https://github.com/mateusmaiia'/>
            <SocialMedias socialMediaName='Instagram' socialMediaIcon='instagram' url='https://instagram.com/matteusmaia_'/>
            <SocialMedias socialMediaName='Linkedin' socialMediaIcon='linkedin' url='https://www.linkedin.com/in/mateus-maia-690218273/'/>
          <ThemeToggle /> 
          </div>
        </div>
       
        <div className="flex items-center justify-center  md:hidden">
          <div className="z-50">
            <ThemeToggle />
          </div>
          
         {/* Botão de Toggle */}
         <button onClick={handleClickMenu} className="md:hidde z-50">
          {sideMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          )}
        </button>
        {/* Menu Lateral */}
        <SideMenu isOpen={sideMenuOpen} handleClickMenu={handleClickMenu} />
        </div>
        </div>
    </header>
  );
}
