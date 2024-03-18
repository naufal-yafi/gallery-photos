import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-10 container__padding">
      <section className="justify-between flex__center">
        <figure className="gap-2 flex__center">
          <img src="/favicon.ico" alt="logo" width={45} height={45} />

          <figcaption className="text-sm font-bold">Gallery Photo</figcaption>
        </figure>

        <Link to="/auth/login">
          <button className="text-white bg-red-600 btn">Login</button>
        </Link>
      </section>

      <section className="pb-10 mt-10">
        <ul className="flex flex-col md:flex-row gap-14">
          <li>
            <h3 className="text-lg font-bold">Profile Author</h3>

            <ul>
              <li className="list__item">
                <span className="font-bold opacity-100">Name:</span> Citra
                Febriawirti
              </li>
              <li className="list__item">Github Repository</li>
              <li className="list__item">Linkedin</li>
              <li className="list__item">Github</li>
            </ul>
          </li>
          <li>
            <h3 className="list__h3">Profile Contributor</h3>

            <ul>
              <li className="list__item">
                <span className="font-bold opacity-100">Name:</span> Muhammad
                Naufal Yafi'
              </li>
              <li className="list__item">Github Repository</li>
              <li className="list__item">Linkedin</li>
              <li className="list__item">Github</li>
              <li className="list__item">Personal Site</li>
            </ul>
          </li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
