import axios from "axios";

export const getRandomDogData = async (breed) =>
  (
    await axios.get(
      `https://dog.ceo/api/breed${breed ? "/" + breed + "/" : "s/"}image${
        breed && "s"
      }/random`
    )
  ).data;
