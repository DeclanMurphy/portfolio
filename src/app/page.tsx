import { getUrl } from '@/lib/getUrl';
import { Suspense } from 'react';

import { AdditionalInfo } from '@/components/common/AdditionalInfo';
import { ICPSkeleton } from '@/components/common/ImageColumnPanel';
import Panel from '@/components/common/Panel';
import BioList from '@/content/home/BioList';
import ProjectList from '@/content/home/ProjectList';

export default function Home() {
  return (
    <div className="container mx-auto max-w-4xl ">
      <section aria-label="Introduction Section">
        <Panel padding>
          <div className="divide-y divide-gray-300/50">
            <div className="space-y-6 pb-8">
              <p>
                I am a 31-year-old developer from Ireland, offering professional software solutions
                worldwide since 2014. Specializing in JavaScript development, I harness the power of
                React, Next.js, and Node.js to create dynamic applications. From an early age,
                I&apos;ve been captivated by software, constantly experimenting with various
                applications and honing my skills.
              </p>
              <BioList />
            </div>
          </div>
        </Panel>
      </section>
      <section aria-label="Past projects section">
        <div className="w-full text-center my-8">
          <h1 className="text-4xl md:text-6xl mb-2 select-none">Past Projects</h1>
          <AdditionalInfo
            text="This content is streamed via"
            href="https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming"
            hrefText="Next.js Suspense"
          />
        </div>
        <div className="grid gap-9 mb-10">
          <Suspense fallback={<ICPSkeleton times={2} />}>
            {/* @ts-expect-error Async Server Component */}
            <ProjectList
              data={fetch(`${getUrl()}/api/projects?q=${Date.now()}`, {
                cache: 'no-store'
              })}
            />
          </Suspense>
        </div>
      </section>
    </div>
  );
}
