import axios from "axios";
import PhotoType from "../types/photo.type";

export const getAllPhoto = async (): Promise<PhotoType[]> => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_API_BASEURL}/photos`);
    return res.data;
  } catch (err) {
    throw new Error((err as Error).message);
  }
};
