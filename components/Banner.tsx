"use client";

import React from "react";
import Container from "./Container";
import FadeIn from "./FadeIn";

function Banner() {
  return (
    <Container>
      <div className="min-h-screen flex justify-center relative">
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2
          -translate-y-1/2 w-96 h-96 bg-gradient-radial from-cyan-400/10 
          to-transparent rounded-full -z-10"
        ></div>
        <div className="absolute top-[38%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <FadeIn>
            <div className="text-center">
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r
                 from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent"
              >
                Creative Portfolio
              </h1>
              <p className="text-xl text-slate-400 font-normal opacity-80">
                Live2D・AI・Web制作の記録とアーカイブ
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </Container>
  );
}

export default Banner;
