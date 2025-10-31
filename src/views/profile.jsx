import { NavLink } from "react-router";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import userPic from "../assets/userPictures/kawaii.webp";
function Profile() {
  return (
    <div className="bg-pink-200  h-screen w-1/5 pt-20 text-purple-900">
      <div className="mb-8">
        <div className="mb-8">
          <img
            src={userPic}
            className="h-48 w-48 m-auto rounded-xl border-8 border-2 border-yellow-100 shadow-md shadow-rose-200)"
          />
        </div>
        <div className="text-4xl ">Sudoku</div>
      </div>
      <div className="h-1/3 flex flex-col justify-around">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex hover:justify-center h-14 cursor-pointer justify-evenly items-center rounded-lg hover:!text-yellow-100 hover:text-2xl  ${
              isActive ? "text-2xl !text-yellow-100" : ""
            }`
          }
          end
        >
          <p className="mr-2">Play</p>
          <ArrowLongRightIcon className="size-6" />
        </NavLink>
        <NavLink
          to="learn"
          className={({ isActive }) =>
            `flex hover:justify-center h-14 cursor-pointer justify-evenly items-center rounded-lg hover:!text-yellow-100 hover:text-2xl  ${
              isActive ? "text-2xl !text-yellow-100" : ""
            }`
          }
          end
        >
          <p className="mr-2">Learn</p>
          <ArrowLongRightIcon className="size-6 " />
        </NavLink>
        <NavLink
          to="download"
          className={({ isActive }) =>
            `flex hover:justify-center h-14 cursor-pointer justify-evenly items-center rounded-lg hover:!text-yellow-100 hover:text-2xl  ${
              isActive ? "text-2xl !text-yellow-100" : ""
            }`
          }
          end
        >
          <p className="mr-2">Downlaod</p>
          <ArrowLongRightIcon className="size-6 " />
        </NavLink>
        <NavLink
          to="about"
          className={({ isActive }) =>
            `flex hover:justify-center h-14 cursor-pointer justify-evenly items-center rounded-lg hover:!text-yellow-100 hover:text-2xl  ${
              isActive ? "text-2xl !text-yellow-100" : ""
            }`
          }
          end
        >
          <p className="mr-2">About</p>
          <ArrowLongRightIcon className="size-6 " />
        </NavLink>
      </div>
    </div>
  );
}

export default Profile;
