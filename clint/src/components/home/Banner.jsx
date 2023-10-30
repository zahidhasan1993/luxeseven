import img from "../../assets/1.jpg";

const Banner = () => {
  return (
    <div className="flex min-h-screen bg-white my-10">
      <div className="flex flex-col justify-center flex-1 px-8 py-8 md:px-12 lg:flex-none lg:px-24">
        <div className="w-full mx-auto lg:max-w-6xl">
          <div className="max-w-xl mx-auto text-center lg:p-10 lg:text-left">
            <div>
              <p className="text-2xl font-medium tracking-tight text-black sm:text-4xl">
                Book your destine
              </p>
              <p className="max-w-xl mt-4 text-base tracking-tight text-gray-600">
                In our site you can find what you need and which room you want
                to stay like dream with many more choices among the hotels you
                can get your room just a click away. Thanks for visiting our
                website!
              </p>
            </div>
            <div className="flex flex-col items-center justify-center max-w-lg gap-3 mx-auto mt-10 lg:flex-row lg:justify-start">
              <a
                href="#"
                className="items-center justify-center w-full px-6 py-2.5  text-center text-white bg-black border-2 border-black rounded-full inline-flex hover:bg-transparent hover:border-black hover:text-black hover:scale-110 duration-300 ease-in-out focus:outline-none lg:w-auto focus-visible:outline-black text-sm focus-visible:ring-black"
              >
                Visit Hotels
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center text-sm font-semibold text-black duration-200 hover:text-blue-500 focus:outline-none focus-visible:outline-gray-600"
              >
                About Us &nbsp; →
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex-1 hidden w-0 lg:block">
        <div>
          <img
            className="absolute inset-0 object-cover w-full h-full bg-gray-200 lg:border-l opacity-80 hover:scale-105 duration-300 ease-in-out"
            src={img}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
