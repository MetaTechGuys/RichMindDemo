import { PropsWithChildren } from 'react';

export function NoticeSection({ children }: Readonly<PropsWithChildren>) {
  return (
    <div className="size-full p-24">
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
