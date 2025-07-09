import { cn } from '@/utils/jsx-tools';
import { ComponentProps, PropsWithChildren } from 'react';

interface ButtonProps extends ComponentProps<'button'> {
  outline?: true;
}
export function Button({ children, outline, className }: PropsWithChildren<ButtonProps>) {
  return (
    <button
      className={cn(
        'px-3 py-1 font-sans font-bold capitalize',
        outline ? 'border-primary text-primary border bg-white' : 'bg-primary text-white',
        className,
      )}
    >
      {children}
    </button>
  );
}
