import { calculateAge } from "./utils/utils";

const DisplayMatches = (props) => {
  return (
    <>
      {props.users.map((item, index) => {
        return (
          <div key={index}>
            <p>
              {item.personalDetails.name.firstName},{" "}
              {item.personalDetails.height}cm,{" "}
              {calculateAge(item.personalDetails.dob.year)}, 
              {item.personalDetails.religion}
              {false && item.personalDetails.kids}
              <button>Like</button>
            </p>
          </div>
        );
      })}
    </>
  );
};

export default DisplayMatches;
