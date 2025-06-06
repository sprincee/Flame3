"use client";

import { FC, useState } from "react";
import Image from "next/image";
import axios from "axios";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Particles } from "@/components/animations/particles";

export const DemoDashboard: FC = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    channelName: "",
  });
  const [loading, setLoading] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // ... all your existing functions stay the same ...

  const generateEnhancedPrompt = (data: typeof formData) => {
    const description = data.description.toLowerCase();
    
    return `Create a professional, high-impact YouTube thumbnail with these specifications:

    COMPOSITION:
    - Use standard YouTube thumbnail dimensions (1280x720)
    - Place the title "${data.title}" prominently in the image
    - Include "${data.channelName}" branding subtly but visibly
    - Create a clear focal point that draws attention
    - Ensure text is large and highly readable
    - Use professional typography and layout

    VISUAL STYLE:
    - Generate a photorealistic, high-quality background relevant to the title
    - Apply cinematic lighting and professional color grading
    - Include subtle depth effects and dimension
    - Add professional shadows and highlights for depth
    - Maintain clear spacing and visual hierarchy
    - Ensure the image looks premium and professionally designed

    TECHNICAL REQUIREMENTS:
    - High resolution output (minimum 1280x720)
    - Sharp, clear details throughout
    - Professional color balance and contrast
    - Proper aspect ratio (16:9)
    - Clean, crisp text rendering`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const enhancedPrompt = generateEnhancedPrompt(formData);

      const response = await axios.post('/api/generate-thumbnail', {
        prompt: enhancedPrompt,
        title: formData.title,
        description: formData.description,
        channelName: formData.channelName,
      });

      if (response.data.imageUrl) {
        setGeneratedImage(response.data.imageUrl);
      } else {
        setError('No image URL received from the server');
      }
    } catch (error) {
      console.error('Error generating thumbnail:', error);
      setError('Failed to generate thumbnail. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  return (
    <>
      <Particles />
      <div className="flex flex-col items-center justify-start min-h-screen pt-20 p-4 md:p-6 relative z-10">
        <Card className="w-full max-w-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-slate-900 backdrop-blur supports-[backdrop-filter]:bg-white/50 dark:supports-[backdrop-filter]:bg-slate-900/50">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-gray-900 dark:text-gray-50">YouTube Thumbnail Generator</CardTitle>
            <CardDescription className="text-gray-500 dark:text-gray-400">
              Enter your video details to generate a custom thumbnail
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* Rest of your form content stays exactly the same */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="title" className="text-sm font-medium text-gray-700 dark:text-gray-200">
                  Video Title
                </label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Enter your video title"
                  className="bg-white dark:bg-slate-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500"
                  required
                  minLength={3}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="description" className="text-sm font-medium text-gray-700 dark:text-gray-200">
                  Video Description
                </label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Enter your video description"
                  className="min-h-[100px] bg-white dark:bg-slate-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500"
                  required
                  minLength={10}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="channelName" className="text-sm font-medium text-gray-700 dark:text-gray-200">
                  Channel Name
                </label>
                <Input
                  id="channelName"
                  value={formData.channelName}
                  onChange={handleInputChange}
                  placeholder="Enter your channel name"
                  className="bg-white dark:bg-slate-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500"
                  required
                  minLength={2}
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white"
                disabled={loading || !formData.title || !formData.description || !formData.channelName}
              >
                {loading ? 'Generating...' : 'Generate Thumbnail'}
              </Button>
            </form>

            {error && (
              <div className="mt-4 p-4 bg-red-100 dark:bg-red-900/50 border border-red-200 dark:border-red-700 rounded-md text-red-800 dark:text-red-200">
                {error}
              </div>
            )}

            {generatedImage && (
              <div className="mt-6 space-y-4">
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-200">Generated Thumbnail</h3>
                <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                  <Image 
                    src={generatedImage}
                    alt="Generated Thumbnail"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <Button
                  onClick={() => window.open(generatedImage, '_blank')}
                  className="w-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white"
                >
                  Open Full Size
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default DemoDashboard;