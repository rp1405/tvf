import axios from "axios";
import { BASE_URL } from "../config";
export const getFoodsData = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}/api/v1/food/true`);

    // console.log(data["output"]);
    return data["output"];
  } catch (error) {
    console.log(error);
  }
};

export const createFoodsOrder = async (obj) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/api/v1/order`, obj);

    console.log(data["task"]._id);
    return data["task"]._id;
  } catch (error) {
    console.log(error);
  }
};
