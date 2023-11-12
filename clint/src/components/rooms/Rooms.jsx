import useRooms from "../../customhooks/useRooms";
import RoomCard from "../shared/RoomCard";
import { DatePicker } from "antd";
import moment from 'moment';

const { RangePicker } = DatePicker;

const Rooms = () => {
  const rooms = useRooms();
  // console.log(rooms);
  const filterByDate = (dates) => {
    const startDate = moment(dates[0]?.$d).format('DD-MM-YYYY');
    const endDate = moment(dates[1]?.$d).format('DD-MM-YYYY');
    
    
  }
  return (
    <div className="my-20">
      <div className="md:p-10">
        <RangePicker format="DD-MM-YYYY" onChange={filterByDate} className="border border-black h-12"/>
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
