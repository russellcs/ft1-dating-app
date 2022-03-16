import { religions, wantKids, smokes } from "../../config/formConfig";

const RegisterPartThree = (props) => {
  return (
    <>
      <h1>Please enter your details</h1>
      <div className="formRow">
        <label>
          Smokes?:
          <select defaultValue={"DEFAULT"} name="smokes">
            <option value="DEFAULT" disabled>
              Select
            </option>
            {smokes.map((smokes, index) => (
              <option key={index} value={index}>
                {smokes}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="formRow">
        <label>
          Do you have any kids?:
          <select defaultValue={"DEFAULT"} name="haveKids">
            <option value="DEFAULT" disabled>
              Select
            </option>
            <option value="0">No</option>
            <option value="1">Yes</option>
            <option value="2">Prefer not to say</option>
          </select>
        </label>
      </div>
      <div className="formRow">
        <label>
          Do you want kids in the future?
          <select defaultValue={"DEFAULT"} name="wantKids">
            <option value="DEFAULT" disabled>
              Select
            </option>
            {wantKids.map((kids, index) => (
              <option key={index} value={index}>
                {kids}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="formRow">
        <label>
          Religion:
          <select defaultValue={"DEFAULT"} name="religion">
            <option value="DEFAULT" disabled>
              Select
            </option>
            {religions.map((religion, index) => (
              <option key={index} value={index}>
                {religion}
              </option>
            ))}
          </select>
        </label>
      </div>
      <nav>
        <button className="backButton" onClick={() => props.setRegScreen(1)}>
          Back
        </button>
      </nav>
      <input className="submit" type="submit" value="Register"></input>
    </>
  );
};

export default RegisterPartThree;
