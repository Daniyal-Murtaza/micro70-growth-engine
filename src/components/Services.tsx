import { motion } from "framer-motion";
import { Code, Bot, Layers } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Website Design & Development",
    description:
      "Custom, responsive websites built with modern technologies. From landing pages to complex web applications, we create digital experiences that convert visitors into customers.",
    features: ["Custom Design", "Mobile-First", "SEO Optimized", "Fast Performance"],
  },
  {
    icon: Bot,
    title: "AI & Python Automation",
    description:
      "Harness the power of artificial intelligence and automation to streamline operations, reduce costs, and unlock new possibilities for your business.",
    features: ["Process Automation", "Data Analysis", "Custom AI Models", "Integration APIs"],
  },
  {
    icon: Layers,
    title: "Content Management Systems",
    description:
      "Powerful, user-friendly CMS solutions that give you complete control over your content. Easy to update, secure, and scalable for future growth.",
    features: ["Easy Updates", "User Management", "Custom Workflows", "Secure & Reliable"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

const Services = () => {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-widest text-primary">
            Our Services
          </span>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
            Solutions Built for{" "}
            <span className="text-gradient">Your Success</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            We specialize in delivering comprehensive IT solutions tailored to
            your unique business needs.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="group relative rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/50 card-glow"
            >
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-primary">
                <service.icon className="h-7 w-7 text-primary-foreground" />
              </div>

              <h3 className="mb-3 text-xl font-semibold text-foreground">
                {service.title}
              </h3>

              <p className="mb-6 text-muted-foreground">{service.description}</p>

              <div className="flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Hover gradient overlay */}
              <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
