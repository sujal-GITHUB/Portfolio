import Experience from "@/components/main/Experience";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import { About } from "@/components/main/About";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col">
        {/* Hero Section */}
        <div className="">
          <Hero />
        </div>
        
        {/* About Section */}
        <div className=" lg:mb-0">
          <About />
        </div>
        
        {/* Skills Section */}
        <div className="">
          <Skills />
        </div>
        
        {/* Experience Section */}
        <div className="">
          <Experience />
        </div>
        
        {/* Projects Section */}
        <div>
          <Projects />
        </div>
      </div>
    </main>
  );
}
