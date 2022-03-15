import { useState } from "react";
import "./register.css";

const Register = (props) => {
  // console.log(props.users);

  let [data, setData] = useState({});

  const myForm = document.forms["registerForm"];
  const formValues = new FormData(myForm);
  const dataObject = Object.fromEntries(formValues);
  console.log(dataObject);

  const onSubmit = () => {
    //will send the data to be added to users
  };

  const onInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form onInput={onInput} onSubmit={onSubmit} name="registerForm">
        <h1>Please enter your details</h1>
        <div className="formRow">
          <label>
            Email Address:
            <input type="email" placeholder="Email" name="email" />
          </label>
        </div>
        <div className="formRow">
          <label>
            Password:
            <input
              type="password"
              placeholder="Password (8 characters minimum)"
              name="password"
              minLength="8"
              required
            />
          </label>
        </div>
        <div className="formRow">
          {" "}
          <label>
            First Name:
            <input type="name" placeholder="First Name" name="firstName" />
          </label>
        </div>
        <div className="formRow">
          {" "}
          <label>
            Last Name:
            <input type="name" placeholder="Last Name" name="lastName" />
          </label>
        </div>
        <div className="formRow">
          {" "}
          <label>
            Date of Birth:
            <input type="date" name="dateOfBirth" />
          </label>
        </div>
        <div className="formRow">
          <label>
            Gender:
            <select>
              <option value="" disabled selected>
                Select
              </option>
              <option value="0">Female</option>
              <option value="1">Male</option>
              <option value="2">Other</option>
            </select>
          </label>
        </div>
        <div className="formRow">
          <label>
            Location:
            <input type="name" name="location" placeholder="Town" />
            <input type="name" name="postcode" placeholder="Postcode" />
          </label>
        </div>
        <div className="formRow">
          <label>
            Height:
            <input type="number" placeholder="in cm" name="height" />
          </label>
        </div>
        <div className="formRow">
          <label>
            Smokes?:
            <select>
              <option value="" disabled selected>
                Select
              </option>
              <option value="1">Yes</option>
              <option value="2">Socially</option>
              <option value="0">No</option>
            </select>
          </label>
        </div>
        <div className="formRow">
          <label>
            Do you have any kids?:
            <select>
              <option value="" disabled selected>
                Select
              </option>
              <option value="1">Yes</option>
              <option value="0">No</option>
            </select>
          </label>
        </div>
        <div className="formRow">
          <label>
            Do you want kids in the future?
            <select>
              <option value="" disabled selected>
                Select
              </option>
              <option value="0">No</option>
              <option value="1">Yes</option>
              <option value="2">Not sure</option>
            </select>
          </label>
        </div>
        <div className="formRow">
          <label>
            Religion:
            <select>
              <option value="" disabled selected>
                Select
              </option>
              <option value="0">African Traditional & Diasporic</option>
              <option value="1">Agnostic</option>
              <option value="2">Atheist</option>
              <option value="3">Buddhism</option>
              <option value="4">Chinese traditional religion</option>
              <option value="5">Christianity</option>
              <option value="6">Hinduism</option>
              <option value="7">Islam</option>
              <option value="8">Judaism</option>
              <option value="9">Sikhism</option>
              <option value="10">Spiritism</option>
              <option value="11">Other</option>
            </select>
          </label>
        </div>
        <input type="submit" value="Register"></input>
      </form>
    </>
  );
};

export default Register;
