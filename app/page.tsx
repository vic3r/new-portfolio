import HeroSection from './Components/HeroSection';
import AboutSection from './Components/AboutSection';
import ProjectsSection from './Components/ProjectsSection';

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
    </main>
  );
}
