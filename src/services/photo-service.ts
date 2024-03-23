import axios from "axios";
import PhotoType from "../types/photo.type.ts";

export const getAllPhoto = async (type: string): Promise<PhotoType[]> => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_BASEURL}/photos?q=${type}`,
    );
    return res.data;
  } catch (err) {
    throw new Error((err as Error).message);
  }
};

export const getPhotoById = async (id: string): Promise<PhotoType> => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_BASEURL}/photos/${Number(id)}`,
    );
    return res.data;
  } catch (err) {
    throw new Error((err as Error).message);
  }
};
