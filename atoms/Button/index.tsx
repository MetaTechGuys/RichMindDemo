import { cn } from '@/utils/jsx-tools';
import { ComponentProps, PropsWithChildren } from 'react';
import './button.style.css';

interface ButtonProps extends ComponentProps<'button'> {
  variant?: 'primary' | 'outline' | 'secondary';
  innerClassName?: string;
}
export function Button({
  children,
  variant,
  className,
  innerClassName,
  ...props
}: PropsWithChildren<ButtonProps>) {
  return (
    <button
      className={cn(
        'btn',
        {
          'btn-primary': variant === 'primary',
          'btn-secondary': variant === 'secondary',
          'btn-outline': variant === 'outline',
        },
        className,
      )}
      {...props}
    >
      <div className={cn('btn-inner', innerClassName)}>{children}</div>
    </button>
  );
}
