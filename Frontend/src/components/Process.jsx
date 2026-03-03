// src/components/Process.jsx
import React from "react";
import Container from "../layout/Container";
import { motion } from "framer-motion";

const stepsData = [
  {
    title: "Discovery Call",
    description: "We understand your goals, challenges, and audience."
  },
  {
    title: "Strategy Development",
    description: "Tailored growth and funnel plans designed for your brand."
  },
  {
    title: "Launch & Optimize",
    description: "Implement, monitor, and refine for maximum impact."
  }
];

// Step animation
const stepVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.4,
      type: "spring",
      stiffness: 80,
      damping: 20
    }
  })
};

// Line animation
const lineVariants = {
  hidden: { scaleX: 0, scaleY: 0 },
  visible: { scaleX: 1, scaleY: 1, transition: { duration: 0.8, ease: "easeInOut" } }
};

const Process = () => {
  return (
    <section
      id="process"
      className="py-24 md:py-32 bg-white dark:bg-darkBg transition-colors duration-500 relative overflow-hidden"
    >
      <Container>
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-20 text-gray-900 dark:text-white tracking-tight">
          How We Work
        </h2>

        {/* Horizontal layout lg+ */}
        <div className="hidden lg:flex items-center justify-between max-w-6xl mx-auto relative ">
          {stepsData.map((step, index) => (
            <React.Fragment key={index}>
              {/* Step */}
              <motion.div
                className="flex flex-col items-center text-center flex-1 relative p-8 rounded-3xl bg-gray-50/50 dark:bg-gray-800/20 border border-transparent dark:border-gray-700/30"
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={stepVariants}
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(79, 70, 229, 0.4)" }}
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-secondary text-white font-bold text-lg shadow-xl mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 max-w-xs">
                  {step.description}
                </p>
              </motion.div>

              {/* Line between steps */}
              {index < stepsData.length - 1 && (
                <motion.div
                  className="flex-1 h-1 bg-gradient-to-r from-primary to-secondary mx-6 rounded-full origin-left shadow-[0_0_15px_rgba(79,70,229,0.4)]"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={lineVariants}
                />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Vertical layout for mobile */}
        <div className="flex flex-col lg:hidden gap-12">
          {stepsData.map((step, index) => (
            <React.Fragment key={index}>
              {/* Step card */}
              <motion.div
                className="flex flex-col items-center text-center p-8 rounded-3xl bg-gray-50/50 dark:bg-gray-800/20 border border-transparent dark:border-gray-700/30"
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={stepVariants}
                whileHover={{ scale: 1.03, boxShadow: "0 0 25px rgba(79, 70, 229, 0.3)" }}
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-secondary text-white font-bold text-lg shadow-xl mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 max-w-xs">
                  {step.description}
                </p>
              </motion.div>

              {/* Line after the card, outside hover effect */}
              {index < stepsData.length - 1 && (
                <motion.div
                  className="w-1 h-24 bg-gradient-to-b from-primary to-secondary rounded-full mt-4 shadow-[0_0_15px_rgba(79,70,229,0.3)] mx-auto"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={lineVariants}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Process;