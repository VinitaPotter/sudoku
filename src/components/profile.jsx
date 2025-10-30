import { useState } from "react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import userPic from "../assets/userPictures/Image.png";
function Profile() {
  return (
    <div className="bg-pink-200  h-screen w-1/5 pt-20 monofett-regular text-purple-900">
      <div className="mb-8">
        <div className="mb-8">
          <img
            src={userPic}
            className="h-80 w-80 m-auto rounded-xl border-8 border-2 border-yellow-200 shadow-md shadow-rose-200)"
          />
        </div>
        <div className="text-6xl ">Vinita</div>
      </div>
      <div>
        <div className="flex hover:justify-center mb-4 cursor-pointer justify-evenly items-center rounded-lg">
          <p className="text-4xl mr-2">Play</p>
          <ArrowLongRightIcon className="size-6 " />
        </div>
        <div className="flex hover:justify-center mb-4 cursor-pointer justify-evenly items-center rounded-lg">
          <p className="text-4xl mr-2">Learn</p>
          <ArrowLongRightIcon className="size-6 " />
        </div>
        <div className="flex hover:justify-center mb-4 cursor-pointer justify-evenly items-center rounded-lg">
          <p className="text-4xl mr-2">Downlaod</p>
          <ArrowLongRightIcon className="size-6 " />
        </div>
        <div className="flex hover:justify-center mb-4 cursor-pointer justify-evenly items-center rounded-lg">
          <p className="text-4xl mr-2">About</p>
          <ArrowLongRightIcon className="size-6 " />
        </div>
      </div>
    </div>
  );
}

export default Profile;
