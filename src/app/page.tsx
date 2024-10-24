// app/page.tsx
import Header from './components/header';
import About from './components/about';
import Projects from './components/projects';
import Skills from './components/skills';
import Contact from './components/contact';
import Footer from './components/footer';
import Transition from './components/transition';
export default function HomePage() {
  return (
    <div className="bg-gradient-to-b from-zinc-900 to-zinc-900 overflow-hidden">
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <Transition/>
    </div>
  );
}
