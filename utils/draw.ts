import { DetectedObject } from "@tensorflow-models/coco-ssd";

// mirrored, predictions, canvasRef.current?.getContext('2d')
export function drawOnCanvas(
  mirrored: boolean,
  predictions: DetectedObject[],
  ctx: CanvasRenderingContext2D | null | undefined
) {
  predictions.forEach((detectedObject: DetectedObject) => {
    const { class: name, bbox, score } = detectedObject;
    const [x, y, width, height] = bbox;

   
  });
}