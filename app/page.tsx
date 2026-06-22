import Navbar from "@/component/Navbar";
import HeroSection from "@/component/HeroSection";
import AboutSection from "@/component/AboutSection";
import ProjectsSection from "@/component/ProjectsSection";
import ClientsSection from "@/component/ClientsSection";
import Footer from "@/component/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50 transition-colors duration-300">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ClientsSection />
      </main>
      <Footer />
    </div>
  );
}
