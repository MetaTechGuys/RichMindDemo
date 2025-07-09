'use client';
import { Icon, Text } from '@/atoms';
import contacts from '@/mock-data/contacts';
import { motion } from 'motion/react';

export default function Footer() {
  // const [ref, springs] = useInView(() => ({
  //   from: { zoom: 2, opacity: 0 },
  //   to: { zoom: 1, opacity: 1 },
  // }));
  return (
    <footer className="dark text-foreground bg-background w-full">
      <div className="container mx-auto grid-cols-7 py-12 text-center sm:grid sm:text-start">
        <div className="col-span-3 flex h-32 flex-col items-center">
          <motion.div animate={{ scale: 1, opacity: 1 }} initial={{ scale: 2, opacity: 0 }}>
            <Text as="h1" className="mb-4 text-3xl" uppercase nowrap>
              high end
            </Text>
          </motion.div>
          <div className="flex gap-8">
            <a href="#" className="size-8 rounded bg-[#25d366] p-1">
              <Icon name="whatsapp" className="size-full" />
            </a>
            <a
              href="#"
              className="size-8 rounded bg-gradient-to-bl from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] p-1"
            >
              <Icon name="instagram" className="size-full" />
            </a>
          </div>
        </div>
        <div className="col-span-2 h-32">
          <Text as="h2" className="underline" cap>
            locations
          </Text>
          {contacts.phone ? (
            <div className="mt-5">
              <a href={`tel:${contacts.phone}`} className="font-title block">
                <Text cap className="inline-flex items-center gap-2 text-sm">
                  {contacts.phone}
                </Text>
              </a>
            </div>
          ) : null}
        </div>
        <div className="col-span-2 h-32">
          <Text as="h2" className="underline" cap>
            contact us
          </Text>
          <div className="mt-5">
            <a href="#" className="font-title block">
              <Text cap className="inline-flex items-center gap-2 text-sm">
                media fact sheet
              </Text>
            </a>
            <a href="#" className="font-title block">
              <Text cap className="inline-flex items-center gap-2 text-sm">
                sign up
              </Text>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
