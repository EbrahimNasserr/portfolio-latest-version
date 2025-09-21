'use client'

import { Suspense, lazy } from 'react'
const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  return (
    <Suspense 
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          <div className="relative inline-flex">
            <div className="w-8 h-8 bg-black dark:bg-white rounded-full opacity-10 animate-ping"></div>
            <div className="w-8 h-8 bg-black dark:bg-white rounded-full absolute left-0 animate-pulse"></div>
          </div>
        </div>
      }
    >
      <Spline
        scene={scene}
        className={className}
      />
    </Suspense>
  )
}