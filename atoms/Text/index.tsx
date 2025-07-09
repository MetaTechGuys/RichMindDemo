import { cn } from '@/utils/jsx-tools';
import { PropsWithChildren } from 'react';

type Tags = 'p' | 'span' | 'h1' | 'h2' | 'h3';

interface TextBaseProps extends PropsWithChildren {
  className?: string;
  truncate?: true;
  nowrap?: true;
  bold?: true;
  uppercase?: true;
  cap?: true;
  as?: Tags;
}

const baseClassNames: Record<Tags, string> = {
  h1: 'text-2xl font-title capitalize',
  h2: 'text-xl font-title capitalize',
  h3: 'text-md font-title capitalize',
  span: '',
  p: '',
};

export function Text({
  as: Tag = 'span',
  className,
  children,
  truncate,
  nowrap,
  uppercase,
  bold,
  cap,
}: TextBaseProps) {
  return (
    <Tag
      className={cn(
        baseClassNames[Tag],
        className,
        cap ? 'capitalize' : '',
        bold ? 'font-bold' : '',
        uppercase ? 'uppercase' : '',
        truncate ? 'truncate' : '',
        nowrap ? 'text-nowrap' : '',
      )}
    >
      {children}
    </Tag>
  );
}
