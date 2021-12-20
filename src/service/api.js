import axios from "axios";

export const getPost = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return response.data;
  } catch (error) {
    console.log(`error while calling,${error}`);
  }
};
