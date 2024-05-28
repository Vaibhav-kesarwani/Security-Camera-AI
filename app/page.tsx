"use client";
import { ModeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { beep } from "@/utils/audio";
import { Camera, FlipHorizontal, PersonStanding, Video, Volume2 } from "lucide-react";
import React, { useRef, useState } from "react";
import { Rings } from "react-loader-spinner";
import Webcam from "react-webcam";
import { toast } from "sonner";

type Props = {};

const Home = (props: Props) => {
  const webcamRef = useRef<Webcam>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // State Variables
  const [mirrored, setmirrored] = useState<boolean>(false);
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [autoRecordEnable, setautoRecordEnable] = useState<boolean>(false);
  const [volume, setVolume] = useState(0);

  return (
    <div className="flex h-screen">
      {/* Left divison - webcam and Canvas */}
      <div className="relative">
        <div className="relative h-screen w-full">
          <Webcam
            ref={webcamRef}
            mirrored={mirrored}
            className="h-full w-full object-contain p-2"
          />
          <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 h-full w-full object-contain"
          ></canvas>
        </div>
      </div>
      {/* Right division - container for button panel and wiki section */}
      <div className="flex flex-row flex-1">
        <div className="border-primary" />
        <div className="border-2 max-w-xs flex flex-col gap-2 justify-between shadow-md rounded p-4">
          {/* Top section */}
          <div className="flex flex-col gap-2">
            <ModeToggle />

            <Button
              variant={"outline"}
              size={"icon"}
              onClick={() => {
                setmirrored((prev) => !prev);
              }}
            >
              <FlipHorizontal />
            </Button>

            <Separator className="my-2" />
          </div>

          {/* Middle section */}
          <div className="flex flex-col gap-2">
            <Separator className="my-2" />

            <Button
              variant={"outline"}
              size={"icon"}
              onClick={userPromptScreenshot}
            >
              <Camera />
            </Button>

            <Button
              variant={isRecording ? "destructive" : "outline"}
              size={"icon"}
              onClick={userPromptRecord}
            >
              <Video />
            </Button>

            <Separator className="my-2" />

            <Button
              variant={autoRecordEnable ? "destructive" : "outline"}
              size={"icon"}
              onClick={toggleAutoRecord}
            >
              {autoRecordEnable ? <Rings color="white" height={45} /> : <PersonStanding />}
            </Button>
          </div>

          {/* Bottom section */}
          <div className="flex flex-col gap-2">
            <Separator className="my-2" />

            <Popover>
              <PopoverTrigger asChild>
                <Button variant={"outline"} size={"icon"}>
                  <Volume2 />
                </Button>
              </PopoverTrigger>
              
              <PopoverContent>
                <Slider
                  max={1}
                  min={0}
                  step={0.2}
                  defaultValue={[volume]}
                  onValueCommit={(value) => {
                    setVolume(value[0]);
                    beep(value[0]);
                  }}
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </div>
  );

  // Handler Function
  function userPromptScreenshot() {
    // take picture
    // save it to downloads
  }

  function userPromptRecord() {
    // check if recording
    // then stop recording
    // and save to downloads
    // if not recording
    // start recording
  }

  function toggleAutoRecord() {
    if (autoRecordEnable) {
      setautoRecordEnable(false);
      // show toast to user to notify te change
      toast("Autorecord Disable");
    } else {
      setautoRecordEnable(true);
      // show toast to user to notify te change
      toast("Autorecord Enable");
    }
  }
};

export default Home;
