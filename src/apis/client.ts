import axios from "axios";

export default axios.create({
  baseURL: import.meta.env.VITE_PROXY_URL,
});
