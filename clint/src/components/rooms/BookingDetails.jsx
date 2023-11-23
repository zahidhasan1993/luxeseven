import { LazyLoadImage } from "react-lazy-load-image-component";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import moment from "moment";
import axios from "axios";
import Swal from "sweetalert2";
import useAuth from "../../customhooks/useAuth";
import { useEffect } from "react";
import StripeCheckout from "react-stripe-checkout";

const BookingDetails = () => {
  const item = useLoaderData().data;
  const { user, setLoader } = useAuth();
  const { checkIn, checkOut } = useParams();
  const startMoment = moment(checkIn, "DD-MM-YYYY");
  const endMoment = moment(checkOut, "DD-MM-YYYY");
  const differenceInDays = endMoment.diff(startMoment, "days");
  const totalRent = differenceInDays * item.rent;
  const stripeKey = import.meta.env.VITE_STRIPE_KEY;
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // console.log(startMoment._i);
  const handleToken = (token) => {
    // console.log(token);

    const paymentData = {
      token,
      amount: totalRent * 100,
    };
    setLoader(true);
    axios
      .post("https://luxeseven-server.vercel.app/create-payment", paymentData)
      .then((data) => {
        // console.log(data);
        if (data.data) {
          const value = {
            room: item.name,
            roomID: item._id,
            userEmail: user.email,
            checkIn,
            checkOut,
            cost: totalRent,
            totalDays: differenceInDays,
            transectionID: data.data.charge.id,
          };
          axios.post("https://luxeseven-server.vercel.app/bookings", value).then((data) => {
            if (data.data.acknowledged) {
              Swal.fire({
                icon: "success",
                title: "Yay!!",
                text: "Room Booked Successful!",
              }).then(() => {
                navigate('/')
              });
              setLoader(false);
              // console.log(data.data);
            } else {
              setLoader(false);
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
              })
              
            }
          });
          // console.log(data.data.charge);
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
      <div className="p-20 md:p-0 text-gray-600  text-2xl space-y-5 md:w-1/2">
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
          Rent Per Day: <span className="font-serif">${item.rent}</span>
        </p>
        <p className="font-agbalumo">
          Total Days: <span className="font-serif">{differenceInDays}</span>
        </p>
        <p className="font-agbalumo">
          Total Amount: <span className="font-serif">${totalRent}</span>
        </p>
        <StripeCheckout
          token={handleToken}
          stripeKey={stripeKey}
          amount={totalRent * 100} // amount in cents
          name={item.name}
        >
          <button className="bg-black py-2 w-full text-white hover:scale-105 duration-300 ease-linear hover:bg-white hover:text-black hover:font-agbalumo hover:shadow-2xl hover:border hover:border-black rounded-md mt-10">
            Pay
          </button>
        </StripeCheckout>
      </div>
    </div>
  );
};

export default BookingDetails;
