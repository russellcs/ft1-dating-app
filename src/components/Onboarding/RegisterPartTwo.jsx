import { genders } from "../../config/formConfig";

const RegisterPartTwo = (props) => {
  const {
    dateOfBirth: dateOfBirthErrors,
    gender: genderErrors,
    town: townErrors,
    postcode: postcodeErrors,
    height: heightErrors,
  } = props.errors;

  return (
    <>
      <h1>Please enter your details</h1>
      <div className="formRow">
        <label>
          Date of Birth:
          <input type="date" name="dateOfBirth" />
          <p>{dateOfBirthErrors}</p>
        </label>
      </div>
      <div className="formRow">
        <label>
          Gender:
          <select defaultValue="" name="gender">
            <option value="" disabled>
              Select
            </option>
            {genders.map((gender, index) => (
              <option key={index} value={index}>
                {gender}
              </option>
            ))}
          </select>
          <p>{genderErrors}</p>
        </label>
      </div>
      <div className="formRow">
        <label>
          Location:
          <input type="name" name="town" placeholder="Town" />
          <input type="name" name="postcode" placeholder="Postcode" />
        </label>
        <p>{townErrors}</p>
        <p>{postcodeErrors}</p>
      </div>
      <div className="formRow">
        <label>
          Height:
          <input type="number" placeholder="in cm" name="height" />
          <p>{heightErrors}</p>
        </label>
      </div>
      <nav>
        <button onClick={() => props.setRegScreen(0)}>Back</button>
        {dateOfBirthErrors === undefined &&
          genderErrors === undefined &&
          townErrors === undefined &&
          postcodeErrors === undefined &&
          heightErrors === undefined && (
            <button
              className="nextButton"
              onClick={() => props.setRegScreen(2)}
            >
              Next
            </button>
          )}
      </nav>
    </>
  );
};

export default RegisterPartTwo;
