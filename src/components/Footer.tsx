const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary">
              <span className="text-sm font-bold text-primary-foreground">M</span>
            </div>
            <span className="text-lg font-bold tracking-tight text-foreground">
              Micro<span className="text-primary">70</span>
            </span>
          </div>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Micro70. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
