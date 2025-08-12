import { companies } from '@/data';
import { PagePropsWithParams } from '@/utils/next-tools';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export default async function CompanyPage({ params }: PagePropsWithParams<'slug'>) {
  const { slug } = await params;
  if (!slug) return notFound();
  const company = companies.find((c) => c.slug === slug);
  if (!company) return notFound();

  return (
    <main className="flex min-h-screen items-center gap-10 p-20 max-md:flex-col">
      <section className="prose">
        <Image src={company.image} alt={company.title} className="max-w-sm" />
      </section>
      <section className="prose">{company.content}</section>
    </main>
  );
}
