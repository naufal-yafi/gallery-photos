import React from "react";
import PhotoType from "../../../../../types/photo.type.ts";
import getAllPhoto from "../service/getPhotoService.ts";

const useGetAllPhoto = () => {
  const [snapshot, setSnapshot] = React.useState<PhotoType[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  const serviceGet = async (): Promise<void> => {
    try {
      setSnapshot(await getAllPhoto());
    } catch (error) {
      throw new Error((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    serviceGet();
  }, []);

  return {
    photos: snapshot,
    photoIsLoading: loading,
  };
};

export default useGetAllPhoto;
