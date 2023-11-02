import { useEffect, useRef, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

const RoomCard = ({ item }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const trigger = useRef(null);
  const modal = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!modal.current) return;
      if (
        !modalOpen ||
        modal.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setModalOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!modalOpen || keyCode !== 27) return;
      setModalOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });
  return (
    <div className="mb-4 p-0 sm:p-4 md:w-full">
      {" "}
      {/* Card container */}
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-lg">
        {/* :CARD IMAGE */}
        <LazyLoadImage
          className="md:h-72 w-full object-cover object-center hover:scale-105 duration-300 ease-in-out"
          src={item.imageURL[0]}
          alt="blog"
        />

        {/* :CARD CATEGORY */}
        <h2 className="pt-4 pb-1 px-6 inline-block text-xs title-font font-semibold text-red-400 uppercase tracking-widest cursor-pointer hover:font-bold">
          {item.type}
        </h2>

        {/* :CARD BODY */}
        <div className="py-1 px-6">
          {/* ::Card title */}
          <h1 className="mb-3 font-agbalumo inline-block title-font text-xl font-extrabold text-gray-800 tracking-wide cursor-pointer">
            {item.name}
          </h1>
          {/* ::Card excerpt */}
          <p className="line-clamp-6 mb-3 overflow-hidden leading-relaxed text-gray-500 cursor-pointer">
            {item.description}
          </p>
        </div>

        {/* :CARD FOOTER */}
        <div className="pt-4 pb-4 px-6 flex justify-between items-center flex-wrap">
          <p className="text-gray-600">
            Per Day Rent : <span className="text-amber-600">${item.rent}</span>
          </p>

          <>
            <div className="">
              <button
                ref={trigger}
                onClick={() => setModalOpen(true)}
                className="px-6 py-2.5  text-center text-white bg-black border-2 border-black rounded-full inline-flex hover:bg-transparent hover:border-black hover:font-agbalumo hover:text-black hover:scale-110 duration-300 ease-in-out focus:outline-none lg:w-auto focus-visible:outline-black text-sm focus-visible:ring-black"
              >
                View Details
              </button>
              <div
                className={`fixed left-0 top-0 flex h-full min-h-screen w-full items-center justify-center bg-dark/90 px-4 py-5 ${
                  modalOpen ? "block" : "hidden"
                }`}
              >
                <div
                  ref={modal}
                  onFocus={() => setModalOpen(true)}
                  onBlur={() => setModalOpen(false)}
                  className="w-full max-w-[570px] rounded-[20px] bg-black text-white px-8 py-12 text-center dark:bg-dark-2 md:px-[70px] md:py-[60px]"
                >
                  <h3 className="pb-[18px] text-xl font-semibold text-dark dark:text-white sm:text-2xl">
                    {item.name}
                  </h3>
                  <span
                    className={`mx-auto mb-6 inline-block h-1 w-[90px] rounded bg-primary`}
                  ></span>
                  <div>
                    <>
                      <Swiper
                        navigation={true}
                        modules={[Navigation]}
                        className="mySwiper"
                      >
                        <SwiperSlide>
                          <LazyLoadImage src={item.imageURL[0]}></LazyLoadImage>
                        </SwiperSlide>
                        <SwiperSlide>
                          <LazyLoadImage src={item.imageURL[1]}></LazyLoadImage>
                        </SwiperSlide>
                        <SwiperSlide>
                          <LazyLoadImage src={item.imageURL[2]}></LazyLoadImage>
                        </SwiperSlide>
                      </Swiper>
                    </>
                  </div>
                  <p className="my-5 text-gray-400 font-agbalumo">
                    {item.description}
                  </p>
                  <div className="-mx-3 text-center mt-10 flex flex-wrap">
                    <div className="w-1/2 px-3">
                      <button
                        onClick={() => setModalOpen(false)}
                        className="block w-full rounded-md border border-stroke p-3 text-center text-base font-medium text-dark transition hover:border-white hover:bg-white hover:text-black hover:scale-105 duration-300 ease-in-out hover:font-agbalumo dark:text-white"
                      >
                        Cancel
                      </button>
                    </div>
                    <div className="w-1/2 px-3">
                      <Link to={`/details/${item._id}`}>
                        <button className="block w-full rounded-md border border-stroke p-3 text-center text-base font-medium text-dark transition hover:border-white hover:bg-white hover:text-black hover:scale-105 duration-300 ease-in-out hover:font-agbalumo dark:text-white">
                          <a href={`/#`}> View Details </a>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
