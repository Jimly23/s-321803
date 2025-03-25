
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        const opacity = 1 - Math.min(scrollY / 500, 1);
        const translateY = scrollY * 0.5;
        heroRef.current.style.opacity = String(opacity);
        heroRef.current.style.transform = `translateY(${translateY}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-accent/5 to-transparent" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent/10 blur-3xl opacity-50 dark:opacity-20 -z-10"
          aria-hidden="true"
        />
        
        <div 
          ref={heroRef} 
          className="text-center max-w-3xl mx-auto px-6 transition-all duration-300 ease-out"
        >
          <h1 className="text-3xl md:text-5xl font-display font-bold leading-tight md:leading-tight tracking-tight text-balance mb-6 animate-fade-in">
            <span className="block">Hi, I'm Jimly Assidqi</span>
            <span className="text-gradient">Blockchain Developer</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-lg mx-auto mb-8 animate-fade-in [animation-delay:200ms] text-balance">
            I create minimalist digital experiences where technology meets creativity
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in [animation-delay:400ms]">
            <Button asChild size="lg" className="rounded-full px-8 text-base bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:shadow-lg">
              <Link to="/projects">View Work</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-8 text-base">
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-foreground/30 rounded-full animate-[wiggle_1.5s_ease-in-out_infinite]" />
          </div>
        </div>
      </section>
      
      {/* Featured Section */}
      <section className="section bg-secondary/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-center mb-16">
            Featured <span className="text-gradient">Work</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <FeaturedCard 
                key={item}
                title={`Project ${item}`}
                description="A minimalist design project with focus on typography and user experience."
                link="/projects"
              />
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Button asChild variant="outline" className="rounded-full text-base hover:bg-secondary hover:text-secondary-foreground transition-all duration-300">
              <Link to="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Latest Articles */}
      <section className="section">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-center mb-16">
            Latest <span className="text-gradient">Articles</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((item) => (
              <ArticleCard
                key={item}
                title={`Design Principles for ${item === 1 ? 'Minimalism' : 'Digital Products'}`}
                excerpt={`Exploring the core principles of ${item === 1 ? 'minimalist design' : 'effective digital products'} and how to apply them to your work.`}
                date={`${item === 1 ? 'June' : 'May'} 15, 2023`}
                link="/blog"
              />
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Button asChild variant="outline" className="rounded-full text-base hover:bg-secondary hover:text-secondary-foreground transition-all duration-300">
              <Link to="/blog">Read All Articles</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section bg-gradient-to-r from-accent/10 to-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6">
            Let's Create Something <span className="text-gradient">Together</span>
          </h2>
          <p className="text-lg text-foreground/80 mb-8 max-w-lg mx-auto">
            I'm currently available for freelance work and interesting projects.
            If you have a project that needs creative solutions, let's talk.
          </p>
          <Button asChild size="lg" className="rounded-full px-10 text-base">
            <Link to="/contact">Start a Conversation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

type FeaturedCardProps = {
  title: string;
  description: string;
  link: string;
};

function FeaturedCard({ title, description, link }: FeaturedCardProps) {
  return (
    <div className={cn(
      "group relative overflow-hidden rounded-2xl bg-card border border-border/40",
      "transition-all duration-300 hover:border-accent/20 hover:shadow-[0_0_25px_-5px_rgba(0,0,0,0.1)]",
      "dark:hover:shadow-[0_0_30px_-5px_rgba(0,0,0,0.2)]"
    )}>
      <div className="aspect-[16/9] w-full bg-secondary/50 bg-gradient-to-br from-accent/5 to-transparent" />
      <div className="p-6">
        <h3 className="text-xl font-display font-medium mb-2 group-hover:text-accent transition-colors duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground mb-4 text-sm">
          {description}
        </p>
        <Link 
          to={link} 
          className="text-sm font-medium text-accent hover:text-accent/80 hover-link inline-flex items-center"
        >
          View Project
        </Link>
      </div>
    </div>
  );
}

type ArticleCardProps = {
  title: string;
  excerpt: string;
  date: string;
  link: string;
};

function ArticleCard({ title, excerpt, date, link }: ArticleCardProps) {
  return (
    <div className={cn(
      "group p-8 rounded-2xl bg-card border border-border/40",
      "transition-all duration-300 hover:border-accent/20 hover:shadow-[0_0_25px_-5px_rgba(0,0,0,0.1)]",
      "dark:hover:shadow-[0_0_30px_-5px_rgba(0,0,0,0.2)]"
    )}>
      <div className="mb-2 text-sm text-muted-foreground">
        {date}
      </div>
      <h3 className="text-xl font-display font-medium mb-3 group-hover:text-accent transition-colors duration-300">
        {title}
      </h3>
      <p className="text-muted-foreground mb-4 text-balance">
        {excerpt}
      </p>
      <Link 
        to={link} 
        className="text-sm font-medium text-accent hover:text-accent/80 hover-link inline-flex items-center"
      >
        Read Article
      </Link>
    </div>
  );
}
