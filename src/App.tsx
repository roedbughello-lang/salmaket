import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-primary/30 selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        
        {/* Testimonial Section */}
        <section className="py-24 border-y border-white/10 bg-white/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <div className="flex justify-center gap-1 mb-8">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className="h-5 w-5 text-purple-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-2xl md:text-3xl font-display font-medium text-white mb-8 leading-tight">
                "Salmarket completely changed how we launch new products. We went from 
                spending weeks on design to launching in under an hour. Our conversion 
                rates have never been higher."
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <img 
                  src="https://picsum.photos/seed/jamin/100/100" 
                  alt="Jamin Sironel" 
                  className="w-12 h-12 rounded-full border-2 border-purple-500"
                  referrerPolicy="no-referrer"
                />
                <div className="text-left">
                  <p className="font-bold text-white">Jamin Sironel</p>
                  <p className="text-sm text-white/60">CEO, Digital Ventures Group</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <Pricing />

        {/* Final CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-indigo-900 -z-10" />
          <div className="absolute top-0 left-0 w-full h-full opacity-20 -z-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tight">
                Ready to Supercharge Your Sales?
              </h2>
              <p className="text-xl opacity-90 max-w-2xl mx-auto mb-10">
                Join 10,000+ entrepreneurs who are scaling their businesses with 
                Salmarket's AI-powered platform.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" variant="secondary" className="h-14 px-8 text-base font-bold gap-2 group bg-white text-black hover:bg-white/90">
                  Get Started for Free
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <p className="text-sm opacity-80">No credit card required.</p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
