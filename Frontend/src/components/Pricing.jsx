import React from 'react';
import Container from "../layout/Container";

const Pricing = () => {
  const plans = [
    {
      name: "Starter Growth",
      price: "$300",
      features: [
        "Content strategy plan",
        "Bio & profile optimization",
        "Monthly growth audit",
        "Brand positioning guidance"
      ],
      popular: false
    },
    {
      name: "Growth + Funnel",
      price: "$450",
      features: [
        "Everything in Starter",
        "Custom landing page",
        "Email capture setup",
        "Monetization system",
        "Monthly strategy call"
      ],
      popular: true
    },
    {
      name: "Elite Creator",
      price: "$500",
      features: [
        "Everything in Growth",
        "Advanced funnel optimization",
        "Brand outreach guidance",
        "Priority support"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 md:py-32 bg-white dark:bg-darkBg transition-colors duration-300">
      <Container>
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-20 text-gray-900 dark:text-white tracking-tight">
          Simple, Transparent Pricing
        </h2>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-lightBg dark:bg-gray-800/50 p-8 rounded-3xl shadow-xl shadow-primary/5 hover:shadow-primary/10 hover:scale-105 transition-all duration-300 flex flex-col h-full ${plan.popular ? 'border-2 border-primary ring-4 ring-primary/10 scale-105 z-10' : ''
                }`}
            >
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-md">
                  Most Popular
                </span>
              )}

              {/* Plan Info */}
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {plan.name}
              </h3>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-bold text-gray-900 dark:text-white">{plan.price}</span>
                <span className="text-gray-500 dark:text-gray-400 ml-1">/month</span>
              </div>

              {/* Feature List */}
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button

                className="w-full bg-gradient-to-r from-primary to-secondary text-white px-6 py-4 rounded-full font-bold shadow-lg shadow-primary/20 hover:shadow-primary/30 active:scale-95 hover:scale-105 transition-all duration-300"
                aria-label={`Book a Discovery Call for ${plan.name}`}
              >
                Want more info? Contact Us
              </button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Pricing;
