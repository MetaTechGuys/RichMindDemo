import { cn } from '@/utils/jsx-tools';
import { ComponentProps, PropsWithChildren } from 'react';

export function NoticeSection({
  children,
  className,
}: Readonly<PropsWithChildren<ComponentProps<'div'>>>) {
  return (
    <div className={cn('size-full p-8 sm:p-12 md:p-16 lg:p-20', className)}>
      <div className="relative overflow-hidden rounded-2xl">
        <div className="relative z-10">{children}</div>
        <video
          className="absolute inset-0 z-0 size-full object-cover"
          src="/video/black.webm"
          muted
          autoPlay
          loop
        ></video>
      </div>
    </div>
  );
}
