import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="relative py-16 px-4 w-full min-h-screen bg-gray-50">
      <div className="flex flex-col items-center">
        {/* :TITLE */}
        <div className="text-center space-y-5">
          <p className="text-6xl sm:text-7xl text-black font-bold tracking-wide">
            404
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-gray-700 font-semibold capitalize">
            <i>{error.statusText || error.message}</i>
          </h1>
          <p className="text-sm text-gray-500 font-medium">
            Sorry! We could not find the page you are looking for. Please check
            URL in address bar and try again.
          </p>
        </div>

        {/* :OPTION LINKS */}
        <div className="mt-8">
          <Link to="/">
            <button className="px-5 py-2.5 rounded border border-transparent bg-black text-center text-base text-white font-medium hover:bg-white hover:text-black hover:scale-125 hover:font-semibold duration-300 ease-in">
              Get back to Homepage
            </button>
          </Link>
        </div>

        {/* :ILLUSTRATION */}
        <img
          src="https://fancytailwind.com/static/under_construction-503cab99df4458de6d2801e7ee4fa400.svg"
          alt=""
          className="mt-10 max-h-72"
        />
      </div>
    </div>
  );
};

export default ErrorPage;
