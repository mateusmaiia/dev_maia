import { SocialMedias } from './socialMedias'

interface Props{
  handleClickMenu: () => void
  isOpen: boolean,
}

export function SideMenu({ isOpen, handleClickMenu }:Props) {

  function handleClickOption() {
    const open = true;
    handleClickMenu()
    document.body.style.overflow = open ? 'inital' : 'hidden'; 
  }
  return (
    <div className={`fixed top-0 right-0 h-screen w-full bg-background/90 bg-opacity-40 backdrop-blur-sm flex flex-col items-center justify-center dark:text-balance  py-4 px-6 md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-500 ease-in`}>
      <ul className="space-y-4 flex items-center flex-col gap-4">
        <li>
          <a href="#contact" className="text-2xl font-semibold " onClick={handleClickOption}>Contato</a>
        </li>
        <li>
          <a href="#about" className="text-2xl text-center font-semibold " onClick={handleClickOption}>Sobre</a>
        </li>
        <li>
          <a href="#projetos" className="text-2xl text-center font-semibold " onClick={handleClickOption}>Projetos</a>
        </li>
        <li>
          <a href="#skills" className="text-2xl text-center font-semibold " onClick={handleClickOption}>Skills</a>
        </li>
      </ul>
      <div className='flex items-center gap-1 md:block mt-4'>
          <SocialMedias socialMediaName='Github'  socialMediaIcon='github' url='https://github.com/mateusmaiia'/>
          <SocialMedias socialMediaName='Instagram' socialMediaIcon='instagram' url='https://instagram.com/matteusmaia_'/>
          <SocialMedias socialMediaName='Linkedin' socialMediaIcon='linkedin' url='dawd'/>
      </div>
    </div>
  );
}

