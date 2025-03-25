
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export default function Blog() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="section pt-24 md:pt-32">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 animate-fade-in">
            <span className="text-gradient">Blog</span> & Articles
          </h1>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-16 text-balance animate-fade-in [animation-delay:100ms]">
            Thoughts, insights, and perspectives on design, technology, and the creative process.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-16 animate-fade-in [animation-delay:200ms]">
            <BlogFilter label="All" active />
            <BlogFilter label="Design" />
            <BlogFilter label="Development" />
            <BlogFilter label="Creativity" />
            <BlogFilter label="Career" />
          </div>
        </div>
      </section>
      
      {/* Featured Post */}
      <section className="section pt-0">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <FeaturedPost
              title="The Art of Minimalism in Digital Design"
              excerpt="Exploring how less can be more in the digital realm and the principles behind effective minimalist design in modern interfaces."
              date="June 15, 2023"
              category="Design"
              readTime="8 min read"
            />
          </div>
          
          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {articles.map((article, index) => (
              <ArticleCard
                key={index}
                title={article.title}
                excerpt={article.excerpt}
                date={article.date}
                category={article.category}
                readTime={article.readTime}
                delay={index * 100}
              />
            ))}
          </div>
          
          {/* Load More */}
          <div className="text-center">
            <button className="px-8 py-3 rounded-full text-sm font-medium border border-border hover:bg-secondary transition-all duration-300">
              Load More Articles
            </button>
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="section bg-secondary/50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6">
            Subscribe to my <span className="text-gradient">Newsletter</span>
          </h2>
          <p className="text-foreground/80 mb-8 text-balance">
            Get my latest articles, resources, and insights delivered directly to your inbox.
            No spam, unsubscribe anytime.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-4 py-3 rounded-full bg-background border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none"
            />
            <button className="whitespace-nowrap px-6 py-3 rounded-full bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

// Sample blog articles data
const articles = [
  {
    title: "Design Systems: Build Once, Use Everywhere",
    excerpt: "How to create and maintain an effective design system that scales with your product.",
    date: "May 22, 2023",
    category: "Design",
    readTime: "6 min read"
  },
  {
    title: "Typography in UI: More Than Just Readable Text",
    excerpt: "The nuances of typography in user interfaces and how it impacts the overall experience.",
    date: "May 10, 2023",
    category: "Design",
    readTime: "5 min read"
  },
  {
    title: "The Psychology of Color in Digital Interfaces",
    excerpt: "Understanding how color influences user perception and behavior in digital products.",
    date: "April 28, 2023",
    category: "Design",
    readTime: "7 min read"
  },
  {
    title: "Frontend Architecture: Patterns That Scale",
    excerpt: "Exploring scalable frontend architecture patterns for growing applications.",
    date: "April 15, 2023",
    category: "Development",
    readTime: "9 min read"
  },
  {
    title: "Finding Your Creative Process",
    excerpt: "Developing a sustainable and effective creative process for consistent output.",
    date: "March 30, 2023",
    category: "Creativity",
    readTime: "4 min read"
  },
  {
    title: "From Designer to Design Leader",
    excerpt: "The journey and challenges of transitioning from an individual contributor to a design leader.",
    date: "March 12, 2023",
    category: "Career",
    readTime: "8 min read"
  }
];

type BlogFilterProps = {
  label: string;
  active?: boolean;
};

function BlogFilter({ label, active }: BlogFilterProps) {
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

type FeaturedPostProps = {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
};

function FeaturedPost({ title, excerpt, date, category, readTime }: FeaturedPostProps) {
  return (
    <Link
      to="#"
      className="group block overflow-hidden rounded-2xl border border-border/40 hover:border-accent/20 transition-all duration-300 hover:shadow-[0_0_25px_-5px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_0_30px_-5px_rgba(0,0,0,0.2)]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="aspect-[16/9] lg:aspect-auto bg-gradient-to-br from-accent/10 to-primary/5 overflow-hidden">
          <div className="w-full h-full transform group-hover:scale-105 transition-transform duration-500" />
        </div>
        
        <div className="p-8 flex flex-col justify-center">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-xs font-medium px-3 py-1 rounded-full bg-accent/10 text-accent">
              {category}
            </span>
            <span className="text-sm text-muted-foreground">
              {date} · {readTime}
            </span>
          </div>
          
          <h2 className="text-2xl lg:text-3xl font-display font-semibold mb-4 group-hover:text-accent transition-colors duration-300">
            {title}
          </h2>
          
          <p className="text-foreground/80 mb-6 text-balance">
            {excerpt}
          </p>
          
          <div className="text-sm font-medium text-accent hover-link inline-flex">
            Read Article
          </div>
        </div>
      </div>
    </Link>
  );
}

type ArticleCardProps = {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  delay?: number;
};

function ArticleCard({ title, excerpt, date, category, readTime, delay = 0 }: ArticleCardProps) {
  return (
    <Link
      to="#"
      className={cn(
        "group block p-6 rounded-2xl border border-border/40 bg-card",
        "transition-all duration-300 hover:border-accent/20 hover:shadow-[0_0_25px_-5px_rgba(0,0,0,0.1)]",
        "dark:hover:shadow-[0_0_30px_-5px_rgba(0,0,0,0.2)]",
        `animate-fade-in [animation-delay:${delay}ms]`
      )}
    >
      <div className="flex items-center gap-4 mb-4">
        <span className="text-xs font-medium px-3 py-1 rounded-full bg-accent/10 text-accent">
          {category}
        </span>
        <span className="text-sm text-muted-foreground">
          {readTime}
        </span>
      </div>
      
      <h3 className="text-xl font-display font-medium mb-3 group-hover:text-accent transition-colors duration-300">
        {title}
      </h3>
      
      <p className="text-foreground/80 text-sm mb-4 text-balance">
        {excerpt}
      </p>
      
      <div className="flex items-center justify-between">
        <span className="text-sm text-muted-foreground">
          {date}
        </span>
        <span className="text-sm font-medium text-accent hover-link">
          Read More
        </span>
      </div>
    </Link>
  );
}
