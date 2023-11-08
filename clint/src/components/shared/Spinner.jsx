import ClockLoader from "react-spinners/ClockLoader";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <ClockLoader color={"#000000"} size={150} />
    </div>
  );
};

export default Spinner;
