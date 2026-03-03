// src/components/Services.jsx
import Container from "../layout/Container";
import { useTheme } from "../context/ThemeContext";
import servicesLight from '../assets/services-light.png';
import servicesDark from '../assets/services-dark.png';

const Services = () => {
  const { isDarkMode } = useTheme();

  const servicesData = [
    {
      icon: "🎯",
      title: "Growth Strategy",
      description: "Tailored plans to expand your audience and engagement effectively.",
      gradient: "from-blue-500/10 to-transparent"
    },
    {
      icon: "📈",
      title: "Sales Funnels",
      description: "Custom landing pages and email captures to turn followers into customers.",
      gradient: "from-purple-500/10 to-transparent"
    },
    {
      icon: "🤝",
      title: "Brand Positioning",
      description: "Crafting your unique voice to attract premium collaborations.",
      gradient: "from-indigo-500/10 to-transparent"
    }
  ];

  return (
    <section
      id="services"
      className="py-24 md:py-32 bg-white dark:bg-darkBg transition-colors duration-300 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent -z-10" />

      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Side: Text and Cards */}
          <div className="flex-1 lg:order-1 order-none">
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 text-gray-900 dark:text-white tracking-tight">
                Our Premium <span className="text-primary italic">Services</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl">
                We provide end-to-end solutions for creators ready to turn their passion into a high-revenue business.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {servicesData.map((service, index) => (
                <div
                  key={index}
                  className={`relative p-8 rounded-3xl bg-white dark:bg-gray-800/40 border border-gray-100 dark:border-gray-700/50 shadow-xl shadow-primary/5 dark:shadow-none hover:scale-105 transition-all duration-300 overflow-hidden group`}
                >
                  {/* Hover gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity`}
                  />

                  {/* Icon - only rotates on large screens */}
                  <div className="relative z-10 text-4xl mb-4 transform lg:group-hover:rotate-12 transition-transform">
                    {service.icon}
                  </div>

                  <h3 className="relative z-10 text-xl font-bold mb-3 text-gray-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="relative z-10 text-gray-600 dark:text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Illustration */}
          <div className="flex-1 lg:order-2 order-none animate-fade-up">
            <div className="relative">
              <img
                src={isDarkMode ? servicesDark : servicesLight}
                alt="BluePeak Media Services Illustration"
                className="w-full h-auto drop-shadow-3xl rounded-3xl"
              />
              {/* Optional glowing effect for dark mode */}
              {isDarkMode && (
                <div className="absolute inset-0 bg-primary/20 blur-[120px] -z-10 rounded-full scale-75" />
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Services;