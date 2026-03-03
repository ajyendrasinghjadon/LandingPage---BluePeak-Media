// src/components/Testimonials.jsx
import React from "react";
import Container from "../layout/Container";

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Lifestyle Influencer",
    feedback:
      "BluePeak Media completely transformed my content strategy. My engagement and brand deals skyrocketed within weeks!",
    avatar: "https://i.pravatar.cc/100?img=1",
  },
  {
    name: "Sophie Lee",
    role: "Content Creator",
    feedback:
      "I love their growth funnels and branding guidance. I finally feel like my content works for me, not the other way around.",
    avatar: "https://i.pravatar.cc/100?img=2",
  },
  {
    name: "Jordan Kim",
    role: "Micro-Influencer",
    feedback:
      "Affordable, fun, and professional. The team helped me attract sponsors I never thought I could!",
    avatar: "https://i.pravatar.cc/100?img=3",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-white dark:bg-darkBg transition-colors duration-300">
      <Container>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-20 text-gray-900 dark:text-white tracking-tight">
          What Our Clients Say
        </h2>
        <div className="grid gap-10 md:grid-cols-3">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800/50 rounded-3xl shadow-xl shadow-primary/5 p-8 flex flex-col items-center hover:scale-105 transition-all duration-300 border border-transparent dark:border-gray-700/30"
            >
              <img
                src={t.avatar}
                alt={t.name}
                className="w-20 h-20 rounded-full mb-4 border-2 border-primary"
              />
              <p className="text-gray-700 dark:text-gray-300 text-center mb-4">
                “{t.feedback}”
              </p>
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                {t.name}
              </h3>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {t.role}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;