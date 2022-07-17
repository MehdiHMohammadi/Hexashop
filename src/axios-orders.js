import axios from "axios";

const instance = axios.create({
  baseURL: "https://lucid-formula-353910-default-rtdb.firebaseio.com/",
});

export default instance;
