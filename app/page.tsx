"use client";
import React, { useRef, useState } from "react";
import Webcam from "react-webcam";

type Props = {};

const Home = (props: Props) => {
  const webcamRef = useRef<Webcam>(null);

  // State Variables
  const [mirrored, setmirrored] = useState<boolean>(false);

  return (
    <div className="flex h-screen">
      <div className="relative">
        <div className="relative h-screen w-full">
          <Webcam ref={webcamRef} 
            mirrored={mirrored} 
            className="h-full w-full object-contain p-2"
          />
          <canvas ref={canvasRef}>

          </canvas>
        </div>
      </div>
    </div>
  );
};

export default Home;
