"use client";

import { Scrollbar, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
import { listClients } from "../data/clients";
import { generateSlug } from "../lib/utils";
import "swiper/css";

export default function Work() {
  return (
    <section>
      <div className="pt-28 pb-18">
        <h1 className="text-5xl text-center mx-auto p-4 md:px-8 md:text-7xl lg:w-2/3 tracking-wider">
          Elegant Photography for Life&apos;s Finest Moments
        </h1>
      </div>
      <div className="py-12">
        <Swiper
          modules={[Scrollbar, Autoplay]}
          speed={2000}
          loop={true}
          autoplay={{
            delay: 0,
            pauseOnMouseEnter: false,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          spaceBetween={8}
          slidesPerView={5}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
        >
          {listClients.map((image, index) => (
            <SwiperSlide key={index}>
              <Link href={`/work/${generateSlug(image.title)}`}>
                <figure className="hover:scale-90 transition-all duration-300 ease-in-out">
                  <div className="relative h-120">
                    <Image
                      src={image.url}
                      alt="image"
                      fill
                      className="object-cover "
                    />
                  </div>
                  <figcaption>{image.title}</figcaption>
                </figure>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
