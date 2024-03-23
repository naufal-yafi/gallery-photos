import React from "react";
import useGetAllPhoto from "../../../hooks/useGetAllPhoto.ts";
import CheckDataEmpty from "./handler/check-data-empty.tsx";
import LoadingPhotos from "./handler/loading-photos.tsx";

const ListPhoto = () => {
  const { photos, photoIsLoading, searchType, handleInput } = useGetAllPhoto();

  return (
    <section className="pt-8">
      {photoIsLoading ? (
        <LoadingPhotos />
      ) : (
        <React.Fragment>
          <section
            id="search-bar"
            className="justify-end gap-2 mb-8 flex__center"
          >
            <div className="bg-[#E4E4E7] rounded-full flex__center justify-between px-6 py-2 text-sm gap-1 w-full md:w-1/2">
              <input
                type="text"
                placeholder="Search..."
                value={searchType}
                onChange={(e) => {
                  handleInput(e);
                }}
                className="w-full bg-transparent border-none outline-none"
              />
              <img
                src="/assets/search.svg"
                alt="icon search"
                width={16}
                height={16}
              />
            </div>
          </section>

          <CheckDataEmpty photos={photos}></CheckDataEmpty>
        </React.Fragment>
      )}
    </section>
  );
};

export default ListPhoto;
