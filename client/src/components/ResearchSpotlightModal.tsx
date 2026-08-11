import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Cpu, Key, Award, CheckCircle2, ArrowRight } from "lucide-react";

interface ResearchSpotlightModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResearchSpotlightModal({ isOpen, onClose }: ResearchSpotlightModalProps) {
  const [activeStage, setActiveStage] = useState<number>(0);

  const stages = [
    {
      title: "1. Key-Generation Module",
      status: "Active / Completed Review",
      icon: Key,
      description: "Literature review and mathematical formulation of lattice-based Public Key Encryption (PKE) constructions.",
      details: [
        "Theoretical analysis of lattice polynomial matrix multiplication",
        "Pipelined random number generation for seed creation",
        "Constant-time execution to prevent side-channel timing attacks",
      ],
    },
    {
      title: "2. KEM Encapsulation / Decapsulation",
      status: "Planned Next",
      icon: Shield,
      description: "Key Encapsulation Mechanism (KEM) modules for secure session key establishment over untrusted networks.",
      details: [
        "NIST Post-Quantum Cryptography (PQC) standardized parameter sets",
        "Symmetric encryption integration with AES-GCM acceleration",
        "Hardware-efficient polynomial reduction arithmetic",
      ],
    },
    {
      title: "3. FPGA Hardware Synthesis",
      status: "Architecture Design",
      icon: Cpu,
      description: "FPGA realization using Verilog/VHDL with parallel-processing pipelines for sub-millisecond execution.",
      details: [
        "Parallel NTT (Number Theoretic Transform) polynomial multiplier units",
        "Pipelined datapath design minimizing DSP and LUT utilization",
        "Targeting Xilinx / Intel FPGA development boards",
      ],
    },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl bg-card border border-border/80 text-foreground overflow-hidden">
        <DialogHeader className="border-b border-border/40 pb-4">
          <div className="flex items-center gap-2 mb-1">
            <Badge variant="outline" className="text-xs font-mono border-primary/40 text-primary">
              Institutional Grant: ₹1,27,000
            </Badge>
            <Badge variant="secondary" className="text-xs">
              Mentor: Dr. Utkarsh Tiwari
            </Badge>
          </div>
          <DialogTitle className="text-2xl font-bold text-gradient bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
            Hardware Realization of Quantum-Safe PKE System
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground mt-1">
            Research Project · Student Research Proposal Track · Team of 3 · Apr 2026 – Apr 2027
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Overview Banner */}
          <div className="p-4 rounded-lg bg-background/60 border border-border/50 text-sm leading-relaxed">
            <p className="text-muted-foreground">
              Researching post-quantum Public Key Encryption (PKE) constructions and their feasibility for hardware acceleration on FPGA architectures. The project implements pipelining and parallel-processing strategies to drastically reduce module execution latency.
            </p>
          </div>

          {/* Interactive Pipeline Diagram */}
          <div>
            <h4 className="text-sm font-semibold mb-3 text-foreground flex items-center gap-2">
              <Cpu className="w-4 h-4 text-primary" />
              Hardware System Architecture Pipeline (Click Stages to Inspect):
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {stages.map((stage, idx) => {
                const Icon = stage.icon;
                const isSelected = activeStage === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveStage(idx)}
                    className={`p-3 rounded-lg border text-left transition-all ${
                      isSelected
                        ? "border-primary bg-primary/10 shadow-sm"
                        : "border-border/60 bg-background/30 hover:border-border"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <Icon className={`w-4 h-4 ${isSelected ? "text-primary" : "text-muted-foreground"}`} />
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-muted/60 text-muted-foreground">
                        Stage {idx + 1}
                      </span>
                    </div>
                    <p className="text-xs font-semibold truncate">{stage.title.split(". ")[1]}</p>
                    <p className="text-[11px] text-muted-foreground mt-1">{stage.status}</p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Selected Stage Detail Card */}
          <div className="p-4 rounded-lg border border-primary/20 bg-primary/5 space-y-3">
            <div className="flex items-center justify-between">
              <h5 className="font-semibold text-sm flex items-center gap-2 text-primary">
                {stages[activeStage].title}
              </h5>
              <Badge variant="outline" className="text-xs font-mono">
                {stages[activeStage].status}
              </Badge>
            </div>
            <p className="text-xs text-muted-foreground">{stages[activeStage].description}</p>
            <ul className="space-y-1.5 pt-1">
              {stages[activeStage].details.map((detail, dIdx) => (
                <li key={dIdx} className="flex items-start gap-2 text-xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-border/40">
            {["Cryptography", "Quantum Computing", "FPGA Architecture", "Cybersecurity", "Verilog / VHDL", "C++"].map((t) => (
              <Badge key={t} variant="secondary" className="text-xs">
                {t}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex justify-end gap-3 pt-2 border-t border-border/40">
          <Button variant="outline" size="sm" onClick={onClose}>
            Close Explorer
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
