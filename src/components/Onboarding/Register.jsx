import { useState } from "react";
import { schema, joiDataReorder, timeConverter } from "../../config/formConfig";
import Joi from "joi";
import RegisterPartOne from "./RegisterPartOne";
import RegisterPartTwo from "./RegisterPartTwo";
import RegisterPartThree from "./RegisterPartThree";
import "../Onboarding/register.css";
import Preferences from "./Preferences";
import { getLngLat } from "../../utils/general";
import { types } from "../../redux/types";
import { useDispatch } from "react-redux";

const Register = (props) => {
  const dispatch = useDispatch();
  const [newUserData, setNewUserData] = useState({});
  const [errors, setErrors] = useState({});
  const [regScreen, setRegScreen] = useState(0);

  const addNewUser = async () => {
    let lifeStyleCombo = newUserData.relationship;
    let openToKids = Number(newUserData.wantKids);
    lifeStyleCombo = { ...lifeStyleCombo, openToKids };
    const coords = await getLngLat(newUserData.postCode);
    const newUserStructured = {
      userId: props.newUserId,
      signUpTimeStamp: Date.now(),
      personalDetails: {
        name: {
          firstName: newUserData.firstName,
          lastName: newUserData.lastName,
        },
        dob: timeConverter(newUserData.dateOfBirth),
        location: {
          town: newUserData.town,
          postCode: newUserData.postCode,
          longitude: coords.longitude,
          latitude: coords.latitude,
        },
        kids: Number(newUserData.haveKids),
        religion: Number(newUserData.religion),
        height: Number(newUserData.height),
        gender: Number(newUserData.gender),
        smokers: Number(newUserData.smokes),
      },
      preferences: {
        lifeStyle: lifeStyleCombo, // can I push want kids to this?
        age: {
          min: Number(newUserData.minAge),
          max: Number(newUserData.maxAge),
        },
        // acceptedReligions: newUserData.acceptedReligions,
        height: {
          min: Number(newUserData.minHeight),
          max: Number(newUserData.maxHeight),
        },
        gender: newUserData.genderPref,
        kidsAccepted: Number(newUserData.kidsAccepted),
        smokers: newUserData.smokersPref,
        acceptedDistance: Number(newUserData.acceptedDistance),
      },
      login: { email: newUserData.email, password: newUserData.password },
      status: { type: "member", lastLoginTimestamp: Date.now() },
    };
    dispatch({ type: types.ADD_USER, payload: newUserStructured });
    // props.addUser(newUserStructured);
    props.setScreen(1);
  };

  const onInput = (e) => {
    let value = e.target.value;

    if (e.target.name === "acceptedReligions") {
      const religionArray = [];
      for (let index = 0; index < e.target.selectedOptions.length; index++) {
        religionArray.push(Number(e.target.selectedOptions[index].value));
      }
      value = religionArray;
    }

    if (e.target.name === "genderPref") {
      const genderArray = [];
      for (let index = 0; index < e.target.selectedOptions.length; index++) {
        genderArray.push(Number(e.target.selectedOptions[index].value));
      }
      value = genderArray;
    }

    if (e.target.name === "dateOfBirth") {
      value = new Date(e.target.value).getTime();
    }

    // if ((e.target.name === "haveKids") & (value === "0")) {
    //   value = undefined;
    // }

    // if (e.target.name === "haveKids" && value === "1") {
    //   value = false;
    // }

    // if (e.target.name === "haveKids" && value === "2") {
    //   value = true;
    // }

    if (e.target.name === "relationship" && value === "0") {
      value = { marriage: true, casual: false };
    }

    if (e.target.name === "relationship" && value === "1") {
      value = { marriage: false, casual: true };
    }

    if (e.target.name === "relationship" && value === "2") {
      value = { marriage: true, casual: true };
    }

    if (e.target.name === "smokersPref" && value === "0") {
      value = true;
    }

    if (e.target.name === "smokersPref" && value === "1") {
      value = false;
    }

    const newState = { ...newUserData, [e.target.name]: value };
    setNewUserData(newState);
    onValidate(newState);
  };

  const onValidate = async (data) => {
    const _joiInstance = Joi.object(schema);
    try {
      // await _joiInstance.validateAsync(data);
      await _joiInstance.validateAsync(data, { abortEarly: false });
      setErrors({ errors: "" });
    } catch (errors) {
      setErrors(joiDataReorder(errors.details));
    }
  };

  console.log(newUserData);
  console.log(props);
  // console.log(errors);
  return (
    <>
      <div className="containerReg">
        <form className="form" onInput={onInput} name="registerForm">
          {regScreen === 0 && (
            <RegisterPartOne
              setRegScreen={setRegScreen}
              errors={errors}
              newUserData={newUserData}
            />
          )}
          {regScreen === 1 && (
            <RegisterPartTwo setRegScreen={setRegScreen} errors={errors} />
          )}
          {regScreen === 2 && (
            <RegisterPartThree setRegScreen={setRegScreen} errors={errors} />
          )}
          {regScreen === 3 && (
            <Preferences
              setRegScreen={setRegScreen}
              errors={errors}
              addNewUser={addNewUser}
              newUserData={newUserData}
              setUserData={setNewUserData}
            />
          )}
        </form>
      </div>
    </>
  );
};

export default Register;
