import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  timeout: 60000,
  maxRetries: 3
});

export async function POST(req: Request) {
  try {

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 50000);

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
      response_format: "url", 
    }, {
      signal: controller.signal 
    });

    clearTimeout(timeoutId);

    if (!image.data?.[0]?.url) {
      throw new Error('No image URL in response');
    }

    return NextResponse.json({
      imageUrl: image.data[0].url
    });

  } catch (error: any) {
    console.error('Error in thumbnail generation:', error);


    if (error.name === 'AbortError') {
      return NextResponse.json(
        { error: 'Request timed out' },
        { status: 504 }
      );
    }

    if (error.status === 429) {
      return NextResponse.json(
        { error: 'Rate limit exceeded' },
        { status: 429 }
      );
    }


    if (error.response?.data?.error) {
      return NextResponse.json(
        { error: error.response.data.error.message },
        { status: error.response.status || 500 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to generate thumbnail' },
      { status: 500 }
    );
  }
}


/*
  } catch (error) {
    console.error('Error in thumbnail generation:', error);
    return NextResponse.json(
      { error: 'Failed to generate thumbnail' },
      { status: 500 }
    );
  }
}
*/