const Footer = () => {
  const date = new Date();
  const fullYear = date.getFullYear();
  // console.log(fullYear);
  return (
    <footer className="bg-black p-20 text-white">
      <div className="container px-4 mx-auto">
        <div className="-mx-4 flex flex-wrap justify-between">
          <div className="px-4 w-full md:w-1/3 my-4">
            <h2 className="text-xl mb-6">Contact</h2>
            <ul className="mb-6">
              <li className="flex items-center mb-2">
                <div className="text-yellow-500 mr-4">
                  <svg
                    className="fill-current w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                  >
                    <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                  </svg>
                </div>
                <div>
                  <a
                    href="http://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-yellow-500"
                  >
                    145/- Bagbari,Uttarpara,Dhaka-1216
                  </a>
                </div>
              </li>
              <li className="flex items-center mb-2">
                <div className="text-yellow-500 mr-4">
                  <svg
                    className="fill-current w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path>
                  </svg>
                </div>
                <div>
                  <a
                    href="mailto:info@tailwindow.com"
                    className="hover:text-yellow-500"
                  >
                    zahidhasan19932023@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-center mb-2">
                <div className="text-yellow-500 mr-4">
                  <svg
                    className="fill-current w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"></path>
                  </svg>
                </div>
                <div>
                  <a href="tel:+18245946369" className="hover:text-yellow-500">
                    +880 130328 9180
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div className="px-4 w-full md:w-1/3 my-4">
            <h2 className="text-xl mb-6">Hotels Offers</h2>
            <ul>
              <li>
                <a href="#" className="flex mb-2 hover:text-yellow-500">
                  <div className="ml-3 overflow-hidden">
                    <h3 className="font-semibold truncate">
                      Comfort with 2 bed and more....
                    </h3>
                    <span className="text-xs text-gray-500 block">
                      July 17, 2023
                    </span>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" className="flex mb-2 hover:text-yellow-500">
                  <div className="ml-3 overflow-hidden">
                    <h3 className="font-semibold truncate">
                      For 4 person to stay at maldip
                    </h3>
                    <span className="text-xs text-gray-500 block">
                      June 06, 2023
                    </span>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" className="flex mb-2 hover:text-yellow-500">
                  <div className="ml-3 overflow-hidden">
                    <h3 className="font-semibold truncate">
                      Delux room for couples
                    </h3>
                    <span className="text-xs text-gray-500 block">
                      May 28, 2020
                    </span>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" className="flex mb-2 hover:text-yellow-500">
                  <div className="ml-3 overflow-hidden">
                    <h3 className="font-semibold truncate">
                      Afordable rooms for bangali
                    </h3>
                    <span className="text-xs text-gray-500 block">
                      March 15, 2020
                    </span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div className="px-4 w-full md:w-1/3 my-4">
            <h2 className="text-xl mb-6">Send Us Message</h2>

            <form>
              <div className="mb-2">
                <label htmlFor="email" className="text-xs text-gray-200">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="block w-full border border-gray-400 rounded-sm py-1 px-4 text-gray-700 text-md focus:outline-none focus:border-gray-500"
                  placeholder="john@example.com"
                />
              </div>
              <div className="mb-2">
                <label htmlFor="message" className="text-xs text-gray-200">
                  Message
                </label>
                <textarea
                  id="message"
                  cols="30"
                  rows="3"
                  className="block w-full border border-gray-400 rounded-sm py-1 px-4 text-gray-700 text-md focus:outline-none focus:border-gray-500"
                  placeholder="I have something in mind"
                ></textarea>
              </div>
              <button className="rounded-sm py-2 px-4 text-gray-100 bg-gray-600 hover:bg-gray-700 focus:outline-none">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="container px-4 mx-auto">
        <div className="-mx-4 py-4 flex flex-wrap justify-between items-center">
          <div className="px-4 w-full text-center sm:w-auto">
            <a href="/" className="inline-flex">
              <h1 className="text-4xl font-agbalumo">QuickCheckIn</h1>
            </a>
          </div>
          <div className="px-4 w-full text-center sm:w-auto sm:text-left">
            Copyright © {fullYear} all right reserved by ZahidHasan
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
