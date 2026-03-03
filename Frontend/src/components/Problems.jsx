import Container from "../layout/Container";

const Problems = () => {
  const problemData = [
    {
      icon: "🚫",
      title: "No Brand Deals",
      description:
        "Struggling to connect with brands and secure profitable partnerships.",
      color: "bg-red-50 text-red-600 shadow-xl shadow-red-500/5 dark:bg-red-900/20 dark:text-red-400 dark:shadow-none",
      offset: "translate-y-6",
    },
    {
      icon: "⚠️",
      title: "Poor Content Strategy",
      description:
        "Inconsistent posting and unfocused content limits audience growth.",
      color: "bg-yellow-50 text-yellow-600 shadow-xl shadow-yellow-500/5 dark:bg-yellow-900/20 dark:text-yellow-400 dark:shadow-none",
      offset: "-translate-y-6",
    },
    {
      icon: "💸",
      title: "No Monetization System",
      description:
        "Followers without a funnel mean missed revenue opportunities.",
      color: "bg-green-50 text-green-600 shadow-xl shadow-green-500/5 dark:bg-green-900/20 dark:text-green-400 dark:shadow-none",
      offset: "translate-y-6",
    },
  ];

  return (
    <section
      id="problems"
      className="relative py-24 md:py-32 bg-gradient-to-b from-primary/5 to-secondary/5 dark:from-darkBg dark:to-darkBg transition-colors duration-300"
    >
      <Container>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-20 text-gray-900 dark:text-white tracking-tight">
          Common Challenges Lifestyle Influencers Face
        </h2>

        <div className="flex flex-col md:flex-row md:justify-center md:gap-12 max-w-6xl mx-auto">
          {problemData.map(({ icon, title, description, color, offset }, i) => (
            <div
              key={i}
              className={`flex flex-col items-center text-center rounded-3xl p-8 shadow-2xl hover:shadow-primary/20 hover:scale-105 transition-all duration-500 ${color} ${offset} md:max-w-xs mx-auto mb-8 md:mb-0 cursor-default border border-transparent dark:border-white/5 opacity-0 animate-fade-up`}
              style={{ animationDelay: `${i * 200}ms`, animationFillMode: 'forwards' }}
            >
              <div className="text-6xl mb-6 drop-shadow-lg">{icon}</div>
              <h3 className="text-2xl font-bold mb-3">{title}</h3>
              <p className="opacity-90 leading-relaxed font-medium">
                {description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Problems;