import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { ArrowRight, Sparkles, Rocket, Target } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-32 overflow-hidden min-h-[85vh] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/70 via-black/60 to-indigo-900/70 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?auto=format&fit=crop&q=80&w=1920" 
          alt="Cosmic Background" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold mb-6">
            <Sparkles className="h-3.5 w-3.5" />
            <span>AI-Powered Sales Engine</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
            Build High-Converting <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
              Sales Markets in Seconds
            </span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/80 mb-10 leading-relaxed">
            Stop struggling with complex builders. Salmarket uses AI to generate stunning, 
            high-performance sales pages and marketplaces tailored to your brand.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="h-14 px-8 text-base font-semibold gap-2 group bg-white text-black hover:bg-white/90">
              Start Building Free
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-base font-semibold text-white border-white/30 hover:bg-white/10">
              View Live Demo
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto pt-8 border-t">
            <div className="flex flex-col items-center gap-1">
              <span className="text-2xl font-bold">10k+</span>
              <span className="text-sm text-muted-foreground">Active Stores</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-2xl font-bold">$50M+</span>
              <span className="text-sm text-muted-foreground">Sales Generated</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-2xl font-bold">99.9%</span>
              <span className="text-sm text-muted-foreground">Uptime</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-2xl font-bold">24/7</span>
              <span className="text-sm text-muted-foreground">Support</span>
            </div>
          </div>
        </motion.div>

        {/* Hero Image/Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-20 relative mx-auto max-w-5xl"
        >
          <div className="rounded-2xl border bg-card shadow-2xl overflow-hidden aspect-[16/9] relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-indigo-500/5" />
            <div className="p-4 border-b bg-muted/30 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="mx-auto bg-background border rounded-md px-3 py-1 text-[10px] text-muted-foreground w-64 text-center">
                salmarket.com/my-awesome-store
              </div>
            </div>
            <div className="p-8 grid grid-cols-12 gap-6 h-full">
              <div className="col-span-3 space-y-4">
                <div className="h-8 w-full bg-muted rounded animate-pulse" />
                <div className="h-32 w-full bg-muted rounded animate-pulse" />
                <div className="h-8 w-full bg-primary/20 rounded animate-pulse" />
              </div>
              <div className="col-span-9 space-y-6">
                <div className="h-12 w-3/4 bg-muted rounded animate-pulse" />
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-40 bg-muted rounded animate-pulse" />
                  <div className="h-40 bg-muted rounded animate-pulse" />
                  <div className="h-40 bg-muted rounded animate-pulse" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating elements */}
          <div className="absolute -top-6 -right-6 bg-background p-4 rounded-xl shadow-lg border animate-bounce duration-[3000ms]">
            <div className="flex items-center gap-3">
              <div className="bg-green-100 p-2 rounded-full">
                <Rocket className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <p className="text-xs font-bold">New Sale!</p>
                <p className="text-[10px] text-muted-foreground">+$149.00</p>
              </div>
            </div>
          </div>
          
          <div className="absolute -bottom-6 -left-6 bg-background p-4 rounded-xl shadow-lg border animate-bounce duration-[4000ms]">
            <div className="flex items-center gap-3">
              <div className="bg-blue-100 p-2 rounded-full">
                <Target className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="text-xs font-bold">Conversion Up</p>
                <p className="text-[10px] text-muted-foreground">+24% this week</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
