import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Describe Your Vision",
    description: "Tell our AI about your product, brand, and target audience. No technical details needed.",
    image: "https://picsum.photos/seed/vision/800/600"
  },
  {
    number: "02",
    title: "AI Generates Your Site",
    description: "Watch as Salmarket builds a complete, high-converting sales page in under 60 seconds.",
    image: "https://picsum.photos/seed/ai/800/600"
  },
  {
    number: "03",
    title: "Refine & Personalize",
    description: "Use our visual editor to tweak content, swap images, and perfect your brand's look.",
    image: "https://picsum.photos/seed/refine/800/600"
  },
  {
    number: "04",
    title: "Launch & Scale",
    description: "Connect your domain, set up payments, and start selling to the world immediately.",
    image: "https://picsum.photos/seed/launch/800/600"
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 overflow-hidden bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-white">
            From Idea to Launch in Minutes
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Our streamlined process removes the friction from online selling, 
            letting you focus on what matters most: your business.
          </p>
        </div>

        <div className="space-y-24">
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-24`}
            >
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex-1 space-y-6"
              >
                <span className="text-6xl font-display font-black text-primary/10 leading-none">
                  {step.number}
                </span>
                <h3 className="text-3xl font-display font-bold text-white">{step.title}</h3>
                <p className="text-lg text-white/70 leading-relaxed">
                  {step.description}
                </p>
                <ul className="space-y-3">
                  {["Fast & Intuitive", "No Coding Required", "Professional Results"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm font-medium text-white/80">
                      <CheckCircle2 className="h-4 w-4 text-purple-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex-1 w-full"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border aspect-video">
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="object-cover w-full h-full"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
