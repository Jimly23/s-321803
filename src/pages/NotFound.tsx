
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="text-center max-w-md mx-auto">
        <h1 className="text-6xl md:text-7xl font-display font-bold mb-6 animate-fade-in">
          <span className="text-gradient">404</span>
        </h1>
        <p className="text-2xl font-display font-medium mb-8 animate-fade-in [animation-delay:100ms]">
          Page Not Found
        </p>
        <p className="text-foreground/70 mb-8 animate-fade-in [animation-delay:200ms]">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button asChild className="animate-fade-in [animation-delay:300ms]">
          <Link to="/">Return Home</Link>
        </Button>
      </div>
    </div>
  );
}
