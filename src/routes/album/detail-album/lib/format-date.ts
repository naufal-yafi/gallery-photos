const formatDate = (realDate: string): string => {
  return new Date(realDate).toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export default formatDate;
