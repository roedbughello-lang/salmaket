import { ShoppingBag, Twitter, Github, Linkedin, Mail } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1 space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-white p-1.5 rounded-lg">
                <ShoppingBag className="h-5 w-5 text-black" />
              </div>
              <span className="text-lg font-display font-bold tracking-tight text-white">Salmarket</span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              The AI-powered sales engine that helps you build high-converting 
              marketplaces and landing pages in seconds.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-white/40 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/40 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/40 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold mb-4 text-white">Product</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Templates</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Integrations</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Changelog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold mb-4 text-white">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Community</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Affiliate</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold mb-4 text-white">Newsletter</h4>
            <p className="text-sm text-white/60 mb-4">
              Get the latest updates and sales tips delivered to your inbox.
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex h-10 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
              />
              <button className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-white text-black hover:bg-white/90 h-10 px-4 py-2">
                Join
              </button>
            </div>
          </div>
        </div>

        <Separator className="bg-white/10" />
        
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40">
            © 2026 Salmarket Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-white/40 hover:text-white">Privacy Policy</a>
            <a href="#" className="text-xs text-white/40 hover:text-white">Terms of Service</a>
            <a href="#" className="text-xs text-white/40 hover:text-white">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
