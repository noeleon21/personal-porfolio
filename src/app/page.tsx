import Header from '@/components/ui/Header'
import Footer from '@/Sections/Footer'
import ProjectCard from '@/components/ui/Projectcard'
import Experience from '@/Sections/Experience'
import Navbar from '@/components/ui/navbar'
import Project from '@/Sections/Project'
import About from '@/Sections/About'
import Hero from '@/Sections/Hero'
export default function Home() {
  return (
    <div>
      <Header />
     <main className="max-w-7xl h-full mx-auto px-6 py-12 bg-[#121212] text-white">


        <Hero />
        {/* About */}
       <section id="about" className="py-16 border-t border-slate-100">
        <About />

</section>

        {/* Projects */}
        <section id="projects" className="py-12 border-t border-slate-100">
          <Project />
        </section>

        {/* Experience */}
        <section id="experience" className="py-12 border-t border-slate-100">
          <h2 className="text-2xl font-bold">Experience</h2>
          <Experience />

        </section>

      </main>
      <Footer />
    </div>
  )
}