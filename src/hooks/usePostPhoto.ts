import React from "react";
import { postPhoto } from "../services/photo-service.ts";

const usePostPhoto = (): {
  handleSubmitForm: (image: string, caption: string) => Promise<void>;
  statusEmptyImage: boolean;
  statusEmptyCaption: boolean;
  response: string;
  loading: boolean;
} => {
  const [statusEmptyImage, setStatusEmptyImage] =
    React.useState<boolean>(false);
  const [statusEmptyCaption, setStatusEmptyCaption] =
    React.useState<boolean>(false);
  const [response, setResponse] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);

  const handleSubmitForm = async (image: string, caption: string) => {
    setLoading(true);

    if (image !== "" && caption !== "") {
      setStatusEmptyImage(false);
      setStatusEmptyCaption(false);

      try {
        const res = await postPhoto(image, caption);
        console.log(Number(res));

        if (Number(res) === 201) {
          setResponse("Success");
        } else {
          setResponse("Failed");
        }
      } catch (error) {
        setResponse("Failed");
      } finally {
        setLoading(false);
      }
    } else if (image === "" && caption !== "") {
      setStatusEmptyImage(true);
      setStatusEmptyCaption(false);
      setLoading(false);
    } else if (caption === "" && image !== "") {
      setStatusEmptyImage(false);
      setStatusEmptyCaption(true);
      setLoading(false);
    } else {
      setStatusEmptyImage(true);
      setStatusEmptyCaption(true);
      setLoading(false);
    }
  };

  return {
    handleSubmitForm,
    statusEmptyImage,
    statusEmptyCaption,
    response,
    loading
  };
};

export default usePostPhoto;
