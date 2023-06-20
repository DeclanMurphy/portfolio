import './globals.css';
import { Maven_Pro } from 'next/font/google';

import { Header } from '@/components/misc/Header';
import MatrixRain from '@/components/misc/MatrixRain';
import ToastProvider from '@/providers/ToastProvider';

const inter = Maven_Pro({ weight: ['400'], subsets: ['latin'] });
export const metadata = {
  title: 'Declan Murphy | Portfolio',
  description: 'Fullstack Developer'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="text-zinc-100">
      <body className={inter.className}>
        <ToastProvider>
          <div className="relative w-full h-screen overflow-hidden">
            <div className="absolute w-full h-full">
              <MatrixRain />
            </div>
            <div className="relative z-10 flex flex-col h-full overflow-y-auto">
              <Header />
              <main className="flex-1 flex flex-col items-center justify-between">{children}</main>
            </div>
          </div>
        </ToastProvider>
      </body>
    </html>
  );
}
