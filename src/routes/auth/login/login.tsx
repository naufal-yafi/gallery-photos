import React from "react";
import Navbar from "../../../components/navbar/navbar.tsx";
import LoginWithGoogle from "./_partials/login-with-google.tsx";

export default function Login() {
  return (
    <React.Fragment>
      <Navbar auth />

      <main className="mt-14">
        <LoginWithGoogle />
      </main>
    </React.Fragment>
  );
}
