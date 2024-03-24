import axios from "axios";
import getDateNow from "../lib/getDateNow.ts";
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

export const postPhoto = async (
  image: string,
  caption: string,
): Promise<number> => {
  try {
    const dateNow = getDateNow().toString();

    const res = await axios.post(
      `${process.env.REACT_APP_API_BASEURL}/photos`,
      {
        imageUrl: image,
        captions: caption,
        createdAt: dateNow,
        updatedAt: dateNow,
        secret: "password",
      },
    );

    return res.status;
  } catch (err) {
    throw new Error((err as Error).message);
  }
};
