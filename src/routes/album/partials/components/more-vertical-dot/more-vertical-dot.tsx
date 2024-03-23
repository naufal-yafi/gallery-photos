import React from "react";
import { Link } from "react-router-dom";
import useShowMore from "./hooks/useShowMore.ts";

export default function MoreVerticalDot({
  id,
  date,
}: Readonly<{
  id: string | number;
  date: string;
}>) {
  const { show, handleShow } = useShowMore();
  const isLogin: boolean = true;

  return (
    <div className={`${isLogin ? "flex" : "hidden"} pt-1 justify-end`}>
      <button onClick={handleShow}>
        <img
          src="/assets/more-vertical.svg"
          alt="icon more"
          width={16}
          height={16}
        />
      </button>
      <ul
        className={`absolute p-2 translate-y-6 bg-white rounded-lg shadow-md transition duration-100 ${
          show ? "scale-100" : "scale-0"
        }`}
      >
        <li>
          <Link to={`/admin/edit/${id}?q=${id}&d=${date}`}>
            <button className="w-24 py-2 pl-2 text-sm rounded-md text-start hover:bg-black/10">
              Edit
            </button>
          </Link>
        </li>
        <li>
          <Link to={`/admin/delete/${id}?q=${id}&d=${date}`}>
            <button className="w-24 py-2 pl-2 text-sm text-red-600 rounded-md text-start hover:bg-black/10">
              Delete
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
}
