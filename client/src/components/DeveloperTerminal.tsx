import { useState, useEffect, useRef } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Terminal, Send, X, CornerDownLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface DeveloperTerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface LogEntry {
  type: "input" | "output" | "system";
  text: string;
}

export default function DeveloperTerminal({ isOpen, onClose }: DeveloperTerminalProps) {
  const { toast } = useToast();
  const [input, setInput] = useState<string>("");
  const [history, setHistory] = useState<LogEntry[]>([
    { type: "system", text: "Maalav Patadiya CLI Terminal [Version 1.0.0]" },
    { type: "system", text: "Type 'help' to see available commands or 'download-resume' to get CV." },
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    const newHistory: LogEntry[] = [...history, { type: "input", text: `$ ${cmdStr}` }];

    switch (trimmed) {
      case "help":
        newHistory.push({
          type: "output",
          text: `Available Commands:
  about           - Overview & academic summary
  skills          - Technical skills, languages, tools & coursework
  projects        - List of research & full-stack projects
  gate            - GATE CS & GATE DA exam qualifications
  research        - Quantum Cryptography PKE research grant details
  contact         - Email, phone, location, LinkedIn & GitHub
  download-resume - Trigger instant resume file download
  clear           - Clear terminal history`,
        });
        break;

      case "about":
        newHistory.push({
          type: "output",
          text: `Maalav Patadiya
Degree  : B.Tech Computer Engineering, PDEU (2023 - 2027)
CGPA    : 8.71 / 10.0
Role    : Software Development Engineer Intern @ WeTheDevelopers
Focus   : Full-stack mobile/web, distributed systems, quantum cryptography FPGA research`,
        });
        break;

      case "skills":
        newHistory.push({
          type: "output",
          text: `Backend  : Python, Django, Django REST Framework, PostgreSQL, Redis, Celery, Docker
Mobile   : Flutter, Dart, React.js, TailwindCSS, JavaScript
Languages: C, C++, Python, Dart, JavaScript
Tools    : Git, GitHub, VS Code, Docker Compose, Tomcat, Render, Vercel
Coursework: DSA, OOP, DBMS, OS, Software Engineering, Compiler Design`,
        });
        break;

      case "projects":
        newHistory.push({
          type: "output",
          text: `1. Hardware Quantum-Safe PKE System [Research Project · Apr 2026 - Apr 2027]
   ₹1,27,000 Institutional Grant | Mentor: Dr. Utkarsh Tiwari | FPGA Architecture

2. PulseCity — Real-Time City Intelligence [SDE Internship · Jun 2026 - Jul 2026]
   Flutter, Django REST, PostgreSQL, Redis, Celery, Docker Compose

3. Traffic Pattern Analysis & Prediction [Feb 2026 - Apr 2026]
   CARLA Simulator, PySpark, Random Forest / XGBoost (0.943 ROC-AUC)

4. Icarus — Wind & Solar Energy Mapping [Jan 2026 - Mar 2026]
   MERN Stack, PostgreSQL, Leaflet.js (Live on Vercel/Render)`,
        });
        break;

      case "gate":
        newHistory.push({
          type: "output",
          text: `✓ Qualified GATE CS (Computer Science & IT) in 1st attempt (3rd year) — Mar 2026
✓ Qualified GATE DA (Data Science & AI) in 1st attempt (3rd year) — Mar 2026`,
        });
        break;

      case "research":
        newHistory.push({
          type: "output",
          text: `Project Title: Hardware Implementation of Quantum-Safe PKE System
Funding      : INR 1,27,000 University Research Grant
Mentor       : Dr. Utkarsh Tiwari (Team of 3)
Domain       : Cryptography, Quantum Computing, FPGA Architecture, Cybersecurity
Scope        : Lattice-based PKE/KEM constructions, FPGA pipelining for latency reduction`,
        });
        break;

      case "contact":
        newHistory.push({
          type: "output",
          text: `Email   : patadiya.maalav@gmail.com
Phone   : +91 8320555696
Location: Gujarat, India
LinkedIn: https://linkedin.com/in/maalav-patadiya
GitHub  : https://github.com/lordknox`,
        });
        break;

      case "download-resume":
        {
          const link = document.createElement("a");
          link.href = "/Maalav_Patadiya_Resume.docx";
          link.download = "Maalav_Patadiya_Resume.docx";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          newHistory.push({
            type: "output",
            text: "Downloading Maalav_Patadiya_Resume.docx...",
          });
          toast({
            title: "Downloading Resume",
            description: "File transfer initiated.",
          });
        }
        break;

      case "clear":
        setHistory([]);
        setInput("");
        return;

      default:
        newHistory.push({
          type: "output",
          text: `Command not recognized: '${cmdStr}'. Type 'help' for available commands.`,
        });
        break;
    }

    setHistory(newHistory);
    setInput("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(input);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-black/95 text-green-400 border border-green-500/40 font-mono shadow-2xl overflow-hidden p-0">
        <DialogHeader className="bg-zinc-900/90 px-4 py-3 border-b border-green-500/30 flex flex-row items-center justify-between">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-green-400" />
            <DialogTitle className="text-sm font-mono text-green-400">
              maalav@portfolio:~$
            </DialogTitle>
          </div>
          <span className="text-[10px] text-green-500/60 font-mono">Press ESC to exit</span>
        </DialogHeader>

        <div className="p-4 h-[350px] overflow-y-auto space-y-2 text-xs">
          {history.map((entry, idx) => (
            <div
              key={idx}
              className={`${
                entry.type === "input"
                  ? "text-white font-bold"
                  : entry.type === "system"
                  ? "text-green-500/70"
                  : "text-green-400 whitespace-pre-wrap leading-relaxed"
              }`}
            >
              {entry.text}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        <form onSubmit={handleSubmit} className="border-t border-green-500/30 bg-zinc-950 p-2 flex items-center gap-2">
          <span className="text-green-500 font-bold pl-2">$</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="type command (e.g. help, skills, projects)..."
            className="flex-1 bg-transparent text-white focus:outline-none font-mono text-xs placeholder:text-zinc-600"
            autoFocus
          />
          <Button type="submit" size="icon" variant="ghost" className="h-7 w-7 text-green-400 hover:text-green-300">
            <CornerDownLeft className="w-3.5 h-3.5" />
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
