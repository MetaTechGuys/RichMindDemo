'use client';
import footerBanner from '@/assets/img/banner-photo-font-02.png';
import { Button } from '@/atoms';

import { CSSProperties } from 'react';

export default function Footer() {
  // const [ref, springs] = useInView(() => ({
  //   from: { zoom: 2, opacity: 0 },
  //   to: { zoom: 1, opacity: 1 },
  // }));
  return (
    <div className="bg-black pt-24 pb-48" style={footerStyle}>
      <div className="mx-auto grid grid-cols-3 gap-12 md:px-48">
        <div className="font-display flex flex-col gap-3">
          <h4 className="mb-10 text-3xl">Our Headquarters</h4>
          <div className="flex gap-4">
            <Button className="text-sm font-normal">Corporate</Button>
            <Button className="text-sm font-normal">Mena Regional</Button>
          </div>
          <div className="flex gap-4 text-xs">
            <span>207 Regent Street.London W1B 3HH, United Kingdom (Main)</span>
          </div>
          <div className="flex gap-4 text-xs">
            <span>Office 301, 3rd Floor Vision Tower, Business Bay Dubai, UAE</span>
          </div>
          <div className="flex gap-4 text-xs">
            <span>London@RichMindholding.com</span>
          </div>
          <div className="flex gap-4 text-xs">
            <span>+44 20 76 92 56 76</span>
          </div>
          <div className="flex gap-4">
            <div className="size-11 rounded-full border-2 border-white"></div>
            <div className="size-11 rounded-full border-2 border-white"></div>
            <div className="size-11 rounded-full border-2 border-white"></div>
            <div className="size-11 rounded-full border-2 border-white"></div>
          </div>
        </div>
        <div className="font-display flex flex-col gap-3">
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
        <div className="font-display flex flex-col gap-3">
          <h4 className="mb-10 text-3xl">Newsletter</h4>
          <p className="w-xs">
            Stay updated with the latest news and developments from Rich Mind Holding.
          </p>
          <div>
            <label htmlFor="footer-newslater">Your Email</label>
            <div className="flex gap-2">
              <input
                id="footer-newslater"
                type="text"
                className="border-0 border-b-2 border-white"
              />
            </div>
            <Button className="text-sm font-normal">Submit</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

const footerStyle: CSSProperties = {
  backgroundColor: 'black',
  background: `black url(${footerBanner.src}) no-repeat center bottom`,
};

// const
