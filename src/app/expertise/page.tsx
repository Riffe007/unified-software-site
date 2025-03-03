import Link from "next/link";
import ComingSoonCard from "@/components/ComingSoonCard";
import { Code, BrainCircuit, DollarSign, Shield, Eye } from "lucide-react";

const expertiseAreas = [
  { title: "Computer Vision", description: "AI-powered image & video analysis.", icon: Eye, href: "/expertise/computer-vision" },
  { title: "Natural Language Processing", description: "Advanced language models & chatbots.", icon: BrainCircuit, href: "/expertise/nlp" },
  { title: "Reinforcement Learning", description: "AI-driven decision-making & automation.", icon: Code, href: "/expertise/rl" },
  { title: "Financial Modeling", description: "Data-driven AI for finance & trading.", icon: DollarSign, href: "/expertise/financial" },
  { title: "Cybersecurity AI", description: "AI-powered threat detection & defense.", icon: Shield, href: "/expertise/security" },
];

export default function ExpertisePage() {
  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white">
        Our Expertise
      </h1>
      <p className="text-center text-gray-600 dark:text-gray-300 mt-2">
        AI-driven solutions for real-world applications.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {expertiseAreas.map((area) => (
          <Link key={area.title} href={area.href}>
            <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-6 text-center hover:shadow-lg transition">
              <area.icon className="w-12 h-12 mx-auto text-blue-500" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-4">{area.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{area.description}</p>
              <span className="inline-block mt-4 text-blue-500 hover:underline">Learn More →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
