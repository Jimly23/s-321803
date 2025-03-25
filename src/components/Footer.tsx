
import { cn } from "@/lib/utils";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full py-8 md:py-12 border-t border-border/50 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-lg font-display font-medium text-foreground">John Doe</h3>
            <p className="text-sm text-muted-foreground mt-1">Designer & Developer</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-6 mb-4">
              <SocialLink href="https://twitter.com" label="Twitter" />
              <SocialLink href="https://github.com" label="GitHub" />
              <SocialLink href="https://linkedin.com" label="LinkedIn" />
              <SocialLink href="https://dribbble.com" label="Dribbble" />
            </div>
            <p className="text-sm text-muted-foreground">
              © {currentYear} John Doe. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

type SocialLinkProps = {
  href: string;
  label: string;
};

function SocialLink({ href, label }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "text-foreground/70 hover:text-accent transition-all duration-300",
        "hover:scale-110 transform"
      )}
      aria-label={label}
    >
      {label}
    </a>
  );
}
