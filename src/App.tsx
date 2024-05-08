import { About } from './components/about'
import { Header } from './components/header'
import { Section } from './components/section'
import { ThemeProvider } from './components/theme/themeProvider'
import './globals.css'
import { Projects } from './components/projects'

export function App() {

  return (
    <ThemeProvider  storageKey='dev-maia-theme' defaultTheme='dark'>
    <div className="flex min-h-screen flex-col antialiased ">
      <Header />
      <Section />
      <About />
      <Projects />
    </div>
    </ThemeProvider>
  )
}

