import React from 'react'

export default function Section5() {
  return (
    <div className="bg-[#050522]  md:px-10 pb-10">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-6">
      
          {/*  1 */}
          <div className="min-w-[300px] md:min-w-[calc(50%-12px)]  overflow-hidden">
            <img src="/Img01.png" alt="" className="w-full h-full object-cover " />
          </div>

          {/*  2 */}
          <div className="min-w-[300px] md:min-w-[calc(50%-12px)]  overflow-hidden">
            <img src="/Img02.png" alt="" className="w-full h-full object-cover " />
          </div>
          {/* 3 */}
          <div className="min-w-[300px] md:min-w-[calc(50%-12px)]  overflow-hidden">
            <img src="/Img03.png" alt="" className="w-full h-full object-cover " />
          </div>

          {/* 4 */}
          <div className="min-w-[300px] md:min-w-[calc(50%-12px)]  overflow-hidden">
            <img src="/Img04.png" alt="" className="w-full h-full object-cover " />
          </div>

          {/* 5*/}
          <div className="min-w-[300px] md:min-w-[calc(50%-12px)] h-[300px] overflow-hidden">
            <img src="/Img05.png" alt="" className="w-full h-full object-cover " />
          </div>

          {/* 6 */}
          <div className="min-w-[300px] md:min-w-[calc(50%-12px)]  h-[300px] overflow-hidden">
            <img src="/Img06.png" alt="" className="w-full h-full object-cover " />
          </div>

        </div>
      </div>
  )
}

