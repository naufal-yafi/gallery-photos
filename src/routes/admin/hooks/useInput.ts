import React from "react";

const useInput = (): {
  type: string;
  setType: React.Dispatch<React.SetStateAction<string>>;
  handleType: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
} => {
  const [type, setType] = React.useState<string>("");

  const handleType = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setType(e.target.value);
  };

  return {
    type,
    setType,
    handleType,
  };
};

export default useInput;
