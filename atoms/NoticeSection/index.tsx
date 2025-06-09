import { cn } from '@/utils/jsx-tools';
import { ComponentProps, PropsWithChildren } from 'react';

export function NoticeSection({
  children,
  className,
  neon,
  eager,
}: Readonly<PropsWithChildren<ComponentProps<'div'> & { neon?: boolean; eager?: boolean }>>) {
  return (
    <div className={cn('size-full p-8 sm:p-12 md:p-16 lg:p-20', className)}>
      <div className={cn('relative overflow-hidden rounded-2xl', { 'neon-box': neon })}>
        <div className="relative z-10">{children}</div>
        <video
          className="absolute inset-0 z-0 size-full object-cover"
          src="/video/black.webm"
          muted
          autoPlay
          loop
          preload={eager ? 'auto' : 'none'}
        ></video>
      </div>
    </div>
  );
}
