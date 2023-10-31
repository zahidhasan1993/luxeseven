import { useEffect, useState } from "react";
import axios from "axios";

const useRooms = () => {
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/rooms").then((data) => {
      setRooms(data.data);
    });
  }, []);

  return rooms;
};

export default useRooms;
