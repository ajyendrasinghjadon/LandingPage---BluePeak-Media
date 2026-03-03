import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("STEP 1");
    console.log("API URL:", import.meta.env.VITE_API_URL);

    setStatus({ type: "loading", message: "Sending your message..." });

    try {
      // Integration point for backend
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/send-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus({ type: "success", message: "Message sent! We'll be in touch soon." });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({ type: "error", message: "Failed to send message. Please try again." });
      }
    } catch (error) {
      setStatus({ type: "error", message: "An error occurred. Check your connection." });
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-white dark:bg-darkBg transition-colors duration-300 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative">
        {/* Background Decorative Element */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-10" />

        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-gray-900 dark:text-white tracking-tight">
            Let's Talk Strategy
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Ready to scale your influence? Fill out the form below and our team will get back to you within 24 hours.
          </p>
        </div>

        <div className="bg-lightBg dark:bg-gray-800/50 rounded-3xl shadow-xl shadow-primary/5 p-8 md:p-12 backdrop-blur-sm border border-gray-100 dark:border-gray-700/50">
          <form onSubmit={handleSubmit} className="grid gap-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Name Input */}
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder=" "
                  className="peer w-full px-4 pt-6 pb-3 bg-white dark:bg-darkBg rounded-xl border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
                <label
                  htmlFor="name"
                  className="absolute left-4 top-3 text-gray-500 dark:text-gray-400 text-sm transition-all
    peer-placeholder-shown:top-4
    peer-placeholder-shown:text-base
    peer-focus:top-3
    peer-focus:text-xs
    peer-focus:text-primary
    peer-[&:not(:placeholder-shown)]:top-3
    peer-[&:not(:placeholder-shown)]:text-xs"
                >
                  Your Name
                </label>
              </div>

              {/* Email Input */}
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder=" "
                  className="peer w-full px-4 pt-6 pb-3 bg-white dark:bg-darkBg rounded-xl border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
                <label
                  htmlFor="email"
                  className="absolute left-4 top-3 text-gray-500 dark:text-gray-400 text-sm transition-all
    peer-placeholder-shown:top-4
    peer-placeholder-shown:text-base
    peer-focus:top-3
    peer-focus:text-xs
    peer-focus:text-primary
    peer-[&:not(:placeholder-shown)]:top-3
    peer-[&:not(:placeholder-shown)]:text-xs"
                >
                  Email Address
                </label>
              </div>
            </div>

            {/* Message Input */}
            <div className="relative">
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder=" "
                className="peer w-full px-4 pt-6 pb-3 bg-white dark:bg-darkBg rounded-xl border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
              />
              <label
                htmlFor="message"
                className="absolute left-4 top-3 text-gray-500 dark:text-gray-400 text-sm transition-all
    peer-placeholder-shown:top-4
    peer-placeholder-shown:text-base
    peer-focus:top-3
    peer-focus:text-xs
    peer-focus:text-primary
    peer-[&:not(:placeholder-shown)]:top-3
    peer-[&:not(:placeholder-shown)]:text-xs"
              >
                Tell us about your goals...
              </label>
            </div>

            <button
              type="submit"
              disabled={status.type === "loading"}
              className="w-full py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-70 disabled:cursor-not-allowed group flex items-center justify-center gap-2"
            >
              {status.type === "loading" ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : null}
              {status.type === "loading" ? "Sending..." : "Propel Your Brand Forward"}
            </button>

            {status.message && (
              <div className={`text-center p-4 rounded-xl text-sm font-medium transition-all ${status.type === "success" ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" :
                status.type === "error" ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400" :
                  "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                }`}>
                {status.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;