import { About } from './components/about'
import { Header } from './components/header'
import { Section } from './components/section'
import { ThemeProvider } from './components/theme/themeProvider'
import './globals.css'
import { Projects } from './components/projects'
import { Contact } from './components/contact'
import { Skills } from './components/skills'
import { Footer } from './components/footer'

export function App() {

  return (
    <ThemeProvider  storageKey='dev-maia-theme' defaultTheme='dark'>
    <div className="flex min-h-screen flex-col antialiased ">
      <Header />
      <Section />
      <About />
      <Projects />
      <Contact />
      <Skills />
      <Footer />
    </div>
    </ThemeProvider>
  )
}

