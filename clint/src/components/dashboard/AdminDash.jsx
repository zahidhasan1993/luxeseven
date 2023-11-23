import axios from "axios";
import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useRooms from "../../customhooks/useRooms";

const AdminDash = () => {
  const [users, setUsers] = useState([]);
  const [bookings, setBookings] = useState([]);
  const rooms = useRooms();
  useEffect(() => {
    axios.get("http://localhost:5000/users").then((data) => {
      setUsers(data.data);
    });
  }, []);
  useEffect(() => {
    axios.get("http://localhost:5000/bookings").then((data) => {
      setBookings(data.data);
    });
  }, []);
  console.log(users);
  return (
    <div className="my-20 text-xl">
      <Tabs>
        <TabList className="border border-none text-center font-agbalumo">
          <Tab>All Bookings</Tab>
          <Tab>All Users</Tab>
          <Tab>All Rooms</Tab>
          <Tab>Add Room</Tab>
        </TabList>
        <div className="mt-20">
          <TabPanel>
            <div className="md:grid md:grid-cols-3 md:gap-3 h-80">
              {bookings.map((booking) => (
                <div key={booking._id}>
                    <div className="p-14 border border-black rounded shadow-2xl hover:shadow-none font-agbalumo text-gray-700">
                        <h1>Room Name : {booking.room}</h1>
                        <h1>Email : {booking.userEmail}</h1>
                        <h1>Total Days : {booking.totalDays}</h1>
                        <h1 className="text-gray-600">Dates : {booking.checkIn} to {booking.checkOut}</h1>
                        <h1>Cost : ${booking.cost}</h1>
                    </div>
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="mt-10 md:grid md:grid-cols-3 md:gap-3">
              {users.map((singleUser) => (
                <div key={singleUser._id}>
                  <div className="flex items-center relative p-4 w-full bg-white rounded-lg overflow-hidden shadow-2xl hover:shadow">
                    <div className="w-12 h-12 rounded-full bg-gray-100"></div>
                    <div className="ml-3">
                      <p className="font-medium text-gray-800">
                        {singleUser.userName}
                      </p>
                      <p className="text-sm text-gray-600">
                        {singleUser.userEmail}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="md:grid md:grid-cols-3 md:gap-3">
              {rooms.map((room) => (
                <div
                  key={room._id}
                  className="cursor-pointer rounded-xl bg-white p-3 shadow-lg hover:shadow-xl"
                >
                  <div className="relative flex items-end overflow-hidden rounded-xl">
                    <img
                      src={room.imageURL[0]}
                      alt="room"
                      className="h-72 w-full hover:scale-105 duration-300 ease-linear"
                    />

                    <div className="absolute bottom-3 left-3 rounded-lg bg-white p-2 shadow-md">
                      <span className="ml-1 text-sm text-gray-700">
                        {room.type}
                      </span>
                    </div>
                  </div>

                  <div className="mt-1 p-2">
                    <h2 className="text-slate-700 font-agbalumo">
                      {room.name}
                    </h2>
                    <p className="mt-1 text-sm text-slate-400">{room.phone}</p>

                    <div className="mt-3 flex items-end justify-between">
                      <p>
                        <span className="text-lg font-bold text-orange-500">
                          {room.rent}
                        </span>
                        <span className="text-sm text-slate-400">/night</span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <h2>Any content 4</h2>
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
};

export default AdminDash;
