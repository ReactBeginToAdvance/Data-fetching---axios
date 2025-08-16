import axios from "axios";

export const getPlaces = async () => {
  try {
    const res = await axios.get("http://localhost:8080/api/places");
    return res.data;  // Axios automatically parses JSON
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to fetch Places");
  }
};

