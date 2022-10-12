import axios from "axios";
import config from "../config/config";

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

const listProjects = async (page, perPage) => {
  const res = await axios.get(`${config.BASE_URL}/projects`, {
    params: { _page: page, _limit: perPage },
    headers,
  });
  const results = [...res.data];
  const total = res.headers["x-total-count"];
  return { results, total };
};

export { listProjects };
