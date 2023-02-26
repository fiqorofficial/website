import React from "react";
import Image from 'next/image'

import logo from "../../../public/assets/logo/logo.png";

function Main() {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
      <Image
        src={logo}
        width={600}
        height={300} alt={''} />
      </div>
    </div>
  );
}

export default Main;