"use client"
import React, { useRef } from 'react'
import Webcam from 'react-webcam';

type Props = {}

const Home = (props: Props) => {
  const webcamRef = useRef<Webcam>(null);


  return (
    <div className="flex h-screen">
      <div className="relative">
        <div className="relative h-screen w-full">
          <Webcam ref={webcamRef}/>
        </div>
      </div>
    </div>
  )
}

export default Home