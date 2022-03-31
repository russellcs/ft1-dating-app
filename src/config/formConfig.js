import Joi from "joi";

export const religions = [
  "Prefer not to say",
  "African Traditional & Diasporic",
  "Agnostic",
  "Atheist",
  "Buddhism",
  "Chinese traditional religion",
  "Christianity",
  "Hinduism",
  "Islam",
  "Judaism",
  "Sikhism",
  "Spiritism",
  "Other",
];

export const religionsPref = [
  "No preference",
  "African Traditional",
  "Agnostic",
  "Atheist",
  "Buddhism",
  "Chinese Traditional",
  "Christianity",
  "Hinduism",
  "Islam",
  "Judaism",
  "Sikhism",
  "Spiritism",
];

export const errorCodes = {
  lastName: "Please enter your last name",
  email: "Please enter a valid email address",
  firstName: "Please enter your first name",
  dateOfBirth: "You must be over 18 years old to register",
  gender: "Please select your gender",
  postCode: "Please enter a valid UK postcode",
  height: "Please enter your height in cm", //should add logic for while range exists?
  smokes: "Please select your smoking preference",
  haveKids: "Please select if you have any kids",
  wantKids: "Please select if you want kids in the future",
  religion: "Please select your religion",
  relationship: "Please select what type of relationship you are looking for",
  genderPref: "Please select your gender preference",
  minAge: "Please enter a valid minimum age you would consider",
  maxAge: "Please enter a valid maximum age you would consider",
  minHeight: "Height must be higher than 0cm and lower than 252cm",
  maxHeight: "Height must be higher than minimum height",
  acceptedDistance:
    "Please enter the maximum distance you would be willing to travel",
  kidsAccepted: "Please select if you would consider matches that have kids",
  smokersPref: "Please select if you want to be matched with smokers",

  // acceptedReligions: "Please select religions you want to be matched with",
};

export const wantKids = [
  "Don't want children",
  "Not sure yet",
  "Open to children",
  "Want children",
];

export const smokes = ["Prefer not to say", "No", "Sometimes", "Yes"];

export const genders = [
  "Female",
  "Male",
  "Non-binary",
  "Transgender",
  "Intersex",
];

export const gendersPref = [
  "No preference",
  "Female",
  "Male",
  "Non-binary",
  "Transgender",
  "Intersex",
];

const now = Date.now();
const eigthteenYearsAgo = new Date(now - 1000 * 60 * 60 * 24 * 365 * 18);
const ukPostcode =
  "^([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([AZa-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9]?[A-Za-z])))) [0-9][A-Za-z]{2})$";
export const schema = {
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string().min(4).required(),
  firstName: Joi.string().alphanum().max(30).min(2).required(),
  lastName: Joi.string().alphanum().max(30).min(2).required(),
  dateOfBirth: Joi.number().max(eigthteenYearsAgo.getTime()).required(),
  gender: Joi.required(),
  town: Joi.string().alphanum().max(30).min(2).required(),
  postCode: Joi.string().regex(RegExp(ukPostcode)).required(),
  height: Joi.number().less(252).greater(54).required(),
  smokes: Joi.required(),
  haveKids: Joi.required(),
  wantKids: Joi.required(),
  religion: Joi.required(),
  relationship: Joi.required(),
  genderPref: Joi.required(),
  minAge: Joi.number().integer().less(125).greater(17).required(),
  maxAge: Joi.number()
    .integer()
    .less(125)
    .greater(Joi.ref("minAge"))
    .required(),
  // acceptedReligions: Joi.required(),
  minHeight: Joi.number().required().positive().integer(),
  maxHeight: Joi.number()
    .required()
    .positive()
    .integer()
    .greater(Joi.ref("minHeight")),
  acceptedDistance: Joi.number().integer().positive().required(),
  kidsAccepted: Joi.required(),
  smokersPref: Joi.required(),
};

export function joiDataReorder(details) {
  const errorsMod = {};
  details.forEach((error) => {
    let errorMessageName =
      error.message.charAt(0).toUpperCase() +
      error.message.charAt(1).toUpperCase() +
      error.message.slice(2);
    errorsMod[error.context.key] = errorMessageName;
  });

  return errorsMod;
}

export function timeConverter(UNIX_timestamp) {
  const a = new Date(UNIX_timestamp);
  var months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  var newYear = a.getFullYear();
  var newMonth = months[a.getMonth()];
  var newDate = a.getDate();
  var time = { year: newYear, months: newMonth, day: newDate };
  return time;
}

export function dataConstructor(e) {
  let value = e.target.value;
  if (e.target.name === "genderPref") {
    const genderArray = [];
    for (let index = 0; index < e.target.selectedOptions.length; index++) {
      genderArray.push(Number(e.target.selectedOptions[index].value));
    }
    value = genderArray;
  }

  if (e.target.name === "dateOfBirth") {
    value = new Date(value).getTime();
  }

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
  return value;
}
