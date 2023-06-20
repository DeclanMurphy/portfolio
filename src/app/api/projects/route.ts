import { NextResponse } from 'next/server';
import { projectList } from '@/constant';
import { pause } from '@/lib/pause';

// Avoid static generation so that users can demo suspense
export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    // For development only - simulates a high latency request
    await pause(3000);
    return NextResponse.json(
      { projects: projectList },
      {
        status: 200,
        headers: {
          'content-type': 'application/json'
        }
      }
    );
  } catch (e) {
    console.error('GET_PROJECTS_ERROR', e);
  }
}
