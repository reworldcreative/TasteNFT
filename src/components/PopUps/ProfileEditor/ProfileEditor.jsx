import React, { useState } from "react";
import "./profileEditor.scss";
import { useForm } from "react-hook-form";
import InputContacts from "./Input/InputContacts";
import defaultLogo from "@/img/avatars/profile-default-image.jpg";
import closeIcon from "@/img/icons/close-icon.svg";
import twitchIcon from "@/img/icons/twitch-icon.svg";
import instagramIcon from "@/img/icons/instagram-icon.svg";
import twitterIcon from "@/img/icons/twitter-icon.svg";
import onlyfansIcon from "@/img/icons/onlyfans-icon.svg";
import PictureComponent from "../../../../plugins/PictureComponent";

export default function ProfileEditor() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });
  const onSubmit = (data) => console.log(data);

  const [imageSrc, setImageSrc] = useState(defaultLogo);
  const handleFileChange = (files) => {
    if (files && files.length > 0) {
      const file = files[0];
      const fileSizeInMB = (file.size / (1024 * 1024)).toFixed(2);

      const fileNameSplit = file.name.split(".");
      const fileExtension =
        fileNameSplit[fileNameSplit.length - 1].toLowerCase();
      if (fileSizeInMB > 5 || !["jpg", "png", "gif"].includes(fileExtension)) {
      } else {
        setImageSrc(URL.createObjectURL(file)); // Оновлення стану
      }
    }
  };

  const handleFileInput = (e) => {
    if (e.target.classList.contains("delete")) {
      return;
    }

    const fileInput = document.getElementById("formLogo");
    fileInput.click();
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    const fileInput = document.getElementById("formLogo");
    e.preventDefault();
    const files = e.dataTransfer.files;
    const fileList = new DataTransfer();
    for (let i = 0; i < files.length; i++) {
      fileList.items.add(files[i]);
    }
    fileInput.files = fileList.files;
    handleFileChange(files);
  };
  return (
    <div className="profileEditor" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="section-title">Edit your Profile</h2>
      <form className="profileEditor__form">
        <div className="profileEditor__row">
          <div className="inputContainer">
            <label className="section-text_accent" htmlFor="formName">
              Name
            </label>
            <input
              className="userInput"
              id="formName"
              defaultValue=""
              {...register("Name")}
            />
          </div>
          <div className="inputContainer">
            <label className="section-text_accent" htmlFor="formUsername">
              Username
            </label>
            <div className="userInput__labeled">
              <span className="section-text_accent">@</span>
              <input
                className="userInput"
                id="formUsername"
                defaultValue=""
                {...register("Username")}
              />
            </div>
          </div>
        </div>

        <div className="profileEditor__row">
          <div className="inputContainer">
            <label className="section-text_accent" htmlFor="formEmail">
              Email
            </label>
            <input
              type="email"
              className="userInput"
              id="formEmail"
              defaultValue=""
              {...register("Email")}
            />
          </div>
          <div className="inputContainer">
            <p
              className="section-text_accent"
              style={{ fontSize: "12px", paddingRight: "18px" }}
            >
              Add your email address to receive notifications about your
              activity on Foundation. This will not be shown on your profile.
            </p>
          </div>
        </div>

        <div className="inputContainer">
          <label className="section-text_accent" htmlFor="formBIO">
            BIO
          </label>
          <textarea
            type="text"
            className="userInput"
            id="formBIO"
            defaultValue=""
            rows="6"
            {...register("BIO")}
          />
        </div>

        <div className="inputContainer">
          <label className="section-text_accent" htmlFor="formLogo">
            Profile image
          </label>

          <div
            className="userInput__upload"
            onClick={handleFileInput}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <PictureComponent
              src={imageSrc}
              alt="avatar"
              width="80"
              height="80"
              className="userInput__avatar"
              id="Logo-img"
            />

            <div className="userInput__text">
              <p className="section-text_accent">file.name</p>
              <p className="section-text_accent">5.00 mb</p>
              <button
                className="section-text timeChange__text delete"
                onClick={() => setImageSrc(defaultLogo)}
              >
                <img
                  src={closeIcon}
                  alt="close icon"
                  width={11}
                  height={10.37}
                />
                delete file
              </button>
            </div>
            <input
              type="file"
              accept="image/*"
              className="userInput inputfile"
              id="formLogo"
              {...register("Logo")}
              onChange={(e) => handleFileChange(e.target.files)}
            />
          </div>
        </div>

        <div className="profileEditor__contacts">
          <p className="section-text_accent">Contacts</p>
          <ul className="profileEditor__contacts-list">
            <InputContacts
              label="Twitch"
              register={register}
              id="formTwitch"
              image={twitchIcon}
            />
            <InputContacts
              label="Instagram"
              register={register}
              id="formInstagram"
              image={instagramIcon}
            />
            <InputContacts
              label="Twitter"
              register={register}
              id="formTwitter"
              image={twitterIcon}
            />
            <InputContacts
              label="Onlyfans"
              register={register}
              id="formOnlyfans"
              image={onlyfansIcon}
            />
          </ul>
        </div>

        <button type="submit" className="button">
          Save changes
        </button>
      </form>
    </div>
  );
}
