import { StaticImageData } from "next/image";
import Image from "next/image";
import Button from "./Button";

interface CardProps {
  title: string;
  price: number;
  discount?: number;
  image: StaticImageData;
}

export default function ProductCard({
  title,
  price,
  discount,
  image,
}: CardProps) {
  return (
    <div className='bg-white flex flex-col p-6 border shadow-[5px_5px_0_0_#000000] w-full min-h-[360px] font-ibm'>
      <header className='pb-2'>
        <h3 className='text-base font-archivo mb-1'>{title}</h3>
        <div className='flex gap-1.5 items-center'>
          {discount && (
            <span className='text-xs line-through text-gray-600'>
              ${discount}
            </span>
          )}
          <span className='text-base font-semibold'>${price}</span>
        </div>
      </header>
      <div className='w-full flex-grow relative mb-4'>
        <Image src={image} alt={title} fill className='object-cover' />
      </div>
      <footer>
        <Button
          type='navigation'
          label='Buy Now'
          href='/'
          className='w-full text-center'
        />
      </footer>
    </div>
  );
}
