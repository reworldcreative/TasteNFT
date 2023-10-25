import React from "react";

const PictureComponent: React.FC<{
  id?: string;
  src: string;
  alt?: string;
  width?: string;
  height?: string;
  className?: string;
}> = ({ id, src, alt, className, width, height }) => {
  const webpSrc = src.replace(/\.\w+$/, ".webp");

  return (
    <picture>
      <source type="image/webp" srcSet={webpSrc} />
      <img
        id={id}
        src={src}
        alt={alt}
        className={className}
        width={width}
        height={height}
      />
    </picture>
  );
};

export default PictureComponent;
