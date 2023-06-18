import { cache } from 'react';

export const getUrl = cache(() =>
  process.env.VERCEL_URL
    ? `https://app-declan-todo-name.vercel.app` // TODO Add name
    : `http://localhost:${process.env.PORT ?? 3000}`
);
