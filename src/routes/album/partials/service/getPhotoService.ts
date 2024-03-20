import axios from "axios";
import PhotoType from "../../../../types/photo.type";

const getAllPhoto = async (type: string): Promise<PhotoType[]> => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_BASEURL}/photos?q=${type}`,
    );
    return res.data;
  } catch (err) {
    throw new Error((err as Error).message);
  }
};

export default getAllPhoto;
