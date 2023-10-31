import { Link } from "react-router-dom";
const RoomCard = ({ item }) => {
//   console.log(item);
  return (
    <div className="mb-4 p-0 sm:p-4 md:w-full">
      {" "}
      {/* Card container */}
      <div className="group h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-lg">
        {/* :CARD IMAGE */}
        <img
          className="md:h-72 w-full object-cover object-center transition duration-500 ease-in-out transform group-hover:scale-105"
          src={item.imageURL[0]}
          alt="blog"
        />

        {/* :CARD CATEGORY */}
        <h2 className="pt-4 pb-1 px-6 inline-block text-xs title-font font-semibold text-red-400 uppercase tracking-widest cursor-pointer hover:font-bold">
          {item.type}
        </h2>

        {/* :CARD BODY */}
        <div className="py-1 px-6">
          {/* ::Card title */}
          <h1 className="mb-3 font-agbalumo inline-block title-font text-xl font-extrabold text-gray-800 tracking-wide cursor-pointer">
            {item.name}
          </h1>
          {/* ::Card excerpt */}
          <p className="line-clamp-6 mb-3 overflow-hidden leading-relaxed text-gray-500 cursor-pointer">
            {item.description}
          </p>
        </div>

        {/* :CARD FOOTER */}
        <div className="pt-4 pb-4 px-6 flex justify-between items-center flex-wrap">
          <p className="text-gray-600">
            Per Day Rent : <span className="text-amber-600">${item.rent}</span>
          </p>
          <Link>
            <button className="px-6 py-2.5  text-center text-white bg-black border-2 border-black rounded-full inline-flex hover:bg-transparent hover:border-black hover:text-black hover:scale-110 duration-300 ease-in-out focus:outline-none lg:w-auto focus-visible:outline-black text-sm focus-visible:ring-black">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
