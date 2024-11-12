import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { prompt, title, description, channelName } = body;

    if (!prompt) {
      return NextResponse.json(
        { error: 'Prompt is required' },
        { status: 400 }
      );
    }

    const image = await openai.images.generate({
      model: "dall-e-3",
      prompt: prompt,
      size: "1792x1024",
      quality: "hd",
      n: 1,
    });


    return NextResponse.json({
      imageUrl: image.data[0].url
    });

  } catch (error) {
    console.error('Error in thumbnail generation:', error);
    return NextResponse.json(
      { error: 'Failed to generate thumbnail' },
      { status: 500 }
    );
  }
}