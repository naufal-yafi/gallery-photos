import React from "react";
import Navbar from "../../../components/navbar/navbar.tsx";
import usePostPhoto from "../../../hooks/usePostPhoto.ts";
import useInput from "../hooks/useInput.ts";

export default function Create() {
  const {
    type: image,
    setType: setImage,
    handleType: handleImage,
  } = useInput();
  const {
    type: caption,
    setType: setCaption,
    handleType: handleCaption,
  } = useInput();
  const {
    handleSubmitForm,
    statusEmptyCaption,
    statusEmptyImage,
    response,
    loading,
  } = usePostPhoto();

  return (
    <React.Fragment>
      <Navbar title="Making a new album | Gallery Photo" />

      <main className="flex-col items-start w-full gap-8 px-6 pt-8 md:flex-row mt-14 flex__center md:px-32">
        <div className="w-full overflow-x-hidden rounded-2xl md:w-96 bg-black/15 aspect-video flex__center">
          {image ? (
            <img src={image} alt="preview" className="w-full" />
          ) : (
            <p className="text-black/60">Preview Image</p>
          )}
        </div>

        <div className="flex flex-col w-full md:w-1/2">
          <h1 className="text-2xl font-bold">Create New Album</h1>

          <div className={response !== "" ? "block" : "hidden"}>
            <h2
              className={`px-4 py-1 text-sm rounded-full ${
                response === "Success"
                  ? "text-green-700 bg-green-200"
                  : "text-red-700 bg-red-200"
              }`}
            >
              {response} add new album.
            </h2>
          </div>

          <div className="w-full">
            <input
              value={image}
              onChange={handleImage}
              type="text"
              placeholder="Image Url"
              disabled={loading}
              className={`w-full py-2 px-4 mt-5 text-sm rounded-full ${
                statusEmptyImage
                  ? "bg-white border-2 border-red-500 outline-red-500 text-red-500"
                  : "bg-black/10"
              }`}
            />
            <p
              className={`${
                statusEmptyImage ? "block" : "hidden"
              } text-xs text-red-500`}
            >
              *Image required
            </p>
          </div>

          <div>
            <textarea
              value={caption}
              onChange={handleCaption}
              placeholder="Captions..."
              disabled={loading}
              className={`w-full py-2 px-4 mt-4 text-sm rounded-2xl ${
                statusEmptyCaption
                  ? "bg-white border-2 border-red-500 outline-red-500 text-red-500"
                  : "bg-black/10"
              }`}
            />
            <p
              className={`${
                statusEmptyCaption ? "block" : "hidden"
              } text-xs text-red-500`}
            >
              *Caption required
            </p>
          </div>

          <button
            className="py-2 mt-4 text-sm text-white bg-red-600 rounded-full"
            disabled={loading}
            onClick={() => {
              handleSubmitForm(image, caption);

              if (response === "Success") {
                setImage("");
                setCaption("");
              }
            }}
          >
            {loading ? "Please wait.." : "Create"}
          </button>
        </div>
      </main>
    </React.Fragment>
  );
}
