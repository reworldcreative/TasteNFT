import React from "react";
import "./upload.scss";

export default function Upload({ isError, hideError, getFilePath }) {
  const handleFileChange = (files) => {
    if (files && files.length > 0) {
      const file = files[0];
      // console.log("File name:", file.name);
      // console.log("File path:", URL.createObjectURL(file));
      // console.log("File type:", file.type);
      // console.log("File size:", file.size, "bytes");
      const fileSizeInMB = (file.size / (1024 * 1024)).toFixed(2); // перетворення в мегабайти
      // console.log("File size:", fileSizeInMB, "MB");

      const fileNameSplit = file.name.split("."); // Розбиття імені файлу за крапкою
      const fileExtension = fileNameSplit[fileNameSplit.length - 1].toLowerCase(); // Останній елемент - це розширення
      // console.log("File extension:", fileExtension);

      if (fileSizeInMB > 50 || !["jpg", "png", "gif"].includes(fileExtension)) {
        isError();
      } else {
        hideError();
        getFilePath(URL.createObjectURL(file));
      }
    }
  };

  const handleFileInput = () => {
    const fileInput = document.getElementById("fileInput");
    fileInput.click();
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const fileInput = document.getElementById("fileInput");
    const files = e.dataTransfer.files;
    const fileList = new DataTransfer();
    for (let i = 0; i < files.length; i++) {
      fileList.items.add(files[i]);
    }
    fileInput.files = fileList.files;
    handleFileChange(files);
  };
  return (
    <div className="upload">
      <h2 className="section-text_accent upload__title">Upload the artwork you will be selling</h2>
      <div className="upload__container" onClick={handleFileInput} onDragOver={handleDragOver} onDrop={handleDrop}>
        <input type="file" id="fileInput" className="inputfile" onChange={(e) => handleFileChange(e.target.files)} />
        <div className="upload__text">
          <p className="section-text_accent upload__property">1500x500px. JPG, PNG or GIF. 100MB max size.</p>

          <p className="section-text_accent">Drag and drop an image here, or click to browse</p>
        </div>
      </div>
    </div>
  );
}
