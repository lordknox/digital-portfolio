import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import profileImage from "@assets/stock_images/professional_busines_40130e9a.jpg";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate about full-stack engineering, distributed systems, and hardware-accelerated security
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <Avatar className="w-64 h-64 border-4 border-primary/20">
              <AvatarImage src={profileImage} alt="Maalav Patadiya" />
              <AvatarFallback className="text-6xl">MP</AvatarFallback>
            </Avatar>
          </div>

          <div className="space-y-6">
            <Card className="p-6">
              <p className="text-lg leading-relaxed" data-testid="text-bio">
                I am a Computer Engineering student, software developer, and researcher who loves working across the entire technology stack. My passion lies at the intersection of scalable software architecture, intelligent systems, and cybersecurity. I view engineering as a balance of design and discipline: writing clean, production-ready code while digging deep into hardware-level security and computational theory. Always curious and adaptability-focused, I enjoy tackling open-ended problems that require both strategic thinking and hands-on execution
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Core Expertise</h3>
              <ul className="space-y-3" data-testid="list-expertise">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-mono">▸</span>
                  <span>Building full-stack mobile & web applications with Flutter, React.js, and Django REST Framework</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-mono">▸</span>
                  <span>Architecting backend microservices with Redis caching, Celery task queues, PostgreSQL, and Docker</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-mono">▸</span>
                  <span>Researching hardware realization of Quantum-Safe Public Key Encryption (PKE/KEM) on FPGA architecture</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-mono">▸</span>
                  <span>Engineering traffic & sensor analytics pipelines using CARLA Simulator, PySpark, and Machine Learning</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
