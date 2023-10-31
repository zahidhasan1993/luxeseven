import img1 from "../../assets/rooms/140127103201-peninsula-shanghai-rendering.jpg"
import img2 from "../../assets/rooms/download.jpeg"
import img3 from "../../assets/rooms/images.jpeg"
import img4 from "../../assets/rooms/trump-hotel-chicago-illinois-usa.webp"
import hotelImg from "../../assets/rooms/a.jpg"
const Offer = () => {
  return (
    <div className="w-full bg-white text-gray-700">
      {/* CONTAINER */}
      <div className="mx-auto py-10 px-4 w-full max-w-7xl grid grid-cols-2">
        {/* :ILLUSTRATION */}
        <div
          data-aos="fade-left"
          className="order-1 lg:order-1 col-span-1 lg:row-span-2 relative w-full hidden sm:block"
        >
          <img
            src={hotelImg}
            alt=""
            className="absolute top-0 left-0 w-full h-full object-contain opacity-80 hover:scale-110 duration-300 ease-linear"
          />
        </div>

        {/* :TITLE */}
        <div
          data-aos="fade-up"
          className="order-2 lg:order-2 col-span-full sm:col-span-1 row-span-1 mb-8 w-full space-y-4 text-center sm:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-semibold font-agbalumo">Why Choose Us?</h2>
          <p className="text-sm">
            We are one of the biggest hotel chain in south asia. With a tag of seven star hotel. We offer many things for our customers.
          </p>
        </div>

        {/* :FEATURES */}
        <dl
          data-aos="fade-right"
          className="order-3 col-span-full lg:col-span-1 row-span-1 w-full grid grid-cols-4 gap-6"
        >
          <div className="col-span-full sm:col-span-2 md:col-span-1 lg:col-span-full w-full flex flex-col lg:flex-row">
            <span className="flex-shrink-0 mx-auto lg:mx-0 p-2 w-full sm:w-auto max-w-xs inline-flex justify-center items-center rounded-xl bg-black">
              <img src={img1} alt="" className="w-10 lg:w-14 h-10 lg:h-14" />
              <dt className="ml-2 sm:hidden text-white font-semibold">
                Couple rooms
              </dt>
            </span>
            <div className="lg:ml-4 mx-auto max-w-sm inline-flex flex-col text-center lg:text-left">
              {/* Feature title */}
              <dt className="hidden sm:block font-semibold">Couple rooms</dt>
              {/* Description */}
              <dd className="mt-2 text-sm">
                We have delux couple rooms for newly married couples.
              </dd>
            </div>
          </div>

          {/* ::Feature 2 -> 24/7 Support */}
          <div className="col-span-full sm:col-span-2 md:col-span-1 lg:col-span-full w-full flex flex-col lg:flex-row">
            {/* Icon */}
            <span className="flex-shrink-0 mx-auto lg:mx-0 p-2 w-full sm:w-auto max-w-xs inline-flex justify-center items-center rounded-xl bg-black">
              <img src={img2} alt="" className="w-10 lg:w-14 h-10 lg:h-14" />
              <dt className="ml-2 sm:hidden text-white font-semibold">
                Single Rooms
              </dt>
            </span>
            <div className="lg:ml-4 mx-auto max-w-sm inline-flex flex-col text-center lg:text-left">
              {/* Feature title */}
              <dt className="hidden sm:block font-semibold">Single Rooms</dt>
              {/* Description */}
              <dd className="mt-2 text-sm">
                If you want to stay alone we have best deal for you.
              </dd>
            </div>
          </div>

          {/* ::Feature 3 -> Special Discount  */}
          <div className="col-span-full sm:col-span-2 md:col-span-1 lg:col-span-full w-full flex flex-col lg:flex-row">
            {/* Icon */}
            <span className="flex-shrink-0 mx-auto lg:mx-0 p-2 w-full sm:w-auto max-w-xs inline-flex justify-center items-center rounded-xl bg-black">
              <img src={img3} alt="" className="w-10 lg:w-14 h-10 lg:h-14" />
              <dt className="ml-2 sm:hidden text-white font-semibold">
                Friend Forever
              </dt>
            </span>
            <div className="lg:ml-4 mx-auto max-w-sm inline-flex flex-col text-center lg:text-left">
              {/* Feature title */}
              <dt className="hidden sm:block font-semibold">Friend Forever</dt>
              {/* Description */}
              <dd className="mt-2 text-sm">
               For those are traveling and enjoying with buddys we have their back.
              </dd>
            </div>
          </div>

          {/* ::Feature 4 -> Tour Guide */}
          <div className="col-span-full sm:col-span-2 md:col-span-1 lg:col-span-full w-full flex flex-col lg:flex-row">
            {/* Icon */}
            <span className="flex-shrink-0 mx-auto lg:mx-0 p-2 w-full sm:w-auto max-w-xs inline-flex justify-center items-center rounded-xl bg-black">
              <img src={img4} alt="" className="w-10 lg:w-14 h-10 lg:h-14" />
              <dt className="ml-2 sm:hidden text-white font-semibold">
                Comfortable
              </dt>
            </span>
            <div className="lg:ml-4 mx-auto max-w-sm inline-flex flex-col text-center lg:text-left">
              {/* Feature title */}
              <dt className="hidden sm:block font-semibold">Comfortable</dt>
              {/* Description */}
              <dd className="mt-2 text-sm">
                A huge collection of comfortable rooms are available.
              </dd>
            </div>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default Offer;
