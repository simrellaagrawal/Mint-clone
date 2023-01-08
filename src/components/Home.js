import React from "react";
import CenterBlock from "./CenterBlock";
import LeftBlock from "./LeftBlock";
import RightBlock from "./RightBlock";

export default function Home() {
  return (
    <div className="w-full flex-row flex justify-center mt-5 ">
      <div className="grid basis-3/12 justify-items-start  "><LeftBlock/></div>
      <div className="grid basis-6/12 justify-items-center">
        <p className=""><CenterBlock/></p>
      </div>
      <div className="grid basis-3/12 "><RightBlock/></div>
    </div>
  );
}
