import Webcam from "react-webcam";
import React, { useState, useRef, useCallback } from "react";

const Selfie = (props) => {
  const webcamRef = useRef();
  const [imgSrc, setImgSrc] = useState(null);
  const videoConstraints = {
    width: 500,
    height: 400,
    facingMode: "user",
  };

  const capture = useCallback(() => {
    let imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);

  const deletePhoto = () => setImgSrc(null);

  //todo

  //1 place the captured image on top of the live image on save

  //2 on image save offer confirm option

  //3 on confirm send base 64 encoded string to user object in users array

  //4 styling

  return (
    <>
      <h1>Take a photo for your profile</h1>
      <p className="camera_permissions">Please allow camera permissions</p>
      <div className="selfieContainer">
        <div className="webcam">
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
          />
        </div>

        <div className="selfie">
          <img src={imgSrc} />
        </div>
      </div>
      {imgSrc === null && (
        <button
          className="selfieBtn btn btn-primary"
          onClick={(e) => {
            e.preventDefault();
            capture();
          }}
        >
          Take photo
        </button>
      )}
      {imgSrc !== null && (
        <button
          className="btn btn-secondary selfieBtn"
          onClick={(e) => {
            e.preventDefault();
            deletePhoto();
          }}
        >
          Take another photo
        </button>
      )}
      {imgSrc !== null && (
        <button
          className="registerButton btn btn-success margin-top"
          onClick={(e) => {
            e.preventDefault();
            props.addNewUser(imgSrc);
          }}
        >
          Register Now
        </button>
      )}
    </>
  );
};

export default Selfie;
