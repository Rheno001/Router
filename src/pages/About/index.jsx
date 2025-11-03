import React from "react";
import BullHead from '../../assets/bull-head.png'

function index() {
  return (
    <div>
      <div className="flex p-30 h-[752px] bg-[#0B0119] gap-20 text-white">
        <div className="w-193 h-133 pt-20 m-10">
        <h1 className="mb-5 font-bold text-4xl bg-[linear-gradient(90deg,#FF3BFF_0%,#ECBFBF_25.6%,#D94FD5_52.1%,#ECBFBF_74.1%)] bg-clip-text text-transparent">Why go bullish on our NFTs?</h1>
        <p className="">
          Unleash the full potential of Web3 ownership with Bullish <br /> NFTs. Go
          beyond static images and unlock exclusive <br /> experiences, valuable
          in-ecosystem utility, and the chance to <br /> co-own a piece of the future
          alongside a passionate <br /> community. These aren't just collectibles,
          they're gateways to <br /> influence, early access, and potential value
          appreciation in <br /> the booming Web3 landscape. 
        </p>
        <p className="mt-5">Join the Bullish movement
          and own your future in a thriving <br /> and sustainable digital world.</p>
        <button className="mt-5 border-3 w-35 h-10 rounded-lg ">Learn More</button>
      </div>

      <div className="w-191 h-130">
        <img className="-mt-10 relative" src={BullHead} alt="" />

        <div class="absolute -mt-45 ml-45 pt-4 px-5 rounded-3xl bg-linear-to-br from-[#FF1CF7] to-[#3913A7]">
            <div class="w-[200px] h-[120px]  gap-2.5 opacity-100 rounded-3xl bg-transparent p-5">
              <p class="text-white">
                G.O.A.T Head NFT <br /> By Vigmoid Sigmoid <br /> Floor price: 1.56 ETH
              </p>
            </div>
          </div>
      </div>

      </div>
      
    </div>
  );
}

export default index;
