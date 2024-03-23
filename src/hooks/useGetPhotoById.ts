import React from "react";
import { getPhotoById } from "../services/photo-service.ts";
import PhotoType from "../types/photo.type.ts";

const useGetPhotoById = (
  id: string,
): {
  photo: PhotoType | undefined;
  photoIsLoading: boolean;
} => {
  const [snapshot, setSnapshot] = React.useState<PhotoType>();
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    const serviceGet = async () => {
      try {
        const photo = await getPhotoById(id);
        setSnapshot(photo);
      } catch (error) {
        throw new Error((error as Error).message);
      } finally {
        setLoading(false);
      }
    };

    serviceGet();
  }, [id]);

  return {
    photo: snapshot,
    photoIsLoading: loading,
  };
};

export default useGetPhotoById;
