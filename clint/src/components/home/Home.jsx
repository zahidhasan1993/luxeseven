import SectionTitle from "../../customhooks/SectionTitle";
import useRooms from "../../customhooks/useRooms";
import RoomCard from "../shared/RoomCard";
import Banner from "./Banner";
import Offer from "./Offer";

const Home = () => {
  const rooms = useRooms();
  const popularRooms = rooms.slice(0,5)
  // console.log(rooms);
  return (
    <div>
      <Banner></Banner>
      <SectionTitle title="What We Offer"></SectionTitle>
      <Offer></Offer>
      <SectionTitle title="Popular Rooms"></SectionTitle>
      <div className="md:grid md:grid-cols-3 md:gap-5 my-20 ">
        {
          popularRooms.map(room => <RoomCard key={room._id} item={room}></RoomCard>)
        }
      </div>
    </div>
  );
};

export default Home;
