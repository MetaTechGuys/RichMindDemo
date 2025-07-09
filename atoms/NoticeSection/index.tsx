import { MEDIA, POSTERS } from '@/utils/constants';
import { cn } from '@/utils/jsx-tools';
import { ComponentProps, PropsWithChildren } from 'react';

export function NoticeSection({
  children,
  className,
  neon,
  eager,
}: Readonly<PropsWithChildren<ComponentProps<'div'> & { neon?: boolean; eager?: boolean }>>) {
  return (
    <div className={cn('size-full py-8 sm:py-12 md:py-16 lg:py-20', className)}>
      <div className={cn('relative overflow-hidden rounded-2xl', { 'neon-box': neon })}>
        <div className="relative z-10">{children}</div>
        <video
          className="absolute inset-0 z-0 size-full object-cover"
          src={MEDIA.black}
          poster={POSTERS.blackDot}
          muted
          autoPlay
          loop
          preload={eager ? 'auto' : 'none'}
        ></video>
      </div>
    </div>
  );
}
