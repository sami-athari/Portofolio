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
    <div className="bg-gradient-to-b from-gray-900 to-blue-900">
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
