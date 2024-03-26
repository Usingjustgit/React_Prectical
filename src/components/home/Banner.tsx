"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// import FlexMovieItems from "./FlexMovieItems";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="relative w-full">
      <Swiper
        direction="horizontal"
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        speed={1000}
        modules={[Autoplay]}
        className="w-full h-48 xl:h-96 lg:h-64 bg-dry "
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {[1, 2, 3, 4, 5, 6].map((movie, index) => (
          <SwiperSlide key={index} className="relative rounded overflow-hidden">
            <img
              src="/images/banner.png"
              alt="banner"
              className="w-full h-full object-cover"
            />
            <div className="absolute linear-bg xl:pl-52 sm:pl-32 pl-8 top-0 bottom-0 right-0 left-0 flex flex-col justify-center lg:gap-8 md:gap-5 gap-4">
              <h1 className="xl:text-4xl truncate capitalize font-sans sm:text-2xl text-xl font-bold">
                "movie.name"
              </h1>
              <div className="flex gap-5 items-center text-dryGray">
                {/* <FlexMovieItems movie={movie} /> */}
              </div>
              <div className="flex gap-5 items-center">
                <Link
                  href="/movies"
                  className="bg-subMain hover:text-main transition text-white px-8 py-3 rounded font-medium sm:text-sm text-xs"
                >
                  View More
                </Link>
                <button className="bg-white hover:text-subMain transitions text-white px-6 py-3 rounded text-sm bg-opacity-30 ">
                  <FaHeart />
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
