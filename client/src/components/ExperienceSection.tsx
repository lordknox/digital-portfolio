import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Briefcase, GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "Senior Blockchain Developer",
    company: "CryptoFinance Labs",
    period: "2032 - Present",
    description: "Leading development of DeFi protocols and smart contract architecture for institutional clients.",
    achievements: [
      "Architected yield aggregation protocol managing $50M+ TVL",
      "Reduced gas costs by 40% through contract optimization",
      "Led team of 5 developers in building cross-chain bridge",
    ],
  },
  {
    title: "Financial Analyst & Blockchain Consultant",
    company: "BlockTrade Solutions",
    period: "2030 - 2032",
    description: "Analyzed market trends and developed trading strategies for cryptocurrency portfolios.",
    achievements: [
      "Developed algorithmic trading bot with 85% win rate",
      "Conducted due diligence for 15+ ICO/IEO projects",
      "Created risk assessment framework for DeFi investments",
    ],
  },
  {
    title: "Junior Developer",
    company: "TechStart Innovations",
    period: "2029 - 2030",
    description: "Built web applications and explored blockchain integration for financial services.",
    achievements: [
      "Implemented Web3 wallet integration for payment system",
      "Developed RESTful APIs for crypto price aggregation",
      "Contributed to open-source DeFi projects",
    ],
  },
];

const education = [
  {
    degree: "Master of Technology in Blockchain",
    institution: "Indian Institute of Technology Bombay",
    period: "2027 - 2029",
    achievements: [
      "Thesis: Decentralized Finance and Smart Contract Security",
      "GPA: 9.16/10.0",
    ],
  },
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "Pandit Deendayal Energy University",
    period: "2023 - 2027",
    achievements: [
      "Minor in Economics",
      "Dean's List all semesters",
    ],
  },
];

const certifications = [
  "Certified Blockchain Developer (CBD)",
  "Ethereum Developer Certification",
  "CFA Level II Candidate",
  "AWS Certified Solutions Architect",
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience & Education</h2>
          <p className="text-muted-foreground text-lg">
            A journey of continuous learning and innovation
          </p>
        </div>

        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
              <Briefcase className="w-6 h-6 text-primary" />
              Professional Experience
            </h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="relative" data-testid={`experience-${index}`}>
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-chart-2" />
                  <CardHeader>
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl">{exp.title}</CardTitle>
                        <CardDescription className="text-base mt-1">
                          {exp.company}
                        </CardDescription>
                      </div>
                      <Badge variant="outline">{exp.period}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{exp.description}</p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-primary font-mono mt-1">▸</span>
                          <span className="text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-primary" />
              Education
            </h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {education.map((edu, index) => (
                <Card key={index} data-testid={`education-${index}`}>
                  <CardHeader>
                    <CardTitle className="text-lg">{edu.degree}</CardTitle>
                    <CardDescription>{edu.institution}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Badge variant="outline">{edu.period}</Badge>
                    <ul className="space-y-1 mt-4">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <span className="text-primary font-mono">▸</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Certifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {certifications.map((cert, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      data-testid={`cert-${index}`}
                    >
                      {cert}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
