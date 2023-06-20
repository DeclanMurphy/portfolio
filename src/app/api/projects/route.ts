import { NextResponse, NextRequest } from 'next/server';
import { projectList } from '@/constant';
import { pause } from '@/lib/pause';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  // For development only - simulates a high latency request
  await pause(3000);
  return NextResponse.json(
    { projects: projectList, searchParams },
    {
      status: 200,
      headers: {
        'content-type': 'application/json'
      }
    }
  );
}
