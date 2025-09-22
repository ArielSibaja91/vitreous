import Image from "next/image";
import Button from "../components/Button";

export default function HomeHeader() {
  return (
    <header className='h-screen w-full flex flex-col items-center justify-center border-b-2'>
      <div className='flex w-full h-full pt-10'>
        <div className='w-[60%] h-full border-r flex flex-col justify-center items-center gap-8'>
          <h1 className='font-archivo text-4xl sm:text-5xl md:text-6xl'>
            <span className='tracking-widest'>DISCOVER</span>
            <br />
            YOUR STYLE
          </h1>
          <p className='font-body text-foreground text-lg'>
            Vitreous is the new era of design. Bold, brutalist clothing for the
            future.
          </p>
          <Button type='navigation' label='Explore' href='/' />
        </div>
        <div className='bg-sunny w-[40%] h-full border-l flex justify-center items-center'>
          <Image
            src='/imagen2.png'
            alt='vitreous'
            width={1024}
            height={1024}
            className='w-full h-full'
          />
        </div>
      </div>
    </header>
  );
}
