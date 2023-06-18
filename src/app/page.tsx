import Link from 'next/link';

import BioSection from '@/content/home/BioSection';
import ImageColumnPanel from '@/components/common/ImageColumnPanel';
import Panel from '@/components/common/Panel';
import BCDashboard from '../../public/bc-dash.png';
import YROverview from '../../public/yr-overview.png';

export default function Home() {
  return (
    <div className="container mx-auto max-w-4xl ">
      <Introduction />
      <PastProjects />
    </div>
  );
}

function Introduction() {
  return (
    <>
      <div className="w-full text-center mb-10">
        <h1 className="text-6xl">Introduction</h1>
      </div>
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
            <BioSection />
          </div>
        </div>
      </Panel>
    </>
  );
}

function PastProjects() {
  return (
    <>
      <div className="w-full text-center my-10">
        <h1 className="text-6xl">Past Projects</h1>
        <p className="text-zinc-400 text-sm">
          This content is streamed via{' '}
          <Link
            className="underline text-zinc-400 hover:text-zinc-500"
            target="__blank"
            href="https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming"
          >
            Next.js Suspense
          </Link>
        </p>
      </div>
      <div className="grid lg:grid-cols-1 gap-x-6 gap-y-6">
        <ImageColumnPanel image={BCDashboard} alt="Crypto Exchange">
          <h2>Cryptocurrency Market</h2>
          <h3>Non-custodial exchange</h3>
        </ImageColumnPanel>
        <a href="https://your.rentals" target="__blank">
          <ImageColumnPanel image={YROverview} alt="Your Rentals">
            <h2>Your.Rentals</h2>
            <h3>Vacation Rentals SaaS</h3>
          </ImageColumnPanel>
        </a>
      </div>
    </>
  );
}
