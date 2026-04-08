import { motion } from "motion/react";
import { 
  Zap, 
  Layout, 
  Smartphone, 
  BarChart3, 
  ShieldCheck, 
  Globe,
  Palette,
  Code2
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "AI-Powered Design",
    description: "Our AI understands your brand and generates layouts that convert visitors into customers.",
    icon: Zap,
    color: "text-yellow-500",
    bg: "bg-yellow-500/10"
  },
  {
    title: "Drag & Drop Builder",
    description: "Customize every pixel with our intuitive visual editor. No coding knowledge required.",
    icon: Layout,
    color: "text-blue-500",
    bg: "bg-blue-500/10"
  },
  {
    title: "Mobile Optimized",
    description: "Your store looks perfect on every device. Fully responsive out of the box.",
    icon: Smartphone,
    color: "text-purple-500",
    bg: "bg-purple-500/10"
  },
  {
    title: "Advanced Analytics",
    description: "Track every click, view, and sale with deep insights into your customer behavior.",
    icon: BarChart3,
    color: "text-green-500",
    bg: "bg-green-500/10"
  },
  {
    title: "Secure Payments",
    description: "Integrated with Stripe, PayPal, and more. SSL security for every transaction.",
    icon: ShieldCheck,
    color: "text-red-500",
    bg: "bg-red-500/10"
  },
  {
    title: "Custom Domains",
    description: "Connect your own domain or use our high-speed subdomains for free.",
    icon: Globe,
    color: "text-indigo-500",
    bg: "bg-indigo-500/10"
  },
  {
    title: "Brand Customization",
    description: "Full control over colors, fonts, and styles to match your unique brand identity.",
    icon: Palette,
    color: "text-pink-500",
    bg: "bg-pink-500/10"
  },
  {
    title: "Custom Code",
    description: "Need more? Add custom CSS, JS, or HTML snippets to extend functionality.",
    icon: Code2,
    color: "text-cyan-500",
    bg: "bg-cyan-500/10"
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-white">
            Everything You Need to Sell Online
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Salmarket provides a comprehensive suite of tools designed to help you 
            launch, manage, and scale your online sales presence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-white/5 shadow-sm hover:shadow-md transition-shadow bg-white/5 backdrop-blur-sm">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg ${feature.bg} flex items-center justify-center mb-4`}>
                    <feature.icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-xl font-display text-white">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
