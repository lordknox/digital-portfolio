import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone, Linkedin, Instagram, Github, Send, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleDownloadCV = () => {
    console.log("Downloading CV...");
    toast({
      title: "Downloading CV",
      description: "Your download will begin shortly.",
    });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h2>
          <p className="text-muted-foreground text-lg">
            Let's discuss your next blockchain or fintech project
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    required
                    data-testid="input-name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                    required
                    data-testid="input-email"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project..."
                    rows={5}
                    required
                    data-testid="input-message"
                  />
                </div>
                <Button type="submit" className="w-full" data-testid="button-submit">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span data-testid="text-email">patadiya.maalav@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span data-testid="text-phone">+91 8320555696</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span data-testid="text-location">Rajkot, Gujarat, India</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Social Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <a
                  href="http://linkedin.com/in/maalav-patadiya-dummy-account-72b79b38a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover-elevate p-3 rounded-md"
                  data-testid="link-contact-linkedin"
                >
                  <Linkedin className="w-5 h-5 text-primary" />
                  <span>linkedin.com/in/maalavpatadiya</span>
                </a>
                <a
                  href="https://instagram.com/maalavpatadiyadummy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover-elevate p-3 rounded-md"
                  data-testid="link-contact-instagram"
                >
                  <Instagram className="w-5 h-5 text-primary" />
                  <span>instagram.com/maalavpatadiya</span>
                </a>
                <a
                  href="https://github.com/lordknox"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover-elevate p-3 rounded-md"
                  data-testid="link-contact-github"
                >
                  <Github className="w-5 h-5 text-primary" />
                  <span>github.com/lordknox</span>
                </a>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary/10 to-chart-2/10 border-primary/20">
              <CardContent className="pt-6">
                <Button
                  onClick={handleDownloadCV}
                  variant="default"
                  className="w-full"
                  size="lg"
                  data-testid="button-download-cv"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download CV / Resume
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
