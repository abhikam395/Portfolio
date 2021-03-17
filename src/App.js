import './App.scss';
import NavbarComponent from './components/NavbarComponent';
import HomeSection from './sections/HomeSection';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import ContactSection from './sections/ContactSection';
import ProjectsSection from './sections/ProjectsSection';

function App() {
  return (
    <div className="app app--size app--theme">
      <NavbarComponent />
      <HomeSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}

export default App;
