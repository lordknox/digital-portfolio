import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Sparkles, Sliders } from "lucide-react";
import ResearchSpotlightModal from "@/components/ResearchSpotlightModal";
import MLSimulationWidget from "@/components/MLSimulationWidget";
import project1 from "@assets/stock_images/financial_dashboard__a5a3a25c.jpg";
import project3 from "@assets/stock_images/smart_contract_block_a5bbc8c1.jpg";
import project4 from "@assets/stock_images/financial_dashboard__9e79754c.jpg";
import project6 from "@assets/stock_images/financial_dashboard__f558e635.jpg";

interface ProjectItem {
  id: string;
  title: string;
  category: "research" | "mobile" | "ml" | "web";
  period: string;
  meta: string;
  image: string;
  tags: string[];
  bullets: string[];
  link?: string;
  isResearchModal?: boolean;
}

const projects: ProjectItem[] = [
  {
    id: "pke-hardware",
    title: "Hardware Implementation of Quantum-Safe PKE System — Research Project",
    category: "research",
    period: "Apr 2026 – Apr 2027",
    meta: "Mentor: Dr. Utkarsh Tiwari | Team of 3",
    image: project3,
    tags: ["Cryptography", "Quantum Computing", "FPGA Architecture", "Cybersecurity"],
    bullets: [
      "Researching quantum-safe Public Key Encryption (PKE) constructions and their feasibility for hardware realization on FPGA architecture, including pipelining and parallel-processing strategies to minimize module latency",
      "Contributing to the team's key-generation module through literature review and theoretical analysis, with key encapsulation/decapsulation (KEM) modules planned next",
      "Selected under the university's Student Research Proposal track with a INR 1,27,000 institutional grant",
    ],
    isResearchModal: true,
  },
  {
    id: "pulsecity",
    title: "PulseCity — Real-time City Intelligence Dashboard",
    category: "mobile",
    period: "Jun 2026 – Jul 2026",
    meta: "Full-Stack SDE Internship Project",
    image: project1,
    tags: ["Flutter", "Dart", "Django REST Framework", "PostgreSQL", "Redis", "Celery", "Docker"],
    bullets: [
      "Built and shipped a full-stack mobile app delivering live weather, air quality, and traffic data for 15 Indian cities using Flutter and Django REST Framework",
      "Introduced a Redis caching layer across three third-party integrations (OpenWeatherMap, WAQI, TomTom) to help reduce API response latency and call volume",
      "Automated scheduled data ingestion via Celery, accumulating 707 weather, traffic, and air-quality snapshots across 15 cities in a PostgreSQL historical dataset over 31 days for trend analysis",
      "Built interactive fl_chart / flutter_map dashboards and containerized the full backend stack (Django, PostgreSQL, Redis, Celery) with Docker Compose for one-command local setup",
    ],
    link: "https://github.com/lordknox",
  },
  {
    id: "traffic-ml",
    title: "Traffic Pattern Analysis & Congestion Prediction — CARLA Simulator",
    category: "ml",
    period: "Feb 2026 – Apr 2026",
    meta: "Team of 2",
    image: project4,
    tags: ["CARLA Simulator", "PySpark", "Scikit-learn", "Streamlit", "Python"],
    bullets: [
      "Generated synthetic traffic datasets across 16 simulated conditions using CARLA and engineered 10+ features with PySpark",
      "Trained leakage-free Random Forest and XGBoost classifiers achieving 81% accuracy and 0.943 ROC-AUC",
    ],
    link: "https://github.com/lordknox/traffic-congestion-system",
  },
  {
    id: "icarus",
    title: "Icarus — Wind & Solar Energy Infrastructure Mapping Platform",
    category: "web",
    period: "Jan 2026 – Mar 2026",
    meta: "Live Demo",
    image: project6,
    tags: ["MERN Stack", "TailwindCSS", "PostgreSQL", "Leaflet.js", "Render", "Vercel"],
    bullets: [
      "Built a geospatial mapping platform with interactive site-placement simulations using leaflet.js to visualize renewable-energy infrastructure across 10–20 locations",
      "Designed REST APIs (Node.js/Express) and a PostgreSQL schema for site/project data, deployed on Vercel (frontend) and Render (backend)",
    ],
    link: "https://project-icarus-five.vercel.app",
  },
];

const categories = [
  { id: "all", label: "All Projects" },
  { id: "research", label: "Research & Hardware" },
  { id: "mobile", label: "Full-Stack & Mobile" },
  { id: "ml", label: "Machine Learning & AI" },
  { id: "web", label: "Geospatial & Web" },
];

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [isResearchModalOpen, setIsResearchModalOpen] = useState<boolean>(false);

  const filteredProjects = projects.filter(
    (p) => selectedCategory === "all" || p.category === selectedCategory
  );

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Research initiatives, full-stack mobile applications, and machine learning pipelines
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12" data-testid="project-category-filters">
          {categories.map((cat) => (
            <Button
              key={cat.id}
              variant={selectedCategory === cat.id ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(cat.id)}
              className="text-xs transition-all"
              data-testid={`filter-${cat.id}`}
            >
              {cat.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="hover-elevate overflow-hidden group border border-border/60 flex flex-col justify-between"
              data-testid={`project-card-${project.id}`}
            >
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-70" />
                </div>
                <CardHeader className="gap-2 pb-2">
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-xl leading-tight">{project.title}</CardTitle>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded hover:bg-accent transition-colors shrink-0"
                        title="View Link"
                      >
                        <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </a>
                    )}
                  </div>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-muted-foreground">
                    <Badge variant="outline" className="text-xs font-mono border-primary/30 text-primary">
                      {project.period}
                    </Badge>
                    <span>•</span>
                    <span>{project.meta}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 pt-2">
                  <ul className="space-y-2">
                    {project.bullets.map((bullet, bIndex) => (
                      <li key={bIndex} className="flex items-start gap-2 text-sm text-muted-foreground leading-normal">
                        <span className="text-primary font-mono shrink-0 mt-0.5">▸</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {project.isResearchModal && (
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => setIsResearchModalOpen(true)}
                      className="w-full mt-3 text-xs bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30"
                    >
                      <Sparkles className="w-3.5 h-3.5 mr-2" />
                      Inspect Quantum Hardware Pipeline Diagram
                    </Button>
                  )}
                </CardContent>
              </div>

              <CardContent className="pt-0 pb-6">
                <div className="flex flex-wrap gap-1.5 border-t border-border/40 pt-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Embedded ML Playground Simulation Widget */}
        <div className="mt-8">
          <div className="flex items-center gap-2 mb-4">
            <Sliders className="w-5 h-5 text-primary" />
            <h3 className="text-xl font-bold">Interactive Model Playground</h3>
          </div>
          <MLSimulationWidget />
        </div>
      </div>

      <ResearchSpotlightModal
        isOpen={isResearchModalOpen}
        onClose={() => setIsResearchModalOpen(false)}
      />
    </section>
  );
}
