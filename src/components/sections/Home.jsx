import { HERO_CONTENT } from "../../constants"
import { motion } from "framer-motion"
import { AnimatedCube } from "./AnimatedCube"

const container = (delay) => ({
    hidden: {x: -100, opacity:0},
    visible: {
        x: 50,
        opacity: 1,
        transition: {duration: 0.5, delay: delay}
    }
})
// initial={{x:-100, opacity:0}} animate={isLoaded ? {x:50, opacity:1} : {x:0}}
export const Home = ({isLoaded}) => {
    return (
        <div className=" min-h-screen pt-12 lg:pt-24 px-4 lg:px-14">

            <div className="flex flex-wrap w-full ">
                {/* Left: Hero Content */}
                <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left px-30 ">
                        <motion.h1  variants={container(0)} initial="hidden" animate={isLoaded ? "visible" : "hidden" } className="font-inter pb-16 text-6xl md:text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl" >
                            Hey There
                        </motion.h1>
                        <motion.span variants={container(0.5)} initial="hidden" animate={isLoaded ? "visible" : "hidden" } className="font-inter bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl md:text-3xl tracking-tight text-transparent mb-6">
                        Empowering Ideas into Impactful Digital Solutions
                        </motion.span>
                        <motion.p variants={container(1)} initial="hidden" animate={isLoaded ? "visible" : "hidden" } className="font-inter max-w-xl font-light tracking-tighter text-base md:text-lg text-neutral-450">
                            {HERO_CONTENT}
                        </motion.p>
                    </div>
                </div>

                {/* Right: Profile Image */}
                <div className="w-full lg:w-1/2 flex justify-center items-center mt-12 lg:mt-0">
                    <AnimatedCube />
                </div>
            </div>
        </div>
    )
}
