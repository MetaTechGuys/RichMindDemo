import IcoMoon, { IcoMoonProps } from 'react-icomoon';
import iconSet from './selection.json';
import { IconNames } from './icon.d';
import { cn } from '@/utils/jsx-tools';

interface IconProps extends Omit<IcoMoonProps, 'icon' | 'iconSet'> {
  name: IconNames;
}

export function Icon({ name, className, ...props }: IconProps) {
  return <IcoMoon iconSet={iconSet} icon={name} {...props} className={cn('size-4', className)} />;
}
