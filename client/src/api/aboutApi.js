import axios from "axios";
import config from "../config/config";

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

const getAboutData = async () => {
  const res = await axios.get(`${config.BASE_URL}/about`, { headers });
  return res.data;
};

export { getAboutData };
