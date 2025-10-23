import Image from "next/image";
import Button from "../components/Button";
import Imagen2 from "../assets/imagen2.png"

export default function HomeHeader() {
  return (
    <header className='h-screen w-full flex flex-col items-center justify-center border-b-2'>
      <div className='flex flex-col lg:flex-row w-full h-full pt-10'>
        <div className='w-full lg:w-[60%] h-full border-b-2 py-16 lg:py-0 lg:border-b-0 lg:border-r flex flex-col justify-center items-center gap-8'>
          <h1 className='font-archivo text-4xl sm:text-5xl md:text-6xl'>
            <span className='tracking-widest'>DISCOVER</span>
            <br />
            YOUR STYLE
          </h1>
          <p className='font-body text-foreground text-base text-center lg:text-lg lg:text-left'>
            Vitreous is the new era of design. Bold, brutalist clothing for the
            future.
          </p>
          <Button type='navigation' label='Explore' href='/' />
        </div>
        <div className='bg-sunny w-full lg:w-[40%] h-full border-b-2 lg:border-b-0 lg:border-l flex justify-center items-center'>
          <Image
            src={Imagen2}
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
