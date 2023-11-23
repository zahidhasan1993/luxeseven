import { useEffect, useState } from "react";
import axios from "axios";

const useRooms = () => {
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    axios.get("https://luxeseven-server.vercel.app/rooms").then((data) => {
      setRooms(data.data);
    });
  }, []);

  return rooms;
};

export default useRooms;
