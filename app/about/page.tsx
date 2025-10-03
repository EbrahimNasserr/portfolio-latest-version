import { Timeline, ServicesSection, IntroSection, TimelineEntry } from "./_components";

// Main About Page Component
export default function AboutPage() {
  const timelineData: TimelineEntry[] = [
    {
      title: "2025",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Continuing my Computer Science degree at Thebes Academy while working as a Full Stack Developer. 
            Focused on scalable web apps and advanced state management.
          </p>
          <div className="grid grid-cols-2 gap-4">
  <img
    src="https://source.unsplash.com/1581090700227-4c4d1b2f2b6e/400x300"
    alt="2025 milestone"
    className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-xl"
  />
  <img
    src="https://source.unsplash.com/1526378722484-c1f81cfd9e87/400x300"
    alt="2025 milestone"
    className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-xl"
  />
</div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Joined Echopus as a Front-End Developer, built client-facing platforms with React and Next.js.  
            Also worked part-time at BrSoft, delivering two e-commerce platforms and a company portfolio website.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&auto=format&fit=crop"
              alt="2024 milestone"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-xl"
            />
            <img
              src="https://images.unsplash.com/photo-1605379399642-870262d3d051?w=800&auto=format&fit=crop"
              alt="2024 milestone"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-xl"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal my-8">
            Worked as a Front-End Instructor at GDSC, teaching React, Next.js, and animations.  
            Mentored students and conducted hands-on coding workshops.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop"
              alt="2023 milestone"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-xl"
            />
            <img
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&auto=format&fit=crop"
              alt="2023 milestone"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-xl"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal my-4">
            Started my Computer Science degree at Thebes Academy and began my journey into web development.  
            Completed a Full Stack diploma at Route IT Training Center.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Learned MERN Stack fundamentals
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Built my first full-stack project
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Set foundations in clean code & UI/UX
            </div>
          </div>
        </div>
      ),
    },
  ];
  

  return (
    <main className="w-full min-h-screen bg-muted/30">
      <IntroSection />
      <ServicesSection />
      <Timeline data={timelineData} />
    </main>
  );
}
