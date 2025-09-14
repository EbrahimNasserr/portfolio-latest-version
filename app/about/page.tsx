'use client'

import { SplineScene } from "./_components/splite";
import { Card } from "./_components/card"
import { Spotlight } from "./_components/spotlight"
 
export default function SplineSceneBasic() {
  return (
    <Card className="h-[600px] relative md:px-12 overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20 bg-black/50 dark:bg-white/90"
        fill="white"
      />
      
      <div className="flex h-full flex-col md:flex-row">
        {/* Left content */}
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400">
            Interactive 3D
          </h1>
          <p className="mt-4 text-neutral-700 dark:text-neutral-300 max-w-lg">
            Bring your UI to life with beautiful 3D scenes. Create immersive experiences 
            that capture attention and enhance your design.
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