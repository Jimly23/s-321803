import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent successfully!", {
        description: "I'll get back to you as soon as possible.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="section pt-24 md:pt-32">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 animate-fade-in">
            Get in <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-16 text-balance animate-fade-in [animation-delay:100ms]">
            Have a project in mind or want to discuss a potential collaboration? I'd love to hear from you.
          </p>
        </div>
      </section>
      
      {/* Contact Form */}
      <section className="section pt-0">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="animate-fade-in [animation-delay:200ms]">
              <h2 className="text-2xl md:text-3xl font-display font-semibold mb-8">
                Contact <span className="text-gradient">Information</span>
              </h2>
              
              <div className="space-y-8">
                <ContactInfoItem
                  title="Email"
                  content="hello@johndoe.com"
                  link="mailto:hello@johndoe.com"
                />
                
                <ContactInfoItem
                  title="Location"
                  content="San Francisco, California"
                />
                
                <ContactInfoItem
                  title="Social Media"
                  social
                />
                
                <div className="pt-4">
                  <h3 className="text-lg font-display font-medium mb-4">
                    Business Hours
                  </h3>
                  <p className="text-foreground/80">
                    Monday – Friday: 9am – 5pm PST<br />
                    Weekend: Closed
                  </p>
                </div>
              </div>
            </div>
            
            {/* Form */}
            <div className="animate-fade-in [animation-delay:300ms]">
              <div className="p-8 rounded-2xl border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none">
                <h2 className="text-2xl font-display font-semibold mb-6">
                  Send a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none"
                      placeholder="hello@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none"
                      placeholder="Project Inquiry"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full py-6 rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="section bg-secondary/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-display font-semibold text-center mb-16">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          
          <div className="space-y-8">
            <FAQItem
              question="What services do you offer?"
              answer="I specialize in UI/UX design, web development, and brand identity design. This includes wireframing, prototyping, responsive web design, and design systems."
            />
            
            <FAQItem
              question="What is your typical process for new projects?"
              answer="My process typically involves an initial consultation, research phase, concept development, design/development iterations, and final delivery. I ensure clear communication throughout the entire journey."
            />
            
            <FAQItem
              question="How long does a typical project take?"
              answer="Project timelines vary depending on scope and complexity. A simple website might take 2-4 weeks, while a comprehensive design system could take 2-3 months. I'll provide specific timeframes during our initial discussions."
            />
            
            <FAQItem
              question="Do you offer maintenance services after project completion?"
              answer="Yes, I offer maintenance packages for websites and applications to ensure everything continues to run smoothly after launch. We can discuss these options based on your specific needs."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

type ContactInfoItemProps = {
  title: string;
  content?: string;
  link?: string;
  social?: boolean;
};

function ContactInfoItem({ title, content, link, social }: ContactInfoItemProps) {
  return (
    <div>
      <h3 className="text-lg font-display font-medium mb-3">
        {title}
      </h3>
      
      {social ? (
        <div className="flex gap-4">
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-foreground/80 hover:text-accent transition-colors duration-300"
          >
            Twitter
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-foreground/80 hover:text-accent transition-colors duration-300"
          >
            LinkedIn
          </a>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-foreground/80 hover:text-accent transition-colors duration-300"
          >
            Instagram
          </a>
        </div>
      ) : (
        <p className="text-foreground/80">
          {link ? (
            <a 
              href={link} 
              className="hover:text-accent hover-link transition-colors duration-300"
            >
              {content}
            </a>
          ) : (
            content
          )}
        </p>
      )}
    </div>
  );
}

type FAQItemProps = {
  question: string;
  answer: string;
};

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className={cn(
      "border border-border/40 rounded-lg transition-all duration-300",
      isOpen ? "bg-card" : "bg-transparent hover:bg-card/50"
    )}>
      <button
        className="w-full px-6 py-4 text-left flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-display font-medium">
          {question}
        </h3>
        <span className={cn(
          "transform transition-transform duration-300",
          isOpen ? "rotate-45" : "rotate-0"
        )}>
          +
        </span>
      </button>
      
      <div className={cn(
        "overflow-hidden transition-all duration-300 px-6",
        isOpen ? "max-h-40 opacity-100 pb-4" : "max-h-0 opacity-0"
      )}>
        <p className="text-foreground/80 text-balance">
          {answer}
        </p>
      </div>
    </div>
  );
}
