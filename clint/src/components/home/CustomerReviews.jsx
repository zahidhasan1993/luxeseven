import { useEffect, useState } from "react";
import axios from "axios";

const CustomerReviews = () => {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/reviews").then((data) => {
      setPeople(data.data);
      // console.log(data);
    });
  }, []);
  console.log(people);
  return (
    <div className="relative  w-full text-gray-700 my-20">
      <div className="flex flex-col items-center">
        {/* :TESTIMONIALS CONTAINER */}
        <div className="w-full">
          <ul className="grid grid-cols-6 gap-5">
            {people.map((person) => (
              <li
                key={person.twitterPseudo}
                className="col-span-full sm:col-span-3 lg:col-span-2 py-6 px-4 flex flex-col rounded-xl shadow-lg bg-white h-72 hover:scale-105 duration-300 ease-in-out"
              >
                {/* ::Card header */}
                <div className="flex items-center space-x-3">
                  {/* :::avatar */}
                  <span className="flex-shrink-0 w-14 h-14 rounded-full overflow-hidden">
                    <img src={person.avatar} alt="" className="object-cover" />
                  </span>
                  <div className="text-left">
                    {/* :::name */}
                    <h3 className="text-base font-agbalumo font-semibold">
                      {person.name}
                    </h3>
                    {/* :::pseudo twitter */}
                    <p className="text-sm text-gray-400">
                      {person.twitterPseudo}
                    </p>
                  </div>
                </div>
                {/* ::Card body */}
                <div className="mt-4 flex text-sm">
                  {/* :::testimony */}
                  <p className="text-lg">
                    <span className="text-blue-400 font-semibold">
                      @luxeSeven{" "}
                    </span>
                    {person.testimony}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;
