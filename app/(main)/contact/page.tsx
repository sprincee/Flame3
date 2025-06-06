"use client";

import { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { FadeIn } from "@/components/animations/fade-in";
import { StaggerContainer } from "@/components/animations/stagger-container";
import { Particles } from "@/components/animations/particles";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      toast({ 
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll back to you soon!" 
      });

      setFormData({
        name: "",
        email: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Particles />
      <main className="min-h-screen flex flex-col items-center justify-start pt-20 p-6 relative z-10">
        <FadeIn delay={0.1}>
          <h1 className="text-4xl font-bold mb-6">Contact Me!</h1>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <p className="text-lg text-center max-w-lg mb-10">
            Have questions? Feedback? I'd love to hear from you.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 rounded border transition 
                 bg-white text-black placeholder-gray-500 border-gray-300 
                 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 dark:border-gray-600"
                placeholder="Enter your name. . ."
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 rounded border transition 
                 bg-white text-black placeholder-gray-500 border-gray-300 
                 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 dark:border-gray-600"
                placeholder="Enter your email. . ."
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                required
                className="w-full p-2 rounded border transition 
                 bg-white text-black placeholder-gray-500 border-gray-300 
                 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 dark:border-gray-600"
                placeholder="Type your message here. . ."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-2 rounded transition 
              bg-primary text-primary-foreground  
              dark:bg-secondary dark:text-secondary-foreground"
            >
              {isSubmitting ? "Sending . . ." : "Send Message"}
            </button>
          </form>
        </FadeIn>
      </main>
    </>
  );
}