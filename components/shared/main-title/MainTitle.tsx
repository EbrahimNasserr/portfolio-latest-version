import { RefObject } from "react";

export default function MainTitle({title, ref}: {title: string, ref: RefObject<HTMLHeadingElement | null>}) {
  return (
    <h2 ref={ref} className="text-4xl relative md:text-5xl font-bold text-center mb-12 text-balance ">
      <span className="absolute top-1/2 right-0 w-[15%] sm:w-1/4 h-0.5 bg-primary -z-10"></span>
      {title}
      <span className="absolute top-1/2 left-0 w-[15%] sm:w-1/4 h-0.5 bg-primary -z-10"></span>
    </h2>
  )
}
