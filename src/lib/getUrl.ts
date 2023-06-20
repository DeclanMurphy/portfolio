import { cache } from 'react';
export const getUrl = cache(() =>
  process.env.NEXT_PUBLIC_VERCEL_URL
    ? `https://declan-murphy.vercel.app`
    : `http://localhost:${process.env.PORT ?? 3000}`
);
