import React from "react";

const useShowMore = (): {
  show: boolean;
  handleShow: () => void;
} => {
  const [show, setShow] = React.useState<boolean>(false);

  const handleShow = () => {
    setShow(!show);
  };

  return {
    show,
    handleShow,
  };
};

export default useShowMore;
