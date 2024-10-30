"use client";

import { FC, useState } from "react";
import Image from "next/image";
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add your thumbnail generation logic here
    console.log("Generating thumbnail with:", formData);
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
                <div className="space-y-2">
                  <label htmlFor="title" className="text-sm font-medium">
                    Video Title
                  </label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="Enter your video title"
                    className="w-full"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="description" className="text-sm font-medium">
                    Video Description
                  </label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Enter your video description"
                    className="min-h-[100px]"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="channelName" className="text-sm font-medium">
                    Channel Name
                  </label>
                  <Input
                    id="channelName"
                    value={formData.channelName}
                    onChange={handleInputChange}
                    placeholder="Enter your channel name"
                    className="w-full"
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Generate Thumbnail
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};