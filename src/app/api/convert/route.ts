import { NextResponse } from 'next/server';

const isProduction = process.env.NODE_ENV == 'production';

const API_HOSTNAME = isProduction ? process.env.FILE_CONVERTER_API : 'http://localhost:3000';

const allowedExtensions: Record<string, string> = {
  pdf: 'pdf',
  html: 'html',
};

export async function POST(req: Request, res: Response) {
  const extensionToConvert = req.url.split('format=')[1];

  try {
    const formData = await req.formData();
    const file = formData.get('file');

    if (!(extensionToConvert in allowedExtensions) || !file) {
      return new NextResponse('Extensions not allowed', {
        status: 405,
      });
    }

    const response = await fetch(`${API_HOSTNAME}/api/convert/stream?format=${extensionToConvert}`, {
      method: 'POST',
      body: file,
    });

    if (!response.ok || !response.body) {
      const message = await response.text();
      return new NextResponse(message, {
        status: response.status,
      });
    }

    const chunks: Uint8Array[] = [];
    const reader = response.body.getReader();

    while (true) {
      const { done, value } = await reader.read();

      if (done) {
        break;
      }

      chunks.push(value);
    }

    const blob = new Blob(chunks);
    return new NextResponse(blob);
  } catch (err) {
    const error = err as Error;

    if (error.message.includes('File too large')) {
      return new NextResponse(error.message, {
        status: 413,
      });
    }

    return new NextResponse(error.message, {
      status: 500,
    });
  }
}
