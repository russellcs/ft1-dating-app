import Webcam from "react-webcam";
import { useState, useRef, useCallback } from "react";

const Selfie = (props) => {
  const webcamRef = useRef();
  const [imgSrc, setImgSrc] = useState(null);

  const capture = useCallback(() => {
    let imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);

  console.log(imgSrc);

  //todo

  //1 place the captured image on top of the live image on save

  //2 on image save offer confirm option

  //3 on confirm send base 64 encoded string to user object in users array

  //4 styling

  const deletePhoto = () => setImgSrc(null);

  return (
    <>
      <h1>Take a photo for your profile</h1>
      <div className="selfieContainer">
        <div className="webcam">
          <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
        </div>

        <div className="selfie">
          <img src={imgSrc} />{" "}
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
          className="btn btn-light"
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
          className="registerButton btn btn-success"
          onClick={(e) => {
            e.preventDefault();
            props.addNewUser();
          }}
        >
          Register Now
        </button>
      )}
    </>
  );
};

export default Selfie;
