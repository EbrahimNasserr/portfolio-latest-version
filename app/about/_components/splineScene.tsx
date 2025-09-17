'use client'

import { Card } from "@/components/ui/card";
import { SplineScene } from "./splite";
import { Spotlight } from "./spotlight"
 
export default function SplineSceneBasic() {
  return (
    <Card className="h-[600px] relative md:px-12 overflow-hidden pt-8">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20 bg-black/50 dark:bg-white/90"
        fill="white"
      />
      
      <div className="flex h-full flex-col md:flex-row">
        {/* Left content */}
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400">
          Meet Ebrahim Nasser
          </h1>
          <p className="mt-4 text-neutral-700 dark:text-neutral-300 max-w-lg">
           A passionate Full Stack Web Developer based in Cairo with expertise in building modern, responsive, and scalable web applications. With a strong focus on Front-End Development, I specialize in React.js, Next.js, Vue.js, and MERN Stack technologies, crafting seamless user experiences through clean code and interactive design.
          </p>
        </div>

        {/* Right content */}
        <div className="flex-1 relative">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  )
}