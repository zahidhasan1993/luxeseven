import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useAuth from "../../customhooks/useAuth";
import { useEffect, useState } from "react";
import axios from "axios";

const UserDash = () => {
  const { user } = useAuth();
  //   console.log(user.email);
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:5000/bookings/${user.email}`).then((data) => {
      //   console.log(data);
      setBookings(data.data);
    });
  }, [setBookings, user.email]);
  console.log(bookings);

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
            <div className="border p-20 rounded-md text-2xl my-10 space-y-3">
              <h1>Room Name : {bookings.room}</h1>
              <h1>Total Days : {bookings.totalDays}</h1>
              <h1>
                Cost : <span className="text-amber-600">${bookings.cost}</span>
              </h1>
              <h1 className="text-gray-600">
                Booking Dates :{" "}
                <span className="text-lg">{bookings.checkIn}</span>
                <span className="text-lg px-2">to</span>
                <span className="text-lg "> {bookings.checkOut}</span>
              </h1>
            </div>
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
};

export default UserDash;
