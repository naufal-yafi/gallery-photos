import React from "react";

export default function LoginWithGoogle() {
  return (
    <section className="py-20 flex__center">
      <button className="gap-4 py-3 text-sm rounded-full shadow-md px-7 flex__center">
        <img
          src="/assets/google-icon.png"
          alt="google icon"
          width={24}
          height={24}
        />{" "}
        <p>Login With Google</p>
      </button>
    </section>
  );
}
