import React from "react";
import Navbar from "../../../components/navbar/navbar.tsx";
import useInput from "../hooks/useInput.ts";

export default function Create() {
  const { type: image, handleType: handleImage } = useInput();
  const { type: caption, handleType: handleCaption } = useInput();

  return (
    <React.Fragment>
      <Navbar title="Change album | Gallery Photo" />

      <main className="flex-col items-start w-full gap-8 px-6 pt-8 md:flex-row mt-14 flex__center md:px-32">
        <div className="w-full overflow-x-hidden rounded-2xl md:w-96 bg-black/15 aspect-video flex__center">
          {image ? (
            <img src={image} alt="preview" className="w-full" />
          ) : (
            <p className="text-black/60">Preview Image</p>
          )}
        </div>

        <div className="flex flex-col w-full md:w-1/2">
          <h1 className="text-2xl font-bold">Update Album</h1>

          <input
            value={image}
            onChange={handleImage}
            type="text"
            placeholder="Image Url"
            className="py-2 pl-4 mt-5 text-sm rounded-full bg-black/10"
          />

          <textarea
            value={caption}
            onChange={handleCaption}
            placeholder="Captions..."
            className="py-2 pl-4 mt-4 text-sm rounded-2xl bg-black/10"
          />

          <button className="py-2 mt-4 text-sm text-white bg-red-600 rounded-full">
            Change Update
          </button>
        </div>
      </main>
    </React.Fragment>
  );
}
