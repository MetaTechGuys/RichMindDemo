'use client';
import whiteFooterBanner from '@/assets/img/banner-photo-font-01.png';
import footerBanner from '@/assets/img/banner-photo-font-02.png';
import { Button, Icon } from '@/atoms';
import { cn } from '@/utils/jsx-tools';

import { CSSProperties } from 'react';

interface FooterProps {
  secondary?: boolean;
}

export default function Footer({ secondary }: FooterProps) {
  // const [ref, springs] = useInView(() => ({
  //   from: { zoom: 2, opacity: 0 },
  //   to: { zoom: 1, opacity: 1 },
  // }));
  return (
    <div
      className={cn('overflow-x-hidden bg-black', secondary ? 'pt-12' : 'pt-24')}
      style={secondary ? secFooterStyle : footerStyle}
    >
      <div className="mx-auto grid grid-cols-1 gap-4 px-4 sm:px-8 md:grid-cols-2 md:px-12 lg:grid-cols-3 xl:px-48">
        <div className="font-display flex flex-col gap-3">
          <h4 className="mb-4 text-3xl md:mb-10">Our Headquarters</h4>
          <div className="2xs:flex-row flex max-w-md flex-col flex-wrap gap-2">
            <Button variant="primary" className="flex-1 text-sm">
              Corporate
            </Button>
            <Button variant="outline" className="flex-1 text-sm">
              Mena Regional
            </Button>
          </div>
          <div className="flex items-center gap-1 text-xs">
            <Icon name="map-pin" className="size-5" />
            <span className="truncate">
              207 Regent Street.London W1B 3HH, United Kingdom (Main)
            </span>
          </div>
          <div className="flex items-center gap-1 text-xs">
            <Icon name="map-pin" className="size-5" />
            <span className="truncate">
              Office 301, 3rd Floor Vision Tower, Business Bay Dubai, UAE
            </span>
          </div>
          <div className="flex items-center gap-1 text-xs">
            <Icon name="globe" className="size-5" />
            <span className="truncate">Info@RichMindholding.com</span>
          </div>
          <div className="flex items-center gap-1 text-xs">
            <Icon name="phone" className="size-5" />
            <span>+44 20 76 92 56 76</span>
          </div>
          <div className="xs:justify-start flex flex-wrap justify-center gap-4">
            <Button
              variant="outline"
              href="#"
              className="rounded-full!"
              innerClassName="rounded-full! flex-center! size-11! px-0! -mx-px border-2!"
            >
              <Icon name="facebook" className="size-5" />
            </Button>
            <Button
              variant="outline"
              href="#"
              className="rounded-full!"
              innerClassName="rounded-full! flex-center! size-11! px-0! -mx-px border-2!"
            >
              <Icon name="instagram" className="size-5" />
            </Button>
            <Button
              variant="outline"
              href="#"
              className="rounded-full!"
              innerClassName="rounded-full! flex-center! size-11! px-0! -mx-px border-2!"
            >
              <Icon name="linkedin" className="size-5" />
            </Button>
            <Button
              variant="outline"
              href="#"
              className="rounded-full!"
              innerClassName="rounded-full! flex-center! size-11! px-0! -mx-px border-2!"
            >
              <Icon name="logo-whatsapp" className="size-5" />
            </Button>
          </div>
        </div>
        <div className="font-display hidden flex-col gap-3 lg:flex">
          <h4 className="mb-10 text-3xl">Useful Links</h4>
          <div className="grid grid-cols-2 gap-4 underline underline-offset-4">
            <a href="#">Home</a>
            <a href="#">Overview</a>
            <a href="#">Career</a>
            <a href="#">Contact</a>
            <a href="#">Innovation and R&D</a>
            <a href="#">Sustainability</a>
            <a href="#">Investor Relation</a>
          </div>
        </div>
        <div className="font-display hidden flex-col gap-3 md:flex">
          <h4 className="mb-10 text-3xl">Newsletter</h4>
          <p className="w-xs">
            Stay updated with the latest news and developments from Rich Mind Holding.
          </p>
          <div className="mt-auto flex flex-col items-start gap-4">
            <label htmlFor="footer-newslater">Your Email</label>
            <div className="flex items-center gap-2">
              <Icon name="email" className="size-7" />
              <input
                id="footer-newslater"
                type="text"
                className="border-0 border-b-2 border-white"
              />
            </div>
            <Button variant="primary" className="text-sm">
              Submit
            </Button>
          </div>
        </div>
      </div>
      <div className="aspect-6/1 h-auto w-full"></div>
    </div>
  );
}

const footerStyle: CSSProperties = {
  backgroundColor: 'black',
  background: `black url(${footerBanner.src}) no-repeat center bottom`,
  backgroundSize: '90%',
};

const secFooterStyle: CSSProperties = {
  backgroundColor: 'black',
  background: `black url(${whiteFooterBanner.src}) no-repeat center bottom`,
  backgroundSize: '90%',
};
