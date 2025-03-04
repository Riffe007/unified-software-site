import Link from "next/link";
import { Code, BrainCircuit, Shield, Eye } from "lucide-react";

const expertiseAreas = [
  { title: "Computer Vision", description: "AI-powered image & video analysis.", icon: Eye, href: "/expertise/computer-vision" },
  { title: "Natural Language Processing", description: "Advanced language models & chatbots.", icon: BrainCircuit, href: "/expertise/nlp" },
  { title: "Reinforcement Learning", description: "AI-driven decision-making & automation.", icon: Code, href: "/expertise/rl" },
  { title: "Cybersecurity AI", description: "AI-powered threat detection & defense.", icon: Shield, href: "/expertise/security" },
  { title: "Energy Sector AI", description: "Optimizing smart grids & predictive maintenance.", icon: BrainCircuit, href: "/expertise/energy" },
];

export default function ExpertisePage() {
  return (
    <section className="py-16 text-center bg-gradient-to-r from-blue-900 to-black text-white">
      <h1 className="text-5xl font-extrabold">Our Expertise</h1>
      <p className="mt-4 text-lg opacity-80 max-w-2xl mx-auto">
        AI-driven solutions for real-world applications.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 px-6">
        {expertiseAreas.map((area, index) => (
          <Link key={index} href={area.href} className="block">
            <div className="p-6 rounded-xl bg-white/10 dark:bg-gray-800/40 backdrop-blur-lg shadow-lg transition-all duration-500 border border-gray-700 hover:scale-105">
              <area.icon className="w-12 h-12 mx-auto text-blue-400" />
              <h3 className="text-2xl font-semibold mt-4">{area.title}</h3>
              <p className="mt-2 text-gray-300">{area.description}</p>
              <span className="inline-block mt-4 text-blue-400 hover:underline">Learn More →</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
