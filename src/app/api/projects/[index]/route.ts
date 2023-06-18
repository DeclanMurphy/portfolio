import { bioList } from '@/constant';
import { NextResponse } from 'next/server';

export async function GET(request: Request, { params }: { params: { index: string } }) {
  await pause(1);
  const index = parseInt(params.index);

  const result = bioList[index];
  if (!result) {
    // handle string "/api/bios/abc"
    return new NextResponse(JSON.stringify({ error: { success: false } }), {
      status: 404,
      headers: { 'content-type': 'application/json' }
    });
  }
  return NextResponse.json({ bio: { id: index, ...bioList[index] } });
}

// For development only to simulate a complex request
const pause = (duration: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

export async function generateStaticParams() {
  return bioList.map((bio, index) => {
    return {
      index: index.toString()
    };
  });
}
