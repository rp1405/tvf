import axios from "axios";

export const getFoodsData = async () => {
  try {
    const { data } = await axios.get(`http://localhost:3000/api/v1/food/true`);

    // console.log(data["output"]);
    return data["output"];
  } catch (error) {
    console.log(error);
  }
};

export const createFoodsOrder = async (obj) => {
  try {
    const { data } = await axios.post(
      `http://localhost:3000/api/v1/order`,
      obj
    );

    console.log(data["task"]._id);
    return data["task"]._id;
  } catch (error) {
    console.log(error);
  }
};
