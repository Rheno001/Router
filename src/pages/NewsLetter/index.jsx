import React from "react";

function index() {
  return (
    <div>
      <div className="bg-[#0B0119] w-full h-[752px] flex justify-center items-center">
          <div className="flex justify-center items-center p-20">
            <div className="p-[1.5px] rounded-3xl bg-linear-to-r from-purple-500 to-pink-500 text-white flex">
              <div className="rounded-3xl bg-black backdrop-blur-md p-2 w-7xl h-50 text-white flex justify-center items-center gap-2">
                <div className="flex flex-col -ml-60 mr-70">
                  <p className="font-bold text-4xl">Join our Newsletter</p>
                  <p>Sign up and we will send you the best web3 deals </p>
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="your Email"
                    className="border border-white px-3 py-2 rounded-lg text-white"
                  />
                </div>

                <div>
                  <button className="text-white border-2 px-4 py-2 rounded-lg">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default index;
