import { toast } from "react-toastify";
const BaseURL = "https://dummyjson.com";

const tostMessage = {
  errorMsg: (msg) => {
    toast.error(msg || "Wow so easy!");
  },

  successMsg: (msg) => {
    toast.success(msg || "Wow so easy!");
  },
};

export { tostMessage, BaseURL };
