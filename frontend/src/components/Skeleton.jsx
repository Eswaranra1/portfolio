const Skeleton = ({ className = '', ...props }) => (
  <div
    className={`animate-pulse bg-gray-200 dark:bg-gray-700 rounded ${className}`}
    {...props}
  />
);

export const ProjectCardSkeleton = () => (
  <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-6 space-y-4">
    <Skeleton className="h-6 w-3/4" />
    <Skeleton className="h-4 w-full" />
    <Skeleton className="h-4 w-full" />
    <Skeleton className="h-4 w-2/3" />
    <div className="flex gap-2 pt-4">
      <Skeleton className="h-8 w-20" />
      <Skeleton className="h-8 w-20" />
    </div>
  </div>
);

export const SkillBarSkeleton = () => (
  <div className="space-y-2">
    <Skeleton className="h-4 w-24" />
    <Skeleton className="h-2 w-full rounded-full" />
  </div>
);

export default Skeleton;
