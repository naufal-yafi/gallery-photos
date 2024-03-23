import React from "react";
import { getAllPhoto } from "../services/photo-service.ts";
import PhotoType from "../types/photo.type.ts";

const useGetAllPhoto = (): {
  photos: PhotoType[];
  photoIsLoading: boolean;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchType: string;
} => {
  const [snapshot, setSnapshot] = React.useState<PhotoType[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [searchType, setSearchType] = React.useState<string>("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchType(e.target.value);
  };

  const serviceGet = async (type: string): Promise<void> => {
    try {
      setSnapshot(await getAllPhoto(type));
    } catch (error) {
      throw new Error((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    serviceGet(searchType);
  }, [searchType]);

  return {
    photos: snapshot,
    photoIsLoading: loading,
    handleInput,
    searchType,
  };
};

export default useGetAllPhoto;
