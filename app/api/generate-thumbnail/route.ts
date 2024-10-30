import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { prompt } = body;

        const response = await openai.images.generate({
            prompt,
            n: 1,
            size: "1024x1024",
            response_format: "url",
        });

        return NextResponse.json({ 
            imageUrl: response.data[0].url 
          });
      
        } catch (error) {
          console.error('Error:', error);
          return NextResponse.json(
            { error: 'Error generating image' },
            { status: 500 }
          );
        }
      }