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
            Passionate about revolutionizing finance through blockchain technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <Avatar className="w-64 h-64 border-4 border-primary/20">
              <AvatarImage src={profileImage} alt="Alex Morgan" />
              <AvatarFallback className="text-6xl">AM</AvatarFallback>
            </Avatar>
          </div>

          <div className="space-y-6">
            <Card className="p-6">
              <p className="text-lg leading-relaxed" data-testid="text-bio">
                With over 5 years of experience in blockchain development and financial analysis,
                I specialize in creating innovative solutions at the intersection of technology
                and finance. My expertise spans smart contract development, DeFi protocols, and
                algorithmic trading systems.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Core Expertise</h3>
              <ul className="space-y-3" data-testid="list-expertise">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-mono">▸</span>
                  <span>Building secure and scalable smart contracts on Ethereum and Polygon</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-mono">▸</span>
                  <span>Developing DeFi protocols with focus on yield optimization and liquidity management</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-mono">▸</span>
                  <span>Creating algorithmic trading strategies and portfolio management systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-mono">▸</span>
                  <span>Conducting comprehensive financial analysis and market research</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
