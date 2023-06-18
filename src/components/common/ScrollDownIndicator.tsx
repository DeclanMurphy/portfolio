import { BsArrowDown } from 'react-icons/bs';

export const ScrollDownIndicator = () => (
  <div className="flex items-center justify-center mt-10">
    <div className="animate-bounce bg-zinc-900 p-2 w-10 h-10 ring-1 ring-slate-900/5 shadow-lg rounded-full">
      <BsArrowDown className="w-6 h-6 text-zinc-500" />
    </div>
  </div>
);
