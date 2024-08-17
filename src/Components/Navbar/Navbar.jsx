import logo from "/wood.jpg";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import { Link } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <li>
        <a>Item 1</a>
      </li>
      <li>
        <a>Item 3</a>
      </li>
    </>
  );

  return (
    <div className="navbar lg:px-24 text-white bg-[#795548]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to={"/"} className=" flex items-center gap-4">
          <img
            className="h-12 hidden lg:block rounded-full"
            src={logo}
            alt=""
          />
          <div>
            <h4 className="text-3xl hidden lg:block font-bold font-rancho">
              Woodify
            </h4>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar navbar-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost dropdown dropdown-end btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <Tooltip id="my-tooltip" place="left" />
            <img
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Arif"
              alt="Tailwind CSS Navbar component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />{" "}
          </div>
          <ul
            tabIndex={0}
            className="menu bg-[#795548] menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="">Profile</a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
