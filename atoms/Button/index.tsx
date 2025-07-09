import { cn } from '@/utils/jsx-tools';
import { ComponentProps, PropsWithChildren } from 'react';
import './button.style.css';
import Link, { LinkProps } from 'next/link';

interface ButtonProps extends ComponentProps<'button'> {
  variant?: 'primary' | 'outline' | 'secondary';
  innerClassName?: string;
}

interface LinkBtnProps extends LinkProps {
  variant?: 'primary' | 'outline' | 'secondary';
  className?: string;
  innerClassName?: string;
}

export function Button({
  children,
  variant,
  className,
  innerClassName,
  ...props
}: PropsWithChildren<ButtonProps | LinkBtnProps>) {
  const cls = cn(
    'btn',
    {
      'btn-primary': variant === 'primary',
      'btn-secondary': variant === 'secondary',
      'btn-outline': variant === 'outline',
    },
    className,
  );

  return !('href' in props) ? (
    <button className={cls} {...props}>
      <div className={cn('btn-inner', innerClassName)}>{children}</div>
    </button>
  ) : typeof props.href === 'string' && props.href.startsWith('http') ? (
    <a className={cls} {...props} href={props.href}>
      <div className={cn('btn-inner', innerClassName)}>{children}</div>
    </a>
  ) : (
    <Link className={cls} {...props}>
      <div className={cn('btn-inner', innerClassName)}>{children}</div>
    </Link>
  );
}

interface LinkBtnProps extends LinkProps {
  variant?: 'primary' | 'outline' | 'secondary';
  className?: string;
  innerClassName?: string;
}
