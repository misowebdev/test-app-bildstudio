import axios from "axios";
import config from "../config/config";

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

const sendMessage = async (message) => {
  const res = await axios.post(`${config.BASE_URL}/messages`, message, {
    headers,
  });
  return res.data;
};

export { sendMessage };
