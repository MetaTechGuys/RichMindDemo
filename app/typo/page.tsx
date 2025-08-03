import fontsImg from '@/public/typo-fonts.jpg';
import Image from 'next/image';

export default function TypoPage() {
  return (
    <div className="relative h-screen w-screen">
      <Image src={fontsImg} alt="" className="absolute -z-1" width={958} />
      <div className="py-21 ps-60 text-red-600">
        <h1 className="font-display text-[70px] leading-18 font-bold">Richmind</h1>
        <h2 className="font-display text-[70px] leading-18">Richmind</h2>
        <div className="font-body ps-5 pt-7 text-[25px]">Richmind</div>
      </div>
    </div>
  );
}
