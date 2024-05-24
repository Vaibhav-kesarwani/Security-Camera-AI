import React, { useRef } from 'react'

type Props = {}

const Home = (props: Props) => {
  const webcamRef = useRef<Webcam>(null);

  return (
    <div>Hello world</div>
  )
}

export default Home