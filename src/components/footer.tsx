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
        <ul className="flex flex-col md:flex-row gap-7 md:gap-14">
          <li>
            <h3 className="list__h3">Site Version</h3>

            <ul>
              <li className="list__item">
                <Link
                  to="https://gallery-photos-citrafebriawirti.netlify.app/"
                  target="_blank"
                >
                  <button>Before (Created By: Citra Febriawirti)</button>
                </Link>
              </li>
              <li className="list__item">
                <Link to="" target="_blank">
                  <button>After (Created By: Muhammad Naufal Yafi')</button>
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <h3 className="text-lg font-bold">Profile Author</h3>

            <ul>
              <li className="list__item">
                <Link to="https://www.instagram.com/arcinara_ctr/">
                  <button>
                    <span className="font-bold opacity-100">Name:</span> Citra
                    Febriawirti
                  </button>
                </Link>
              </li>
              <li className="list__item">
                <Link
                  to="https://github.com/citraFebriawirti/gallery-photos"
                  target="_blank"
                >
                  <button>Github Repository</button>
                </Link>
              </li>
              <li className="list__item">
                <Link
                  to="https://www.linkedin.com/in/citra-febriawirti/"
                  target="_blank"
                >
                  <button>Linkedin</button>
                </Link>
              </li>
              <li className="list__item">
                <Link to="https://github.com/citraFebriawirti" target="_blank">
                  <button>Github</button>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <h3 className="list__h3">Profile Contributor</h3>

            <ul>
              <li className="list__item">
                <Link to="https://www.instagram.com/yaf.tsx/" target="_blank">
                  <button>
                    <span className="font-bold opacity-100">Name:</span>{" "}
                    Muhammad Naufal Yafi'
                  </button>
                </Link>
              </li>
              <li className="list__item">
                <Link
                  to="https://github.com/naufal-yafi/gallery-photos/tree/dev"
                  target="_blank"
                >
                  <button>Github Repository</button>
                </Link>
              </li>
              <li className="list__item">
                <Link
                  to="https://www.linkedin.com/in/naufal-yafi/"
                  target="_blank"
                >
                  <button>Linkedin</button>
                </Link>
              </li>
              <li className="list__item">
                <Link to="https://github.com/naufal-yafi" target="_blank">
                  <button>Github</button>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
