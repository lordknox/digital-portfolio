import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import project1 from "@assets/stock_images/financial_dashboard__a5a3a25c.jpg";
import project2 from "@assets/stock_images/digital_art_nft_mark_5dcbd50b.jpg";
import project3 from "@assets/stock_images/smart_contract_block_a5bbc8c1.jpg";
import project4 from "@assets/stock_images/financial_dashboard__9e79754c.jpg";
import project5 from "@assets/stock_images/digital_art_nft_mark_6e2a2c09.jpg";
import project6 from "@assets/stock_images/financial_dashboard__f558e635.jpg";

const projects = [
  {
    title: "DeFi Yield Optimizer",
    description: "Automated yield farming protocol that maximizes returns across multiple DeFi platforms with smart contract integration.",
    image: project1,
    tags: ["Solidity", "Web3.js", "DeFi", "Ethereum"],
    link: "#",
  },
  {
    title: "NFT Marketplace",
    description: "Decentralized marketplace for digital art with gasless minting and royalty distribution for creators.",
    image: project2,
    tags: ["React", "IPFS", "Smart Contracts", "ERC-721"],
    link: "#",
  },
  {
    title: "Smart Contract Auditor",
    description: "Automated security analysis tool for Solidity smart contracts with vulnerability detection and gas optimization.",
    image: project3,
    tags: ["Python", "Solidity", "Security", "Analysis"],
    link: "#",
  },
  {
    title: "Crypto Trading Bot",
    description: "Algorithmic trading system with ML-based price prediction and automated execution on DEXs.",
    image: project4,
    tags: ["Python", "TensorFlow", "Trading", "APIs"],
    link: "#",
  },
  {
    title: "DAO Governance Platform",
    description: "Decentralized governance system with proposal creation, voting mechanisms, and treasury management.",
    image: project5,
    tags: ["Solidity", "TypeScript", "DAO", "Governance"],
    link: "#",
  },
  {
    title: "Portfolio Analytics Dashboard",
    description: "Real-time cryptocurrency portfolio tracker with advanced analytics and risk assessment tools.",
    image: project6,
    tags: ["React", "Node.js", "Analytics", "APIs"],
    link: "#",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg">
            Innovative blockchain and fintech solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="hover-elevate overflow-hidden group"
              data-testid={`project-${index}`}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
              </div>
              <CardHeader className="gap-2">
                <CardTitle className="flex items-center justify-between gap-2">
                  <span>{project.title}</span>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
