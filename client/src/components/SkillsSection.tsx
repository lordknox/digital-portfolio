import { Badge } from "@/components/ui/badge";
import { Code, TrendingUp, Shield, Cpu, BarChart3, Wallet } from "lucide-react";

const technicalSkills = [
  { name: "Solidity", icon: Code },
  { name: "Web3.js", icon: Cpu },
  { name: "Smart Contracts", icon: Shield },
  { name: "Ethereum", icon: Wallet },
  { name: "React", icon: Code },
  { name: "Node.js", icon: Cpu },
  { name: "TypeScript", icon: Code },
  { name: "Python", icon: Code },
  { name: "Hardhat", icon: Shield },
  { name: "Truffle", icon: Shield },
];

const financeSkills = [
  { name: "DeFi Protocols", icon: TrendingUp },
  { name: "Portfolio Management", icon: BarChart3 },
  { name: "Risk Analysis", icon: Shield },
  { name: "Algorithmic Trading", icon: TrendingUp },
  { name: "Market Research", icon: BarChart3 },
  { name: "Tokenomics", icon: Wallet },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-muted-foreground text-lg">
            A comprehensive blend of technical and financial capabilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Code className="w-6 h-6 text-primary" />
              Technical Skills
            </h3>
            <div className="flex flex-wrap gap-3" data-testid="skills-technical">
              {technicalSkills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <Badge
                    key={skill.name}
                    variant="secondary"
                    className="px-4 py-2 text-sm flex items-center gap-2"
                    data-testid={`skill-${skill.name.toLowerCase().replace(/\./g, '').replace(/ /g, '-')}`}
                  >
                    <Icon className="w-4 h-4" />
                    {skill.name}
                  </Badge>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-primary" />
              Finance Skills
            </h3>
            <div className="flex flex-wrap gap-3" data-testid="skills-finance">
              {financeSkills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <Badge
                    key={skill.name}
                    variant="secondary"
                    className="px-4 py-2 text-sm flex items-center gap-2"
                    data-testid={`skill-${skill.name.toLowerCase().replace(/ /g, '-')}`}
                  >
                    <Icon className="w-4 h-4" />
                    {skill.name}
                  </Badge>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
