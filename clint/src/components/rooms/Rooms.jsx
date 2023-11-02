import useRooms from "../../customhooks/useRooms";
import RoomCard from "../shared/RoomCard";

const Rooms = () => {
  const rooms = useRooms();
  console.log(rooms);
  return (
    <div className="my-20">
      {rooms.map((room) => (
        <RoomCard key={room._id} item={room}></RoomCard>
      ))}
    </div>
  );
};

export default Rooms;
