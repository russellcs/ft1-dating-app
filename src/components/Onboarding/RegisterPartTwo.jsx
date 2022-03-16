import { genders } from "../../config/formConfig";

const RegisterPartTwo = (props) => {
  return (
    <>
      <h1>Please enter your details</h1>
      <div className="formRow">
        <label>
          Date of Birth:
          <input type="date" name="dateOfBirth" />
        </label>
      </div>
      <div className="formRow">
        <label>
          Gender:
          <select defaultValue={"DEFAULT"}>
            <option value="DEFAULT" disabled>
              Select
            </option>
            {genders.map((gender, index) => (
              <option key={index} value={index}>
                {gender}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="formRow">
        <label>
          Location:
          <input type="name" name="town" placeholder="Town" />
          <input type="name" name="postcode" placeholder="Postcode" />
        </label>
      </div>
      <div className="formRow">
        <label>
          Height:
          <input type="number" placeholder="in cm" name="height" />
        </label>
      </div>
      <nav>
        <button onClick={() => props.setRegScreen(0)}>Back</button>
        <button className="nextButton" onClick={() => props.setRegScreen(2)}>
          Next
        </button>
      </nav>
    </>
  );
};

export default RegisterPartTwo;
