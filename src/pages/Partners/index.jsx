// PartnersSection.jsx
import React from "react";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import image5 from "../../assets/image5.png";
import image6 from "../../assets/image6.png";
import image7 from "../../assets/image7.png";
import image8 from "../../assets/image8.png";
import image9 from "../../assets/image9.png";
import image10 from "../../assets/image10.png";
import image11 from "../../assets/image11.png";
import image12 from "../../assets/image12.png";
import image13 from "../../assets/image13.png";
import image14 from "../../assets/image14.png";

export default function PartnersSection() {
  const row1 = [image1, image2, image3, image4, image5, image6, image7];
  const row2 = [image8, image9, image10, image11, image12, image13, image14];

  return (
    <section className="bg-[#0B0119] w-full h-[752px] overflow-hidden">
      <div className="text-white pt-20">
        
        <div className="w-[650px] mb-10 pl-20 pt-20">
          <h2 className="mb-5 font-bold text-4xl bg-[linear-gradient(90deg,#FF3BFF_0%,#ECBFBF_25.6%,#D94FD5_52.1%,#ECBFBF_74.1%)] bg-clip-text text-transparent">
            Our Partners in the Web3verse
          </h2>

          <p className="mr-20 text-[15px] leading-relaxed text-[#C9C9C9]">
            We pride ourselves in forming partnerships with top Web3 firms whose
            goals align with ours in profitability, innovation, and long-term sustainability.
          </p>
        </div>

        {/* Row 1 - Scrolls Left (top) */}
        <div className="w-full overflow-hidden py-5">
          <div
            className="flex gap-8 animate-scroll-left"
            style={{ width: "max-content" }}
          >
            {[...row1, ...row1].map((img, i) => (
              <div
                key={`r1-${i}`}
                className="relative flex-shrink-0 w-24 h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center"
              >
                
                <div className="absolute inset-0 rounded-full blur-lg bg-purple-500/20" />

               
                <div className="absolute inset-0 rounded-full p-[1px] bg-gradient-to-r from-[#FF3BFF] via-[#D94FD5] to-[#ECBFBF]">
                  <div className="w-full h-full rounded-full bg-[#120021] flex items-center justify-center overflow-hidden">
                    <img src={img} alt={`partner-${i}`} className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - Scrolls Right (bottom) */}
        <div className="w-full overflow-hidden py-5">
          <div
            className="flex gap-8 animate-scroll-right"
            style={{ width: "max-content" }}
          >
            {[...row2, ...row2].map((img, i) => (
              <div
                key={`r2-${i}`}
                className="relative flex-shrink-0 w-24 h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center"
              >
                
                <div className="absolute inset-0 rounded-full blur-lg bg-purple-500/20" />

                
                <div className="absolute inset-0 rounded-full p-[1px] bg-gradient-to-r from-[#FF3BFF] via-[#D94FD5] to-[#ECBFBF]">
                  <div className="w-full h-full rounded-full bg-[#120021] flex items-center justify-center overflow-hidden">
                    <img src={img} alt={`partner-${i}`} className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    
      <style>{`
        
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

       
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
          will-change: transform;
        }

        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
          will-change: transform;
        }

       
      `}</style>
    </section>
  );
}
