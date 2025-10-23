"use client";
import ProductCard from "../components/ProductCard";
import useEmblaCarousel from "embla-carousel-react";
import { Products } from "../utils/dummy";

export default function DisplaySection() {
  const [emblaRef] = useEmblaCarousel({ loop: false, align: "start" });
  return (
    <section className="w-full relative py-16 overflow-hidden">
      <header className=" mx-8 mb-6 flex justify-between items-center">
        <h2 className="font-archivo text-xl">
          Featuring products
        </h2>
        <p className="font-ibm text-xs text-gray-600">
          Discover and enjoy
        </p>
      </header>
      <div className='embla  w-full ml-8' ref={emblaRef}>
        <div className='embla__container flex gap-5'>
          {Products.map((product) => (
            <div
              className='embla__slide shrink-0 min-w-[300px]'
              key={product.id}
            >
              <ProductCard
                image={product.image}
                title={product.title}
                price={product.price}
                discount={product.discount}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
