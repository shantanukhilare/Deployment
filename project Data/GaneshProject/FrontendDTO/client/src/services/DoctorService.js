import axios from "axios";

const URL = "http://localhost:8080/api/doctors";

export const FetchAllDoctors = async () => {
  try {
    const response = await axios.get(`${URL}`);
    return response.data;
  } catch (er) {
    console.log(er);
    throw er;
  }
};
