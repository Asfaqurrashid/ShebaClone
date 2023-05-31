import axios from "axios";
import config from "../utils/config";

//const token = `Bearer ${config.key.token}`;

const get = async (url) => {
  return (await axios.get(url, { headers: { Authorization: config.key } }))
    .data;
};
const post = async (url, data) => {
  return (
    await axios.post(url, data, {
      headers: { Authorization: config.key },
    })
  ).data;
};
const update = async (url, data) => {
  return (
    await axios.put(url, data, { headers: { Authorization: config.key } })
  ).data;
};
const remove = async (url) => {
  return (await axios.delete(url, { headers: { Authorization: config.key } }))
    .data;
};
const commonDataAccess = {
  get,
  post,
  update,
  remove,
};
export default commonDataAccess;