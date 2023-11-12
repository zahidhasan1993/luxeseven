import { LazyLoadImage } from "react-lazy-load-image-component";
import { useLoaderData } from "react-router-dom";
import { BookingProvider } from "../../providers/DateProvider";
import { useContext } from "react";

const BookingDetails = () => {
  const item = useLoaderData().data;
  const { checkIn, checkOut } = useContext(BookingProvider);
  console.log(checkIn, checkOut);
  return (
    <div className="my-20 md:flex md:gap-10">
      <div className="md:w-1/2">
        <LazyLoadImage
          src={item.imageURL[0]}
          className="md:h-96 w-full md:col-span-2 hover:scale-105 duration-300 ease-in-out"
        ></LazyLoadImage>
        <div className="md:grid md:grid-cols-2 md:gap-5 my-5">
          <LazyLoadImage
            src={item.imageURL[1]}
            className="md:h-96 w-full mb-5 md:mb-0 hover:scale-105 duration-300 ease-in-out"
          ></LazyLoadImage>
          <LazyLoadImage
            src={item.imageURL[2]}
            className="md:h-96 w-full hover:scale-105 duration-300 ease-in-out"
          ></LazyLoadImage>
        </div>
      </div>
      <div className="text-gray-600  text-2xl space-y-5 md:w-1/2">
        <p className="">Name: {item.name}</p>
        <p>Max Count : {item.maxCount}</p>
        <p>Phone : {item.phone}</p>
        <p>Type : {item.type}</p>
        <p>Rent per Day : ${item.rent}</p>

        <p>Check In : {checkIn}</p>
        <p>Check Out : {checkOut}</p>

        <button className="bg-black py-2 w-full text-white hover:scale-105 duration-300 ease-linear hover:bg-white hover:text-black hover:font-agbalumo">
          Pay
        </button>
      </div>
    </div>
  );
};

export default BookingDetails;
