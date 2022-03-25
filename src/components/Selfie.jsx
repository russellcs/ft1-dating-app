import Webcam from "react-webcam";
import { useState, useRef, useCallback } from "react";

const Selfie = (props) => {
  const webcamRef = useRef();
  const [imgSrc, setImgSrc] = useState(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);

  console.log(imgSrc);

  //todo

  //1 place the captured image on top of the live image on save

  //2 on image save offer confirm option

  //3 on confirm send base 64 encoded string to user object in users array

  //4 styling

  return (
    <>
      <h1>Take a photo for your profile</h1>
      <div>
        <div>
          <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
        </div>

        <div>
          <img src={imgSrc} />{" "}
        </div>
      </div>
      <button
        onClick={(e) => {
          e.preventDefault();
          capture();
        }}
      >
        Save
      </button>
      <button
        className="registerButton"
        onClick={(e) => {
          e.preventDefault();
          props.addNewUser(imgSrc);
        }}
      >
        Register Now
      </button>
    </>
  );
};

export default Selfie;
