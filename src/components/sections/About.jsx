import aboutImg from "../../assets/about.jpg"
import { ABOUT_TEXT } from "../../constants"
import { RevealOnScroll } from "../RevealOnScroll"
import TypewriterLoop from "./TypeWriter"


export const About = () => {
  const skills = ["React", "Python", "MySQL", "MongoDB", "Node.js", "Flutter", "Postgres"]

  return (
    <div className="px-10">
    <section id="about"  className="w-full lg:w-1/1 bg-white/60 p-8 rounded-2xl shadow-md border border-gray-100 backdrop-blur">
      <RevealOnScroll>
        <h2 className="px-199 font-inter pb-16 text-4xl md:text-16xl font-thin tracking-tight lg:mt-16 lg:text-5xl">
          About Us
        </h2>

        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 px-4">
          {/* Left Side - Skills & Typewriter */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h3 className="font-inter max-w-xl font-light tracking-tighter text-base md:text-lg text-neutral-450">Technologies We use</h3>
            <div className="font-inter bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl md:text-4xl tracking-tight text-transparent mb-6">
                <TypewriterLoop words={skills} />
            </div>
          </div>

          {/* Right Side - About Text */}
          
            <p className="font-inter max-w-xl font-light tracking-tighter text-base md:text-lg text-neutral-450">
              {ABOUT_TEXT}
            </p>
        </div>
      </RevealOnScroll>
    </section>
    </div>
  )
}
