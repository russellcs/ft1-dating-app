import axios from "axios";
import { getUniqueId } from "../generic";
import { timeConverter } from "../../config/formConfig";

let apiData = { randoNames: [] };

export const getApiData = async () => {
  try {
    let result = await axios.get("https://randomuser.me/api/");
    apiData.randoNames = result.data;
    console.log(apiData.randoNames);
  } catch (error) {
    return console.log("name api error:", error);
  }
};

function drawRandom(array) {
  let index = Math.floor(Math.random() * array.length);
  return array[index];
}
let allTheBabes = [];

function randomNum(max, min = 0) {
  return Math.floor(Math.random() * max) + min;
}
// image random?

function randomDob() {
  let now = new Date();
  let start = new Date(now - 1000 * 60 * 60 * 24 * 365 * 40); //max 40 y.o
  let end = new Date(now - 1000 * 60 * 60 * 24 * 365 * 18); //min 18 y.o
  let randomDate = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
  return timeConverter(randomDate);
}

for (let i = 0; i < 10; i++) {
  let babe = {
    userId: getUniqueId(16),
    signUpTimeStamp: Date.now(),
    PersonalDetails: {
      name: {
        firstName: "", //
        secondName: "", //
      },
      selfie: { image: "" }, //
      dob: randomDob(),
      location: {
        town: "", //
        postCode: "", //
        longitude: 0,
        latitude: 0,
      },
      kids: randomNum(2),
      religion: randomNum(13),
      height: 0,//
      gender: randomNum(5),
      smokers: randomNum(4),
    },
    Preferences: {
        lifeStyle: { marriage: }
    }
  };
}

// 2022 -> 2004 (youngest -> 18)
// 2004 - 22 = 1982 (older -> 40) avg 29
