export function HeroBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="hero-blob-a absolute -top-32 -left-24 h-96 w-96 rounded-full bg-primary/25 blur-3xl" />
      <div className="hero-blob-b absolute -top-16 right-0 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
      <div className="hero-blob-c absolute top-40 left-1/3 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)",
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
        }}
      />
    </div>
  );
}
