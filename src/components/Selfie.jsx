import Webcam from "react-webcam";
import { useState, useRef, useCallback } from "react";

const Selfie = () => {
  const webcamRef = useRef();
  const [imgSrc, setImgSrc] = useState(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);

  //todo

  //1 place the captured image on top of the live image on save

  //2 on image save offer confirm option

  //3 on confirm send base 64 encoded string to user object in users array

  //4 styling

  return (
    <>
      <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
      <button onClick={capture}>Save</button>
      <img src={imgSrc} />
    </>
  );
};

export default Selfie;
