import { NextResponse, NextRequest } from 'next/server';
import { projectList } from '@/constant';
import { pause } from '@/lib/pause';

export async function GET(request: NextRequest) {
  // For development only to simulate a complex request
  await pause(2500);
  return NextResponse.json(
    { projects: projectList },
    {
      status: 200,
      headers: {
        'content-type': 'application/json'
      }
    }
  );
}
