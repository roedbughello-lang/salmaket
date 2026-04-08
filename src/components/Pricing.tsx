import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { motion } from "motion/react";

const plans = [
  {
    name: "Starter",
    price: "$0",
    description: "Perfect for testing your ideas.",
    features: [
      "1 Sales Page",
      "Salmarket Subdomain",
      "Basic Analytics",
      "Community Support",
      "Standard Templates"
    ],
    cta: "Start Free",
    popular: false
  },
  {
    name: "Pro",
    price: "$29",
    description: "Everything you need to grow.",
    features: [
      "Unlimited Sales Pages",
      "Custom Domain",
      "Advanced Analytics",
      "Priority Email Support",
      "Premium AI Designs",
      "Custom Code Snippets",
      "No Transaction Fees"
    ],
    cta: "Start 14-Day Trial",
    popular: true
  },
  {
    name: "Business",
    price: "$79",
    description: "For established sales teams.",
    features: [
      "Everything in Pro",
      "Team Collaboration",
      "Dedicated Account Manager",
      "White-label Branding",
      "API Access",
      "Custom Integrations",
      "SLA Guarantee"
    ],
    cta: "Contact Sales",
    popular: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-white">
            Simple, Transparent Pricing
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Choose the plan that's right for your business. No hidden fees, 
            cancel anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`relative h-full flex flex-col border-2 ${plan.popular ? 'border-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.2)] scale-105 z-10' : 'border-white/10 shadow-md'} bg-white/5 backdrop-blur-md`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl font-display text-white">{plan.name}</CardTitle>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-white/60 text-sm">/month</span>
                  </div>
                  <p className="text-white/60 text-sm mt-2">{plan.description}</p>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-white/80">
                        <Check className="h-4 w-4 text-purple-400 mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    className={`w-full h-12 font-semibold ${plan.popular ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:opacity-90' : 'bg-white/10 text-white border-white/20 hover:bg-white/20'}`}
                    variant="ghost"
                  >
                    {plan.cta}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
