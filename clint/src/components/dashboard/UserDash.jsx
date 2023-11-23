import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useAuth from "../../customhooks/useAuth";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const UserDash = () => {
  const { user } = useAuth();
  //   console.log(user.email);
  const [bookings, setBookings] = useState([]);
  const [reset,setReset] = useState(false)
  useEffect(() => {
    axios.get(`https://luxeseven-server.vercel.app/bookings/${user.email}`).then((data) => {
      //   console.log(data);
      setBookings(data.data);
    });
  }, [setBookings, user.email,reset]);
  // console.log(bookings);
  const cancelBooking = (bId, rId) => {
    console.log(rId, bId);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#000000",
      cancelButtonColor: "#000000",
      confirmButtonText: "Yes, Cancel it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .post("https://luxeseven-server.vercel.app/cencelBooking", { bId, rId })
          .then((data) => {
            console.log(data);
            if (
              data.data.room.modifiedCount > 0 &&
              data.data.updatedBooking.modifiedCount > 0
            ) {
              Swal.fire({
                title: "Canceled!",
                text: "Your booking has been canceled.",
                icon: "success",
              });
              setReset((p) => !p);
            }
          });
      }
    });
  };
  return (
    <div className="my-20">
      <Tabs classID="">
        <TabList className="text-xl text-center" style={{ border: "none" }}>
          <Tab>User Info</Tab>
          <Tab>Bookings</Tab>
        </TabList>

        <div className="mt-10">
          <TabPanel>
            <div className="relative p-4 w-full bg-white rounded-lg overflow-hidden shadow hover:shadow-md cursor-pointer">
              <h3 className="text-base md:text-xl font-medium text-gray-800">
                {user.displayName}
              </h3>

              <p className="mt-4 text-base md:text-lg text-gray-600">
                Email : {user.email}
              </p>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-3 gap-5">
              {bookings.map((booking) => (
                <div key={booking._id} className="">
                  <div className="border p-20 rounded-md text-2xl my-10 space-y-3 shadow-2xl hover:shadow">
                    <h1>Room Name : {booking.room}</h1>
                    <h1>Total Days : {booking.totalDays}</h1>
                    <h1>
                      Cost :{" "}
                      <span className="text-amber-600">${booking.cost}</span>
                    </h1>
                    <h1 className="text-gray-600">
                      Booking Dates :{" "}
                      <span className="text-lg">{booking.checkIn}</span>
                      <span className="text-lg px-2">to</span>
                      <span className="text-lg "> {booking.checkOut}</span>
                    </h1>
                    <h1 className="pb-8">Status : {booking.status}</h1>
                    {
                        booking.status === 'canceled' ? <button
                        onClick={() => cancelBooking(booking._id, booking.roomID)}
                        className="bg-gray-500 py-2 w-full text-white  rounded-md"
                        disabled
                      >
                        Cancel Booking
                      </button> : <button
                      onClick={() => cancelBooking(booking._id, booking.roomID)}
                      className="bg-black py-2 w-full text-white hover:scale-105 duration-300 ease-linear hover:bg-white hover:text-black hover:font-agbalumo hover:shadow-2xl hover:border hover:border-black rounded-md"
                    >
                      Cancel Booking
                    </button>
                    }
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
};

export default UserDash;
