import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { NeonButton } from "@/components/ui/neon-button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-8 max-w-md mx-auto px-grid-gutter">
        
        {/* Giant 404 */}
        <div className="text-[8rem] font-anton text-primary/20 leading-none">
          404
        </div>
        
        {/* Content */}
        <div className="space-y-4">
          <h1 className="text-2xl font-anton text-foreground">
            Page Not Found
          </h1>
          <p className="text-muted-foreground">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        {/* CTA */}
        <NeonButton asChild>
          <a href="/">
            Return to Home
          </a>
        </NeonButton>
      </div>
    </div>
  );
};

export default NotFound;
