import { CompanyData } from '@/data';
import { WithContent } from '@/data/utils';
import { DataProps } from '@/utils/next';
import Image from 'next/image';

export default function Design1Client({ data }: DataProps<WithContent<CompanyData>>) {
  return (
    <main className="">
      <section className="relative inset-0 bottom-auto z-1 -mb-7 h-100">
        <Image src={data.cover} alt={data.title} className="size-full object-contain object-left" />
      </section>
      <section className="prose relative z-1 container! mx-auto space-y-4 p-4 pt-0">
        {data.content}
      </section>
    </main>
  );
}
