import { ComponentType, createElement, ReactElement } from 'react';

type MDXWith<T> = T & { default: ComponentType };
export type WithContent<T> = T & { content?: ReactElement };

export function mdxWithData<T>(mdx: typeof import('*.mdx')): WithContent<T> {
  const { default: C, ...data } = mdx as unknown as MDXWith<T>;

  return {
    ...(data as unknown as T),
    content: createElement(C),
  };
}
