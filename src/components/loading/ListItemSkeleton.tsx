const ListItemSkeleton: React.FC = () => {
  return (
    <div className="flex space-x-4 animate-pulse">
      <div className="rounded-md bg-zinc-700 h-5 w-5 mt-12"></div>
      <div className="flex-1 space-y-6 py-1">
        <div className="h-5 bg-zinc-700 rounded"></div>
        <div className="grid grid-cols-3 gap-4">
          <div className="h-5 bg-zinc-700 rounded col-span-2"></div>
          <div className="h-5 bg-zinc-700 rounded col-span-1"></div>
        </div>
        <div className="h-5 bg-zinc-700 rounded"></div>
      </div>
    </div>
  );
};

export default ListItemSkeleton;
