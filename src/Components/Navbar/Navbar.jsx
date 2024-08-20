import logo from "/wood.jpg";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import avater from "/download.png";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [userImg, setUserImg] = useState();
  // const localTheme = localStorage.getItem("theme");
  // console.log(localTheme);
  // const [theme, setTheme] = useState(localTheme);

  // useEffect(() => {
  //   document.querySelector("html").setAttribute("data-theme", theme);
  //   localStorage.setItem("theme", theme);
  // }, [theme]);

  // const toggleTheme = () => {
  //   setTheme(theme == "light" ? "dark" : "light");
  //   console.log(theme);
  // };

  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          title: "User Logged Out Successfully",
          text: "Congrats! You have logged out Successfully",
          icon: "success",
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "User not logged out",
          text: "Something went wrong!",
          footer: '<a href="#">Why do I have this issue?</a>',
        });
      });
  };

  const links = (
    <div className="flex items-center gap-1 w-full lg:gap-4">
      <Link to={"/"} className="link link-hover">
        Home
      </Link>
      <Link to={"/allCraft"} className="link link-hover">
        Art & Craft
      </Link>
      <Link to={"/addCraft"} className="link link-hover">
        Add Item
      </Link>
      <Link to={"/myCraftItems"} className="link link-hover">
        My Art & Craft
      </Link>
    </div>
  );

  return (
    <div className="navbar shadow-xl lg:px-24 text-white bg-[#795548]">
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
            className="menu z-50 menu-sm dropdown-content bg-themeFade rounded-box mt-3 w-52 p-2 shadow"
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
        {user && (
          <div className="flex items-center gap-6">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost dropdown dropdown-end btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <Tooltip id="my-tooltip" place="left" />
                <img
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content={user?.displayName || "Name not found"}
                  alt={user?.email || userImg.name}
                  src={user?.photoURL || avater}
                />{" "}
              </div>
              <ul
                tabIndex={0}
                className="menu bg-[#795548b7] menu-sm dropdown-content rounded-box z-50 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <button onClick={handleLogOut}>Logout</button>
                </li>
              </ul>
            </div>
          </div>
        )}
        {!user && (
          <div className="flex gap-2">
            <Link
              to={"/login"}
              className="btn btn-outline bg-white font-bold px-6 text-[#795548]"
            >
              Login
            </Link>
            <Link
              to={"/register"}
              className="btn btn-outline bg-white font-bold px-6 text-[#795548]"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
