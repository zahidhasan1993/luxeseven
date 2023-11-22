import useRooms from "../../customhooks/useRooms";
import RoomCard from "../shared/RoomCard";
import { DatePicker } from "antd";
import moment from "moment";
import { useState } from "react";

const { RangePicker } = DatePicker;

const Rooms = () => {
  const rooms = useRooms();
  // const { setCheckIn, setCheckOut,
  // checkIn, checkOut } = useContext(BookingProvider);

  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [newRooms, setNewRooms] = useState([]);
  let fakeRooms = [...rooms];

  const filterByDate = (dates) => {
    const startDate = moment(dates[0]?.$d, "DD-MM-YYYY");
    const endDate = moment(dates[1]?.$d, "DD-MM-YYYY");
    setCheckIn(startDate);
    setCheckOut(endDate);
    const remainingRooms = fakeRooms.filter(
      (rRoom) =>
        !(
          moment(rRoom?.currentBooking?.checkIn, "DD-MM-YYYY").isBetween(
            startDate,
            endDate
          ) ||
          moment(rRoom?.currentBooking?.checkOut, "DD-MM-YYYY").isBetween(
            startDate,
            endDate
          )
        )
    );
    console.log(dates[0]);
    setNewRooms(remainingRooms);
    const forCheckIn = moment(dates[0]?.$d).format("DD-MM-YYYY");

    const forCheckOut = moment(dates[1]?.$d).format("DD-MM-YYYY");
    setCheckIn(forCheckIn);
    setCheckOut(forCheckOut);
  };
  console.log(fakeRooms);

  const filterByType = (e) => {
    const type = e.target.value;
    const byType = fakeRooms.filter(
      (room) => room.type.toLowerCase() === type.toLowerCase()
    );
    console.log(byType);
    setNewRooms(byType);
  };
  return (
    <div className="my-20">
      <div className="md:flex md:justify-between md:items-center mb-10">
        <div className="md:p-10 w-full">
          <RangePicker
            format="DD-MM-YYYY"
            onChange={filterByDate}
            className="border border-black h-12 w-full"
          />
        </div>

        <div className="mt-5 md:mt-0 w-full">
          <select
            onClick={filterByType}
            className="h-12 bg-gray-50 border border-black text-gray-500 text-lg rounded block w-full p-2.5"
          >
            <option defaultValue="all">Choose room type</option>
            <option defaultValue="delux" className="text-black">
              Delux
            </option>
            <option defaultValue="non-delux" className="text-black">
              Non-Delux
            </option>
          </select>
        </div>
      </div>

      <div>
        {}
        {newRooms.length === 0
          ? rooms.map((room) => (
              <RoomCard
                key={room._id}
                item={room}
                checkIn={checkIn}
                checkOut={checkOut}
              ></RoomCard>
            ))
          : newRooms.map((room) => (
              <RoomCard
                key={room._id}
                item={room}
                checkIn={checkIn}
                checkOut={checkOut}
              ></RoomCard>
            ))}
      </div>
    </div>
  );
};

export default Rooms;
