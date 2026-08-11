import { Card } from "@/components/ui/card";
import { Award, ShieldCheck, GraduationCap, Cpu, Activity } from "lucide-react";

const stats = [
  {
    icon: Award,
    value: "₹1,27,000",
    label: "Research Grant",
    sublabel: "Quantum-Safe PKE Project",
    color: "text-chart-2",
  },
  {
    icon: ShieldCheck,
    value: "GATE CS & DA",
    label: "Qualified 1st Attempt",
    sublabel: "3rd Year Undergraduate",
    color: "text-primary",
  },
  {
    icon: GraduationCap,
    value: "8.71 / 10.0",
    label: "B.Tech CGPA",
    sublabel: "Computer Engineering, PDEU",
    color: "text-chart-3",
  },
  {
    icon: Cpu,
    value: "0.943 ROC-AUC",
    label: "Traffic ML Model",
    sublabel: "CARLA Simulator & PySpark",
    color: "text-chart-4",
  },
  {
    icon: Activity,
    value: "15 Cities",
    label: "PulseCity Live Engine",
    sublabel: "707 Data Snapshots / 31 Days",
    color: "text-chart-5",
  },
];

export default function HeroStatsBar() {
  return (
    <section className="relative z-20 -mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <Card
              key={idx}
              className="p-5 bg-card/90 backdrop-blur-md border border-border/80 hover:border-primary/50 transition-all duration-300 hover-elevate group"
              data-testid={`stat-card-${idx}`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className={`p-2 rounded-lg bg-background/80 ${stat.color} border border-border/40 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-xl font-bold font-mono tracking-tight group-hover:text-primary transition-colors">
                  {stat.value}
                </span>
              </div>
              <p className="text-xs font-semibold text-foreground/90">{stat.label}</p>
              <p className="text-[11px] text-muted-foreground mt-0.5">{stat.sublabel}</p>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
