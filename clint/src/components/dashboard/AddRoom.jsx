import axios from "axios";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddRoom = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const roomData = {
      name: data.name,
      maxCount: data.maxCount,
      phone: data.phone,
      imageURL: [data.img1, data.img2, data.img3],
      type: data.type,
      rent: data.rent,
      description: data.description,
    };
    axios.post("http://localhost:5000/addroom", roomData).then((data) => {
      console.log(data);
      if (data.data.acknowledged) {
        Swal.fire({
            title: 'Room Added',
            text: "Room Add Successful",
            icon: "success",
          });
      }
    });
    console.log("the form data is:", roomData);
  };
  return (
    <div>
      <div className="w-full  overflow-scroll bg-gradient-to-r from-gray-400 via-gray-200 to-gray-100 p-4 flex items-center justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white py-6 px-10 sm:max-w-md w-full "
        >
          <div className="sm:text-3xl text-2xl font-semibold text-center text-gray-600  mb-12">
            Add Room Here!
          </div>
          <div className="">
            <div>
              <input
                type="text"
                className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500"
                placeholder="Room Name "
                {...register("name")}
              />
            </div>
            <div>
              <input
                type="text"
                className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 my-8"
                placeholder="Phone Number"
                {...register("phone")}
              />
            </div>
            <div>
              <input
                type="text"
                className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 mb-8"
                placeholder="Max Count"
                {...register("maxCount")}
              />
            </div>
            <div>
              <input
                type="text"
                className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 mb-8"
                placeholder="Image URL 1"
                {...register("img1")}
              />
            </div>
            <div>
              <input
                type="text"
                className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 mb-8"
                placeholder="Image URL 2"
                {...register("img2")}
              />
            </div>
            <div>
              <input
                type="text"
                className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 mb-8"
                placeholder="Image URL 3"
                {...register("img3")}
              />
            </div>
            <div>
              <input
                type="number"
                className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 mb-8"
                placeholder="Rent"
                {...register("rent")}
              />
            </div>
            <div>
              <textarea
                {...register("description")}
                id=""
                cols="15"
                rows="5"
                className="w-full border border-black p-5"
              ></textarea>
            </div>
            <div className="">
              <select {...register("type")} className="w-full bg-white my-5">
                <option value="delux">Delux</option>
                <option value="non-delux">NonDelux</option>
              </select>
            </div>

            <div className="text-center my-5">
              <button
                type="submit"
                className="py-3 px-5 bg-black text-white rounded-md hover:bg-white hover:text-black hover:font-agbalumo hover:border hover:border-black hover:rounded-2xl hover:scale-110 duration-300 ease-linear "
              >
                Add Room
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRoom;
