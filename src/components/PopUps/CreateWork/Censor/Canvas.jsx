import React, { useRef, useEffect } from "react";

const CanvasComponent = ({ addImage, filter }) => {
  const canvasRef = useRef(null);
  const image = new Image();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    context.filter = "none";

    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = canvas.parentElement.clientHeight;
    image.onload = () => {
      context.drawImage(image, 0, 0, canvas.width, canvas.height);
    };
  }, [addImage]);

  image.src = addImage;

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const rect = canvas.getBoundingClientRect();
    // const rect = canvas.closest(".ReactModal__Content").getBoundingClientRect();
    const mouse = {
      x: 0,
      y: 0,
      click: false,
    };

    const radius = 50;

    function draw(event) {
      const rect = canvas.getBoundingClientRect();
      const compressionPercentWidth = image.width / canvas.width;
      const compressionPercentHeight = image.height / canvas.height;

      const sourceMouseX =
        (event.clientX - rect.left) * compressionPercentWidth;
      const sourceMouseY =
        (event.clientY - rect.top) * compressionPercentHeight;

      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;

      if (filter == "blur") {
        context.filter = "blur(2px)";
      } else {
        context.filter = "none";
      }

      context.drawImage(
        image,
        sourceMouseX - radius / 2,
        sourceMouseY - radius / 2,
        radius,
        radius,
        mouse.x - radius / 2 / compressionPercentWidth,
        mouse.y - radius / 2 / compressionPercentHeight,
        radius / compressionPercentWidth,
        radius / compressionPercentHeight
      );
    }

    canvas.addEventListener("mousedown", (event) => {
      if (event.buttons === 1) {
        mouse.click = true;
      }
      draw(event);
    });

    canvas.addEventListener("mousemove", (event) => {
      if (mouse.click == true) {
        draw(event);
      }
    });

    canvas.addEventListener("mouseup", (event) => {
      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
      mouse.click = false;
    });
  }, [addImage, filter]);

  return (
    <div>
      <canvas className="censor__image" ref={canvasRef} />
    </div>
  );
};

export default CanvasComponent;
