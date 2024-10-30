"use client";

import { FC, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { MainNav } from "@/components/demo-dashboard/main-nav";
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

export const DemoDashboard: FC = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    channelName: "",
  });
  const [loading, setLoading] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const prompt = `Create a YouTube thumbnail for a video titled "${formData.title}".
      The thumbnail should be eye-catching and professional, with text that reads "${formData.title}".
      Include branding for the channel "${formData.channelName}".
      Style: Modern YouTube thumbnail, high contrast, engaging visuals.`;

      const response = await axios.post('/api/generate-thumbnail', {
        prompt,
        title: formData.title,
        description: formData.description,
        channelName: formData.channelName,
      });

      setGeneratedImage(response.data.imageUrl);
    } catch (error) {
      console.error('Error generating thumbnail:', error);
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
      <div className="hidden flex-col md:flex">
        <div className="flex items-end justify-between space-y-2 mb-6">
        </div>
        
        <div className="flex-1 space-y-4 pt-6">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>YouTube Thumbnail Generator</CardTitle>
              <CardDescription>
                Enter your video details to generate a custom thumbnail
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Button
                  type="submit"
                  className="w-full"
                  size="lg"
                  disabled={loading}
                >
                  {loading ? "Generating..." : "Generate Thumbnail"}
                </Button>

                {generatedImage && (
                  <div className="mt-4">
                    <h3 className="text-lg font-medium mb-2">Generated Thumbnail</h3>
                    <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                      <Image
                        src={generatedImage}
                        alt="Generated Thumbnail"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <Button 
                      className="mt-2 w-full"
                      onClick={() => window.open(generatedImage, '_blank')}
                    >
                      Download Thumbnail
                    </Button>
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};