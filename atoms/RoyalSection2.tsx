'use client';
import { cn } from '@/utils/jsx-tools';
import { ComponentProps, CSSProperties, useMemo } from 'react';

export function RoyalSection2({
  children,
  className,
  innerClassName,
  size = 150,
  full,
  ...props
}: ComponentProps<'section'> & {
  size?: number;
  innerClassName?: string;
  double?: boolean;
  full?: boolean;
}) {
  return (
    <section className={cn('relative', className)} {...props}>
      {full ? children : null}
      <div
        className={cn(
          'text-gold-dark absolute inset-0 z-1 grid size-full grid-cols-[min-content_1fr_min-content] grid-rows-[min-content_1fr_min-content]',
          innerClassName,
        )}
      >
        <Corner className="" size={size} />
        <BorderNS className="w-full" size={size} />
        <Corner className="rotate-90" size={size} />
        <BorderEW className="h-full" size={size} />
        {full ? <span></span> : (children ?? <span></span>)}
        <BorderEW className="h-full rotate-180 justify-self-end" size={size} />
        <Corner className="rotate-270" size={size} />
        <BorderNS className="w-full rotate-180 self-end" size={size} />
        <Corner className="rotate-180" size={size} />
      </div>
    </section>
  );
}

function Corner({ className, size = 150, ...props }: ComponentProps<'div'> & { size?: number }) {
  const style = useMemo<CSSProperties>(
    () => ({ width: size, height: size, backgroundSize: `${size}px ${size}px` }),
    [size],
  );
  return (
    <div
      className={cn(className, 'bg-[url(/border/corner.webp)] bg-no-repeat')}
      {...props}
      style={style}
    />
  );
}

function BorderNS({ className, size, ...props }: ComponentProps<'div'> & { size?: number }) {
  const style = useMemo<CSSProperties>(
    () => ({ width: '100%', height: size, backgroundSize: `1043px ${size}px` }),
    [size],
  );
  return <div className={cn(className, 'bg-[url(/border/ns.webp)]')} {...props} style={style} />;
}

function BorderEW({ className, size, ...props }: ComponentProps<'div'> & { size?: number }) {
  const style = useMemo<CSSProperties>(
    () => ({ width: size, height: '100%', backgroundSize: `${size}px 1043px` }),
    [size],
  );
  return <div className={cn(className, 'bg-[url(/border/ew.webp)]')} {...props} style={style} />;
}
