import React, { useRef, useEffect } from "react";

const CanvasComponent = ({ addImage }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const image = new Image();
    image.src = addImage;

    image.onload = () => {
      context.drawImage(image, 0, 0, canvas.width, canvas.height);
    };
  }, [addImage]);

  return (
    <div>
      <canvas className="censor__image" ref={canvasRef} />
    </div>
  );
};

export default CanvasComponent;
