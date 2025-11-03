import React from "react";
import Bull from "../../assets/bull.png";
import Icon from "../../assets/dashicons.png";

function index() {
  return (
    <div>
      <div className="bg-[#000113] w-screen h-[752px] opacity-100 rotate-0 overflow-hidden">
        <div className=" grid justify-items-end mr-20 pt-10 font-bold text-6xl bg-[linear-gradient(90deg,#FF3BFF_0%,#ECBFBF_25.6%,#D94FD5_52.1%,#ECBFBF_74.1%,#5C24FF_100%)] bg-clip-text text-transparent">
          The Future is Now. <br />
          Be Bullish on Web3.
        </div>

        <div>
          <div className="">
            <img
              className="w-[888px] h-[703px] opacity-100 absolute top-[25px] left-[370px]"
              src={Bull}
              alt=""
            />
          </div>

          <div className="w-36 h-[113px] gap-1 opacity-100 absolute top-[510px] left-[1320px] rotate-0">
            <img
              className="w-[34.75px] h-[38.76px] opacity-100 absolute top-[4.8px] left-[30.62px] rotate-0"
              src={Icon}
              alt=""
            />
            <p className="w-28 h-9 relative top-[39px] left-[25.62px] tracking-wide font-bold text-2xl bg-[linear-gradient(90deg,#FF3BFF_0%,#ECBFBF_25.6%,#D94FD5_52.1%,#ECBFBF_74.1%)] bg-clip-text text-transparent">
              900+
            </p>
            <p className="text-white relative top-[26px]">users onboarded</p>
          </div>

          <div class="absolute top-[490px] left-[120px] border-3 rounded-3xl p-[1.5px] bg-linear-to-br from-[#FF1CF7] to-[#3913A7]">
            <div class="absolute inset-[1.5px] rounded-3xl bg-transparent backdrop-blur-md"></div>
            <div class="relative w-[449px] h-[166px] rounded-3xl p-5 text-white z-10">
              <p>
                Unleash the power of Web3 and unlock <br />
                a world of profitable opportunities in a <br />
                thriving and sustainable digital <br />
                ecosystem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
