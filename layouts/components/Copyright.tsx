import pckg from '@/package.json';

export default function Copyright() {
  return (
    <div className="font-display bg-neutral-800 py-2 text-center text-xs text-white sm:text-sm md:text-lg">
      <span className="inline-flex flex-wrap gap-1">
        <span>©2024</span>
        <span>Rich Mind Holding</span>
        <span>|</span>
        <span title={new Date(pckg['version.stamp']).toLocaleString()}>v{pckg.version}</span>
        <span>|</span>
        <span>All Rights Reserved</span>
      </span>
    </div>
  );
}
