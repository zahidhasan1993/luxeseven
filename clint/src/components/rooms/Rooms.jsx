import { useContext } from "react";
import useRooms from "../../customhooks/useRooms";
import RoomCard from "../shared/RoomCard";
import { DatePicker } from "antd";
import moment from "moment";
import { BookingProvider } from "../../providers/DateProvider";

const { RangePicker } = DatePicker;

const Rooms = () => {
  const rooms = useRooms();
  const { setCheckIn, setCheckOut,
  checkIn, checkOut } = useContext(BookingProvider);

  const filterByDate = (dates) => {
    const startDate = moment(dates[0]?.$d).format("DD-MM-YYYY");
    const endDate = moment(dates[1]?.$d).format("DD-MM-YYYY");
    setCheckIn(startDate);
    setCheckOut(endDate);
  };

  console.log(checkIn,checkOut);
  return (
    <div className="my-20">
      <div className="md:p-10">
        <RangePicker
          format="DD-MM-YYYY"
          onChange={filterByDate}
          className="border border-black h-12"
        />
      </div>
      <div>
        {rooms.map((room) => (
          <RoomCard key={room._id} item={room}></RoomCard>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
