'use client';
import { ComponentProps, PropsWithChildren } from 'react';
import * as RPV from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

// import { PhotoProvider, PhotoView } from 'react-photo-view'

export function PhotoProvider({ children }: PropsWithChildren) {
  return <RPV.PhotoProvider>{children}</RPV.PhotoProvider>;
}

export function PhotoView({ children, ...props }: ComponentProps<typeof RPV.PhotoView>) {
  return <RPV.PhotoView {...props}>{children}</RPV.PhotoView>;
}
