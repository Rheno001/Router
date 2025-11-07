import React from "react";
import Bullish from "../assets/footer-bullish.png";

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center bg-[#0B0119] overflow-hidden py-20">

      {/* Image */}
      <img
        src={Bullish}
        alt="BULLISH"
        className="w-full object-contain select-none"
      />

      {/* Two-Step Bottom Fade */}
      <div className="absolute inset-0 bg-gradient-to-t 
        from-[#0B0119] from-35%
        via-[#0B0119]/90 via-50%
        to-transparent">
      </div>

    </section>
  );
}
