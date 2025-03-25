
import { cn } from "@/lib/utils";

export default function About() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="section pt-24 md:pt-32">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16">
            <div className="w-full md:w-1/2 order-2 md:order-1 animate-fade-in">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
                About <span className="text-gradient">Me</span>
              </h1>
              <p className="text-lg text-foreground/80 mb-6 text-balance">
                I'm a designer and developer based in San Francisco with over 5 years of experience creating digital products for clients around the world.
              </p>
              <p className="text-lg text-foreground/80 mb-6 text-balance">
                My passion lies at the intersection of technology and creativity, focusing on creating meaningful and minimalist digital experiences.
              </p>
            </div>
            
            <div className="w-full md:w-1/2 order-1 md:order-2 animate-fade-in [animation-delay:200ms]">
              <div className="relative aspect-square max-w-md w-full mx-auto">
                <div className="absolute inset-0 rounded-3xl overflow-hidden border border-border/50">
                  <div className="w-full h-full bg-gradient-to-br from-accent/20 to-primary/5" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/10 dark:bg-accent/5 rounded-2xl" />
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-accent/10 dark:bg-accent/5 rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section className="section bg-secondary/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-center mb-16">
            My <span className="text-gradient">Skills</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            <SkillCard
              title="UI/UX Design"
              description="Creating intuitive interfaces with a focus on user experience and accessibility."
              skills={["Figma", "Prototyping", "User Testing", "Wireframing"]}
            />
            <SkillCard
              title="Frontend Development"
              description="Building responsive and optimized interfaces with modern frameworks."
              skills={["React", "TypeScript", "Tailwind CSS", "Next.js"]}
            />
            <SkillCard
              title="Creative Direction"
              description="Directing projects from concept to completion with a cohesive vision."
              skills={["Art Direction", "Brand Identity", "Design Systems", "Visual Design"]}
            />
          </div>
        </div>
      </section>
      
      {/* Experience Section */}
      <section className="section">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-center mb-16">
            Work <span className="text-gradient">Experience</span>
          </h2>
          
          <div className="space-y-12">
            <ExperienceItem
              title="Senior Designer"
              company="Design Studio"
              period="2020 — Present"
              description="Leading design direction for key clients, mentoring junior designers, and implementing design systems for scalable products."
            />
            
            <ExperienceItem
              title="UI/UX Designer"
              company="Tech Company"
              period="2018 — 2020"
              description="Created user interfaces for web and mobile applications, conducted user research, and collaborated with cross-functional teams."
            />
            
            <ExperienceItem
              title="Junior Designer"
              company="Creative Agency"
              period="2017 — 2018"
              description="Assisted senior designers with visual design tasks, created design assets, and participated in brainstorming sessions."
            />
          </div>
        </div>
      </section>
      
      {/* Education Section */}
      <section className="section bg-secondary/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-center mb-16">
            <span className="text-gradient">Education</span> & Certifications
          </h2>
          
          <div className="space-y-12">
            <ExperienceItem
              title="Master's in Interactive Design"
              company="Design University"
              period="2015 — 2017"
              description="Focused on human-computer interaction, user experience research, and interactive prototyping."
            />
            
            <ExperienceItem
              title="Bachelor's in Graphic Design"
              company="Art Institute"
              period="2011 — 2015"
              description="Studied visual communication, typography, color theory, and digital illustration."
            />
            
            <ExperienceItem
              title="UX Certification"
              company="Nielsen Norman Group"
              period="2019"
              description="Comprehensive certification in user experience research, design, and evaluation methodologies."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

type SkillCardProps = {
  title: string;
  description: string;
  skills: string[];
};

function SkillCard({ title, description, skills }: SkillCardProps) {
  return (
    <div className={cn(
      "p-8 rounded-2xl bg-card border border-border/40",
      "transition-all duration-300 hover:border-accent/20 hover:shadow-[0_0_25px_-5px_rgba(0,0,0,0.1)]",
      "dark:hover:shadow-[0_0_30px_-5px_rgba(0,0,0,0.2)]"
    )}>
      <h3 className="text-xl font-display font-medium mb-3">
        {title}
      </h3>
      <p className="text-muted-foreground mb-6 text-balance">
        {description}
      </p>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span 
            key={index} 
            className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

type ExperienceItemProps = {
  title: string;
  company: string;
  period: string;
  description: string;
};

function ExperienceItem({ title, company, period, description }: ExperienceItemProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 md:gap-12 group">
      <div>
        <h3 className="text-xl font-display font-medium mb-1 group-hover:text-accent transition-colors duration-300">
          {title}
        </h3>
        <p className="text-lg text-foreground/90 mb-2">{company}</p>
        <p className="text-sm text-muted-foreground">{period}</p>
      </div>
      
      <div>
        <p className="text-foreground/80 text-balance">
          {description}
        </p>
      </div>
    </div>
  );
}
