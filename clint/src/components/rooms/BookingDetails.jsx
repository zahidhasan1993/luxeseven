import { LazyLoadImage } from "react-lazy-load-image-component";
import { useLoaderData, useParams } from "react-router-dom";
import moment from "moment";
import axios from "axios";
import { toast } from "react-toastify";
import useAuth from "../../customhooks/useAuth";

const BookingDetails = () => {
  const item = useLoaderData().data;
  const { user } = useAuth();
  const { checkIn, checkOut } = useParams();
  const startMoment = moment(checkIn, "DD-MM-YYYY");
  const endMoment = moment(checkOut, "DD-MM-YYYY");
  const differenceInDays = endMoment.diff(startMoment, "days");
  const totalRent = differenceInDays * item.rent;

  const confirmPay = () => {
    const data = {
      room: item.name,
      roomID: item._id,
      userEmail: user.email,
      checkIn,
      checkOut,
      cost: totalRent,
      totalDays: differenceInDays,
      transectionID: "1234",
    };

    axios.post("http://localhost:5000/bookings", data).then((data) => {
      if (data.data.acknowledged) {
        toast.success("😇 Booking Successful!!!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        console.log(data.data);
      }
    });
  };

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
        <p className="font-agbalumo">
          Name: <span className="font-serif">{item.name}</span>
        </p>
        <p className="font-agbalumo">
          Max Count: <span className="font-serif">{item.maxCount}</span>
        </p>{" "}
        <p className="font-agbalumo">
          Phone: <span className="font-serif">{item.phone}</span>
        </p>{" "}
        <p className="font-agbalumo">
          Type: <span className="font-serif">{item.type}</span>
        </p>{" "}
        <p className="font-agbalumo">
          Check In: <span className="font-serif">{checkIn}</span>
        </p>{" "}
        <p className="font-agbalumo">
          Check Out: <span className="font-serif">{checkOut}</span>
        </p>
        <hr className="divide-y divide-black" />
        <p className="font-agbalumo">
          Rent Per Day: <span className="font-serif">{item.rent}</span>
        </p>
        <p className="font-agbalumo">
          Total Days: <span className="font-serif">{differenceInDays}</span>
        </p>
        <p className="font-agbalumo">
          Total Amount: <span className="font-serif">${totalRent}</span>
        </p>
        <button
          onClick={confirmPay}
          className="bg-black py-2 w-full text-white hover:scale-105 duration-300 ease-linear hover:bg-white hover:text-black hover:font-agbalumo"
        >
          Pay
        </button>
      </div>
    </div>
  );
};

export default BookingDetails;
