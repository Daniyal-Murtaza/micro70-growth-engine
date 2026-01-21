import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Sparkles, Zap } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen overflow-hidden pt-16">
      {/* Background effects */}
      <div className="hero-glow absolute inset-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_hsl(var(--background))_70%)]" />
      
      {/* Floating elements */}
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[10%] top-[20%] hidden h-20 w-20 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm md:flex items-center justify-center"
      >
        <Code2 className="h-8 w-8 text-primary" />
      </motion.div>
      
      <motion.div
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute left-[15%] top-[35%] hidden h-16 w-16 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm md:flex items-center justify-center"
      >
        <Sparkles className="h-6 w-6 text-primary" />
      </motion.div>
      
      <motion.div
        animate={{ y: [-8, 8, -8] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute right-[20%] bottom-[25%] hidden h-14 w-14 rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm md:flex items-center justify-center"
      >
        <Zap className="h-5 w-5 text-primary" />
      </motion.div>

      <div className="container relative mx-auto flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 text-center md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-sm text-muted-foreground">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
            IT Solutions for Modern Business
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6 max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl xl:text-7xl"
        >
          We Build Digital Solutions
          <br />
          <span className="text-gradient">That Drive Growth</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-10 max-w-2xl text-lg text-muted-foreground md:text-xl"
        >
          From stunning websites to intelligent automation, Micro70 delivers
          cutting-edge IT solutions that transform how your business operates.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col gap-4 sm:flex-row"
        >
          <Button onClick={scrollToContact} variant="hero" size="xl">
            Contact Us
            <ArrowRight className="ml-1 h-5 w-5" />
          </Button>
          <Button
            onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            variant="heroOutline"
            size="xl"
          >
            Explore Services
          </Button>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
            Fast Delivery
          </div>
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
            Scalable Solutions
          </div>
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
            24/7 Support
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
