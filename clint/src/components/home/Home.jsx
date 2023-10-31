import SectionTitle from "../../customhooks/SectionTitle";
import Banner from "./Banner";
import Offer from "./Offer";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <SectionTitle title="What We Offer"></SectionTitle>
      <Offer></Offer>
      <SectionTitle title="Favorite Rooms"></SectionTitle>
    </div>
  );
};

export default Home;
