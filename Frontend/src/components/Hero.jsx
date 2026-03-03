import Container from "../layout/Container";
import heroIllustration from "../assets/hero-illustration.png";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-white dark:bg-darkBg transition-colors duration-300"
    >
      {/* Background Blobs */}
      <div className="absolute top-20 -left-16 sm:-left-10 w-56 sm:w-72 h-56 sm:h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 -right-16 sm:-right-10 w-72 sm:w-96 h-72 sm:h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

      <Container>
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-8">
          {/* Left Content */}
          <div className="flex-1 text-left z-10 animate-fade-up">
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight mb-6">
              Grow Your <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-secondary">
                Influence.
              </span>
              <br />
              Monetize Your <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary via-accent to-primary">
                Passion.
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-lg leading-relaxed">
              We help Gen-Z lifestyle creators build premium brands, attract high-ticket deals, and turn content into a sustainable empire.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button
                className="w-full sm:w-auto bg-gradient-to-r from-primary to-secondary text-white px-10 py-4 rounded-full text-lg font-bold shadow-xl shadow-primary/25 hover:shadow-primary/40 hover:scale-105 active:scale-95 transition-all duration-300"
                aria-label="Book a Discovery Call"
              >
                Book a Discovery Call
              </button>
              <a
                href="#services"
                className="w-full sm:w-auto px-10 py-4 rounded-full text-lg font-bold text-gray-700 dark:text-gray-200 border-2 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 text-center"
              >
                Learn More
              </a>
            </div>

            {/* Floating Stats */}
            <div className="mt-12 flex items-center gap-6 opacity-60">
              <div className="flex flex-col">
                <span className="text-2xl font-bold dark:text-white">50M+</span>
                <span className="text-xs uppercase tracking-widest text-gray-500">Reach</span>
              </div>
              <div className="h-8 w-px bg-gray-300 dark:bg-gray-700" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold dark:text-white">500+</span>
                <span className="text-xs uppercase tracking-widest text-gray-500">Creators</span>
              </div>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="flex-1 relative z-0 w-full max-w-md sm:max-w-full">
            <div className="relative animate-float">
              <img
                src={heroIllustration}
                alt="Social Media Agency Illustration"
                className="w-full h-auto drop-shadow-2xl rounded-3xl"
              />

              {/* Floating decorative elements */}
              <div className="absolute -top-6 sm:-top-10 -right-6 sm:-right-10 w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br from-primary to-accent rounded-2xl rotate-12 animate-pulse flex items-center justify-center shadow-lg">
                <span className="text-3xl">🚀</span>
              </div>
              <div className="absolute -bottom-6 sm:-bottom-10 -left-6 sm:-left-10 w-20 sm:w-24 h-20 sm:h-24 bg-white/10 backdrop-blur-md rounded-full border border-white/20 animate-bounce flex items-center justify-center shadow-xl" style={{ animationDuration: '3s' }}>
                <span className="text-3xl">💰</span>
              </div>
            </div>

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] sm:w-[150%] h-[120%] sm:h-[150%] bg-primary/20 rounded-full blur-[100px] -z-10" />
          </div>
        </div>
      </Container>

      {/* Inline Animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        .animate-fade-up {
          animation: fade-up 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
      `}} />
    </section>
  );
};

export default Hero;