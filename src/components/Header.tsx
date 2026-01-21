import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Header = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl"
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <a href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-primary">
            <span className="text-lg font-bold text-primary-foreground">M</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground">
            Micro<span className="text-primary">70</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          <button
            onClick={scrollToServices}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Services
          </button>
          <button
            onClick={scrollToContact}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Contact
          </button>
        </nav>

        <Button onClick={scrollToContact} variant="hero" size="sm">
          Get in Touch
        </Button>
      </div>
    </motion.header>
  );
};

export default Header;
