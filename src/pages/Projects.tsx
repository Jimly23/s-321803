
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export default function Projects() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="section pt-24 md:pt-32">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 animate-fade-in">
            My <span className="text-gradient">Projects</span>
          </h1>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-16 text-balance animate-fade-in [animation-delay:100ms]">
            A curated selection of my work across user interface design, brand identity, and web development.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-16 animate-fade-in [animation-delay:200ms]">
            <ProjectFilter label="All" active />
            <ProjectFilter label="Design" />
            <ProjectFilter label="Development" />
            <ProjectFilter label="Branding" />
          </div>
        </div>
      </section>
      
      {/* Featured Projects */}
      <section className="section pt-0">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-16">
            <ProjectCard
              title="E-Commerce Redesign"
              category="UI/UX Design"
              featured
              delay={0}
            />
            <ProjectCard
              title="Finance Dashboard"
              category="Web Development"
              featured
              delay={100}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Brand Identity"
              category="Branding"
              delay={200}
            />
            <ProjectCard
              title="Mobile App"
              category="UI/UX Design"
              delay={300}
            />
            <ProjectCard
              title="Marketing Website"
              category="Web Development"
              delay={400}
            />
            <ProjectCard
              title="Design System"
              category="UI/UX Design"
              delay={500}
            />
            <ProjectCard
              title="Product Landing Page"
              category="Web Development"
              delay={600}
            />
            <ProjectCard
              title="Logo Collection"
              category="Branding"
              delay={700}
            />
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="section bg-secondary/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-center mb-16">
            My Creative <span className="text-gradient">Process</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProcessCard
              number="01"
              title="Discovery"
              description="Understanding the problem space through research and stakeholder interviews."
            />
            <ProcessCard
              number="02"
              title="Ideation"
              description="Exploring potential solutions through sketching and brainstorming."
            />
            <ProcessCard
              number="03"
              title="Creation"
              description="Bringing ideas to life through design and development iterations."
            />
            <ProcessCard
              number="04"
              title="Refinement"
              description="Polishing the solution based on testing and feedback."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

type ProjectFilterProps = {
  label: string;
  active?: boolean;
};

function ProjectFilter({ label, active }: ProjectFilterProps) {
  return (
    <button
      className={cn(
        "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300",
        active 
          ? "bg-accent text-accent-foreground"
          : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
      )}
    >
      {label}
    </button>
  );
}

type ProjectCardProps = {
  title: string;
  category: string;
  featured?: boolean;
  delay?: number;
};

function ProjectCard({ title, category, featured = false, delay = 0 }: ProjectCardProps) {
  return (
    <Link 
      to={`#`} 
      className={cn(
        "group relative overflow-hidden rounded-2xl",
        "transition-all duration-300 hover:shadow-[0_0_25px_-5px_rgba(0,0,0,0.1)]",
        "dark:hover:shadow-[0_0_30px_-5px_rgba(0,0,0,0.2)]",
        featured ? "aspect-[4/3]" : "aspect-square",
        `animate-fade-in [animation-delay:${delay}ms]`
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 group-hover:scale-105 transition-transform duration-500" />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="absolute bottom-0 left-0 p-6 z-10">
        <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">
          <span className="text-xs font-medium px-3 py-1 rounded-full bg-accent/20 text-accent-foreground backdrop-blur-sm mb-2 inline-block">
            {category}
          </span>
          <h3 className="text-xl md:text-2xl font-display font-medium text-white mt-2">
            {title}
          </h3>
        </div>
      </div>
    </Link>
  );
}

type ProcessCardProps = {
  number: string;
  title: string;
  description: string;
};

function ProcessCard({ number, title, description }: ProcessCardProps) {
  return (
    <div className="flex flex-col items-center text-center p-6">
      <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
        <span className="text-2xl font-display font-bold text-accent">
          {number}
        </span>
      </div>
      <h3 className="text-xl font-display font-medium mb-3">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm text-balance">
        {description}
      </p>
    </div>
  );
}
