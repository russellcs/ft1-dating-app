import { religions, wantKids, smokes } from "../../config/formConfig";

const RegisterPartThree = (props) => {
  const {
    smokes: smokesErrors,
    haveKids: haveKidsErrors,
    wantKids: wantKidsErrors,
    religion: religionErrors,
  } = props.errors;
  return (
    <>
      <h1>a few more details...</h1>
      <div className="formRow">
        <label>
          Smokes?:
          <select defaultValue="" name="smokes">
            <option value="" disabled>
              Select
            </option>
            {smokes.map((smokes, index) => (
              <option key={index} value={index}>
                {smokes}
              </option>
            ))}
          </select>
          <p>{smokesErrors}</p>
        </label>
      </div>
      <div className="formRow">
        <label>
          Do you have any kids?:
          <select defaultValue="" name="haveKids">
            <option value="" disabled>
              Select
            </option>
            <option value="0">No</option>
            <option value="1">Yes</option>
            <option value="2">Prefer not to say</option>
          </select>
        </label>
        <p>{haveKidsErrors}</p>
      </div>
      <div className="formRow">
        <label>
          Do you want kids in the future?
          <select defaultValue="" name="wantKids">
            <option value="" disabled>
              Select
            </option>
            {wantKids.map((kids, index) => (
              <option key={index} value={index}>
                {kids}
              </option>
            ))}
          </select>
          <p>{wantKidsErrors}</p>
        </label>
      </div>
      <div className="formRow">
        <label>
          Religion:
          <select defaultValue="" name="religion">
            <option value="" disabled>
              Select
            </option>
            {religions.map((religion, index) => (
              <option key={index} value={index}>
                {religion}
              </option>
            ))}
          </select>
          <p>{religionErrors}</p>
        </label>
      </div>
      <nav>
        <button className="backButton" onClick={() => props.setRegScreen(1)}>
          Back
        </button>
        {smokesErrors === undefined &&
          haveKidsErrors === undefined &&
          wantKidsErrors === undefined &&
          religionErrors === undefined && (
            <button
              className="nextButton"
              onClick={() => props.setRegScreen(3)}
            >
              Next
            </button>
          )}
      </nav>
    </>
  );
};

export default RegisterPartThree;
