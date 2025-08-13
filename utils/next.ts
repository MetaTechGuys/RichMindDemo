export type PagePropsWithParams<K extends string> = {
  params: Promise<Record<K, string>>;
};

export type PagePropsWithOptionalParams<K extends string> = {
  params: Promise<Record<K, string[]>>;
};

export interface IdProps {
  id: number;
}

export interface DataProps<T> {
  data: T;
}

export interface ListProps<T> {
  list: T[];
}

export interface ValueProps<T> {
  value?: T;
}

export type TreeData<T> = {
  parent?: TreeData<T>;
  children?: TreeData<T>;
} & T;
