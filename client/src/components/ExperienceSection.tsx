import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Briefcase, GraduationCap, Award, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "Software Development Engineer (Intern)",
    company: "WeTheDevelopers",
    period: "Jun 2026 – Jul 2026",
    description: "Served as primary developer during a 6-week SDE internship focused on building real-time city intelligence platforms.",
    achievements: [
      "Built PulseCity, a real-time city intelligence dashboard, delivering live weather, AQI, and traffic metrics across 15 Indian cities",
      "Converted Figma design mockups and wireframes into responsive, production-ready Flutter UI components",
      "Linked individual UI screens and components into a cohesive navigation flow for end-to-end mobile app functionality",
    ],
  },
];

const education = [
  {
    degree: "Bachelor of Technology in Computer Engineering",
    institution: "Pandit Deendayal Energy University (PDEU), Gujarat",
    period: "2023 – 2027",
    achievements: [
      "CGPA: 8.71 / 10.0",
      "Coursework: Data Structures & Algorithms, OOP, DBMS, Operating Systems, Software Engineering, Compiler Design",
    ],
  },
  {
    degree: "12th Standard (GSEB)",
    institution: "Modi Higher Secondary School, Rajkot, Gujarat",
    period: "2021 – 2023",
    achievements: [
      "Percentage: 68.62%",
      "Science Stream with Mathematics & Physics focus",
    ],
  },
  {
    degree: "10th Standard (ICSE)",
    institution: "Saint Paul's School, Gujarat",
    period: "2019 – 2021",
    achievements: [
      "Percentage: 83.60%",
      "Indian Certificate of Secondary Education",
    ],
  },
];

const responsibilities = [
  {
    role: "Hospitality Head",
    organization: "Science & Technical Committee, PDEU",
    period: "2023 – 2026",
    description: "Progressed from Hospitality Associate to Subcommittee Member to Head over three years, managing hospitality and logistics for speakers, sponsors, and attendees across department events.",
  },
  {
    role: "Event Management Head",
    organization: "Computer Society of India (CSI), PDEU Student Chapter",
    period: "Jul 2025 – Jun 2026",
    description: "Led planning and execution of technical and non-technical events; coordinated with teams, sponsors, and participants to ensure smooth operations.",
  },
];

const achievements = [
  "Qualified GATE CS and GATE DA in first attempt (3rd year) — Mar 2026",
  "NPTEL: Understanding Incubation & Entrepreneurship, IIT Bombay — Oct 2025",
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience & Background</h2>
          <p className="text-muted-foreground text-lg">
            A journey of engineering excellence, academic rigor, and leadership
          </p>
        </div>

        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
              <Briefcase className="w-6 h-6 text-primary" />
              Work Experience
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
            <div className="grid md:grid-cols-3 gap-6 mb-8">
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
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
              <Users className="w-6 h-6 text-primary" />
              Positions of Responsibility
            </h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {responsibilities.map((resp, index) => (
                <Card key={index} data-testid={`responsibility-${index}`}>
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <CardTitle className="text-lg">{resp.role}</CardTitle>
                        <CardDescription>{resp.organization}</CardDescription>
                      </div>
                      <Badge variant="outline">{resp.period}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{resp.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary" />
                  Certifications & Key Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {achievements.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm" data-testid={`achievement-${index}`}>
                      <span className="text-primary font-mono">▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
