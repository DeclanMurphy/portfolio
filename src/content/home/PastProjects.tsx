import { Suspense } from 'react';

import { ICPSkeleton } from '@/components/common/ImageColumnPanel';
import ProjectList from '@/content/home/ProjectList';
import { getUrl } from '@/lib/getUrl';

export function PastProjects() {
  return (
    <Suspense fallback={<ICPSkeleton times={3} />}>
      {/* @ts-expect-error Async Server Component */}
      <ProjectList
        data={fetch(`${getUrl()}/api/projects`, {
          cache: 'no-store'
        })}
      />
    </Suspense>
  );
}
