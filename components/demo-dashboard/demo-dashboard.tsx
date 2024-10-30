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
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Card className="w-full max-w-2xl border border-gray-800 bg-background/50 backdrop-blur supports-[backdrop-filter]:bg-background/50">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">YouTube Thumbnail Generator</CardTitle>
          <CardDescription className="text-gray-400">
            Enter your video details to generate a custom thumbnail
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="title" className="text-sm font-medium text-gray-200">
                Video Title
              </label>
              <Input
                id="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Enter your video title"
                className="bg-[#1A1F2E] border-gray-700 text-white"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="description" className="text-sm font-medium text-gray-200">
                Video Description
              </label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Enter your video description"
                className="min-h-[100px] bg-[#1A1F2E] border-gray-700 text-white"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="channelName" className="text-sm font-medium text-gray-200">
                Channel Name
              </label>
              <Input
                id="channelName"
                value={formData.channelName}
                onChange={handleInputChange}
                placeholder="Enter your channel name"
                className="bg-[#1A1F2E] border-gray-700 text-white"
              />
            </div>

            <Button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            >
              Generate Thumbnail
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};