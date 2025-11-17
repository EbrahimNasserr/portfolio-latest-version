import { RefObject } from "react";

export default function MainTitle({ title, ref }: { title: string, ref: RefObject<HTMLHeadingElement | null> }) {
  return (
    <div className="mb-12">
    <div className="relative flex items-center justify-center sm:justify-between gap-4">
      <span className=" w-[15%] hidden sm:block sm:w-[18%] lg:w-[22%] h-0.5 bg-primary"></span>
      <h2 ref={ref} className="text-3xl sm:text-4xl relative md:text-5xl font-bold text-center  text-balance ">
        {title}
      </h2>
      <span className=" w-[15%] hidden sm:block sm:w-[18%] lg:w-[22%] h-0.5 bg-primary"></span>
    </div>
    <div className="w-1/2 mx-auto h-0.5 bg-primary mt-4 sm:hidden"></div>
    </div>
  )
}
