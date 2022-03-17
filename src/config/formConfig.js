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
];

export const wantKids = [
  "Prefer not to say",
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
  postcode: Joi.string().regex(RegExp(ukPostcode)).required(),
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
  acceptedReligions: Joi.required(),
  acceptedDistance: Joi.number().integer().positive().required(),
  kidsAccepted: Joi.required(),
  smokersPref: Joi.required(),
};

//Add validation for select options

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
