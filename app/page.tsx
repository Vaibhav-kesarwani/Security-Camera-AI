"use client";
import React, { useRef, useState } from "react";
import Webcam from "react-webcam";

type Props = {};

const Home = (props: Props) => {
  const webcamRef = useRef<Webcam>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // State Variables
  const [mirrored, setmirrored] = useState<boolean>(false);

  return (
    <div className="flex h-screen">
      {/* Left divison - webcam and Canvas */}
      <div className="relative">
        <div className="relative h-screen w-full">
          <Webcam ref={webcamRef} 
            mirrored={mirrored} 
            className="h-full w-full object-contain p-2"
          />
          <canvas ref={canvasRef}
            className="absolute top-0 left-0 h-full w-full object-contain" 
          >
          </canvas>
        </div>
      </div>
      {/* Right division - container for button panel and wiki section */}
      <div className="flex flex-row flex-1">
        <div className="border-primary" />
        <div className="border-2 max-w-xs flex flex-col gap-2 justify-between shadow-md rounded p-4">
          {/* Top section */}
          <div className="flex flex-col gap-2">
            <Separator />
          </div>

          {/* Middle section */}
          <div className="flex flex-col gap-2"></div>
          
          {/* Bottom section */}
          <div className="flex flex-col gap-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
