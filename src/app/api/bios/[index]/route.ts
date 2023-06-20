import { NextRequest, NextResponse } from 'next/server';

import { bioList } from '@/constant';
import { pause } from '@/lib/pause';

export async function GET(request: NextRequest, { params }: { params: { index: string } }) {
  try {
    await pause(500);
    const index = parseInt(params.index);
    const result = bioList[index];
    if (!result) {
      return new NextResponse(JSON.stringify({ error: { success: false } }), {
        status: 404,
        headers: { 'content-type': 'application/json' }
      });
    }
    return NextResponse.json({ bio: { ...bioList[index] } });
  } catch (e) {
    console.error('GET_BIO_ERROR', e);
  }
}

// Static API responses will be generated at build time
export async function generateStaticParams() {
  return bioList.map((bio) => {
    return {
      index: bio.id
    };
  });
}
