import { Code2, Palette, Zap, Users, ExternalLink, Github, Server,  ChartArea, Cloud, GitBranch, Bug, Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
export default function CoreSkills() {
    const skills = [
        { name: 'Frontend Technologies', items: ['React', 'Next.js', 'Vue.js', 'JavaScript', 'HTML/CSS'], icon : <Code2 /> },
        { name: 'Styling & Animation', items: ['Tailwind CSS', 'GSAP', 'Framer Motion'], icon: <Palette /> },
        { name: 'State Management', items: ['Redux', 'Context API', 'Pinia'], icon: <Zap /> },
        { name: 'Teaching & Mentoring', items: ['GDSC Instructor', 'Student Guidance', 'Workshop Leader'], icon: <Users /> },
        { name: 'Backend Technologies', items: ['Node.js', 'Express.js', 'MongoDB', 'MySQL', 'PostgreSQL'], icon: <Server /> },
        { name: 'API Development', items: ['RESTful APIs', 'GraphQL', 'WebSocket'], icon: <ChartArea /> },
        { name: 'Cloud Services', items: ['AWS', 'Azure', 'Google Cloud'], icon: <Cloud /> },
        { name: 'Version Control', items: ['Git', 'GitHub', 'GitLab'], icon: <GitBranch /> },
        { name: 'Testing & Debugging', items: ['Jest', 'Mocha', 'Chai'], icon: <Bug /> },
        { name: 'Project Management', items: ['Agile', 'Scrum', 'Kanban'], icon: <Calendar /> },
      ];
    
  return (
    <section className='py-20 bg-muted/30'>
  <div className='container mx-auto px-6'>
 <div className='max-w-6xl mx-auto'>
 <h2 className='text-4xl md:text-5xl font-bold text-center mb-12 text-balance'>Core Skills & Technologies</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {skills.map((skill) => (
          <Card key={skill.name}>
            <CardHeader>
              <CardTitle>{skill.name}</CardTitle>
            </CardHeader>
            <CardContent>
                <ul className='space-y-2 text-muted-foreground'>
                    {skill.items.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </CardContent>
          </Card>
        ))}
      </div>
 </div>
  </div>
    </section>
  )
}
