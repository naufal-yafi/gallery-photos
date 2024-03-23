import axios from "axios";
import PhotoType from "../../../../types/photo.type.ts";

const getPhotoBySlug = async (id: string): Promise<PhotoType> => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_BASEURL}/photos/${Number(id)}`,
    );
    return res.data;
  } catch (err) {
    throw new Error((err as Error).message);
  }
};

export default getPhotoBySlug;
