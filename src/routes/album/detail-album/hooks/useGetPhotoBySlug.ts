import React from "react";
import PhotoType from "../../../../types/photo.type";
import getPhotoBySlug from "../services/getPhotoBySlug.ts";

const useGetPhotoBySlug = (
  slug: string,
): {
  photo: PhotoType | undefined;
  photoIsLoading: boolean;
} => {
  const [snapshot, setSnapshot] = React.useState<PhotoType>();
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    const serviceGet = async () => {
      try {
        const photos = await getPhotoBySlug(slug);
        setSnapshot(photos[0]);
      } catch (error) {
        throw new Error((error as Error).message);
      } finally {
        setLoading(false);
      }
    };

    serviceGet();
  }, [slug]);

  return {
    photo: snapshot,
    photoIsLoading: loading,
  };
};

export default useGetPhotoBySlug;
