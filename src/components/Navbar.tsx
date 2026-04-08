import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="bg-white p-1.5 rounded-lg">
              <ShoppingBag className="h-6 w-6 text-black" />
            </div>
            <span className="text-xl font-display font-bold tracking-tight text-white">Salmarket</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Features</a>
            <a href="#how-it-works" className="text-sm font-medium text-white/70 hover:text-white transition-colors">How it Works</a>
            <a href="#pricing" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Pricing</a>
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 hover:text-white">Log in</Button>
            <Button size="sm" className="bg-white text-black hover:bg-white/90">Get Started</Button>
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-background border-b px-4 pt-2 pb-6 space-y-4"
        >
          <a href="#features" className="block text-base font-medium text-muted-foreground" onClick={() => setIsOpen(false)}>Features</a>
          <a href="#how-it-works" className="block text-base font-medium text-muted-foreground" onClick={() => setIsOpen(false)}>How it Works</a>
          <a href="#pricing" className="block text-base font-medium text-muted-foreground" onClick={() => setIsOpen(false)}>Pricing</a>
          <div className="pt-4 flex flex-col gap-2">
            <Button variant="outline" className="w-full">Log in</Button>
            <Button className="w-full">Get Started</Button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
