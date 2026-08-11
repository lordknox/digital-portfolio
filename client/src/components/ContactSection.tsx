import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone, Linkedin, Github, Send, Download, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// ─── EmailJS Config ───────────────────────────────────────────────────────────
// Replace these with your actual EmailJS credentials:
//   1. Go to https://www.emailjs.com/ and create a free account
//   2. Add a Gmail service → copy the Service ID below
//   3. Create an email template → copy the Template ID below
//      Template variables to use: {{from_name}}, {{from_email}}, {{message}}
//   4. Go to Account → API Keys → copy your Public Key below
const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  || "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  || "YOUR_PUBLIC_KEY";

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: "Maalav",
        },
        EMAILJS_PUBLIC_KEY
      );
      toast({
        title: "Message Sent! 🎉",
        description: "Thanks for reaching out — I'll reply to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      toast({
        title: "Failed to Send",
        description: "Something went wrong. Please email me directly at patadiya.maalav@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsSending(false);
    }
  };

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Maalav_Patadiya_Resume.docx";
    link.download = "Maalav_Patadiya_Resume.docx";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast({
      title: "Downloading Resume",
      description: "Downloading Maalav_Patadiya_Resume.docx",
    });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h2>
          <p className="text-muted-foreground text-lg">
            Let's connect for software engineering roles, research collaborations, or technical projects
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
                    placeholder="Tell me about your project or opportunity..."
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
                <div className="flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <span data-testid="text-email" className="font-mono text-sm">patadiya.maalav@gmail.com</span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-7 text-xs font-mono"
                    onClick={() => {
                      navigator.clipboard.writeText("patadiya.maalav@gmail.com");
                      toast({
                        title: "Email Copied!",
                        description: "patadiya.maalav@gmail.com copied to clipboard.",
                      });
                    }}
                    data-testid="button-copy-email"
                  >
                    Copy Email
                  </Button>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span data-testid="text-phone" className="font-mono text-sm">+91 8320555696</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span data-testid="text-location">Gujarat, India</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Social & Professional Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <a
                  href="https://linkedin.com/in/maalav-patadiya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover-elevate p-3 rounded-md"
                  data-testid="link-contact-linkedin"
                >
                  <Linkedin className="w-5 h-5 text-primary" />
                  <span>linkedin.com/in/maalav-patadiya</span>
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
