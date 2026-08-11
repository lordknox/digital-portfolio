import { Badge } from "@/components/ui/badge";
import { Server, Smartphone, Code2, Wrench, BookOpen } from "lucide-react";

const backendSkills = [
  "Python", "Django", "Django REST Framework", "Node.js", "PostgreSQL", "Docker"
];

const frontendSkills = [
  "Flutter", "Dart", "React.js", "TailwindCSS", "JavaScript"
];

const languages = [
  "C", "C++", "Python", "Dart", "JavaScript"
];

const tools = [
  "Git", "GitHub", "VS Code", "Docker Compose", "Tomcat", "Render", "Vercel"
];

const coursework = [
  "Data Structures & Algorithms", "OOP", "DBMS", "Operating Systems", "Software Engineering", "Compiler Design", "Quantum Cryptography"
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Technical Capabilities</h2>
          <p className="text-muted-foreground text-lg">
            Core technologies, programming languages, and engineering concepts
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 rounded-lg border border-border/60 bg-background/50">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Server className="w-5 h-5 text-primary" />
              Backend & Systems
            </h3>
            <div className="flex flex-wrap gap-2" data-testid="skills-backend">
              {backendSkills.map((skill) => (
                <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-lg border border-border/60 bg-background/50">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Smartphone className="w-5 h-5 text-primary" />
              Frontend & Mobile
            </h3>
            <div className="flex flex-wrap gap-2" data-testid="skills-frontend">
              {frontendSkills.map((skill) => (
                <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-lg border border-border/60 bg-background/50">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Code2 className="w-5 h-5 text-primary" />
              Languages
            </h3>
            <div className="flex flex-wrap gap-2" data-testid="skills-languages">
              {languages.map((lang) => (
                <Badge key={lang} variant="secondary" className="px-3 py-1 text-sm">
                  {lang}
                </Badge>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-lg border border-border/60 bg-background/50">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Wrench className="w-5 h-5 text-primary" />
              Tools & Platforms
            </h3>
            <div className="flex flex-wrap gap-2" data-testid="skills-tools">
              {tools.map((tool) => (
                <Badge key={tool} variant="secondary" className="px-3 py-1 text-sm">
                  {tool}
                </Badge>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-lg border border-border/60 bg-background/50 md:col-span-2 lg:col-span-2">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-primary" />
              Coursework & Foundations
            </h3>
            <div className="flex flex-wrap gap-2" data-testid="skills-coursework">
              {coursework.map((item) => (
                <Badge key={item} variant="outline" className="px-3 py-1 text-sm">
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
