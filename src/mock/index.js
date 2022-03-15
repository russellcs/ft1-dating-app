export const users = [
  {
    userId: 1,
    signUpDate: 0,
    personalDetails: {
      name: { firstName: "Abdul", lastName: "Aroyo" },
      dob: { year: "1990", months: "12", day: "23" },
      location: { town: "London", postCode: "se21 0pt" },
      kids: true,
      religion: "agnostic",
      height: 165,
      gender: 0, //0 is male, 1 is female, 2 is other
      smokers: false,
    },
    preferences: {
      lifeStyle: { marriage: true, casual: false, openToKids: true },
      minAge: 24,
      maxAge: 32,
      acceptedReligions: [""],
      height: { min: 130, max: 160 },
      gender: 1, //0 is male, 1 is female, 2 is other
      kidsAccepted: true,
      smokers: false,
    },
    matches: [6, 3, 2], //ids
    likes: [], //ids
    blocked: [], //ids
    login: { email: "a@a.com", password: "abdul90" },
    status: { type: "admin", blocked: false, lastLoginTimestamp: 0 },
  },
  {
    userId: 2,
    signUpDate: 0,
    personalDetails: {
      name: { firstName: "Simone", lastName: "Duboir" },
      dob: { year: "1987", months: "3", day: "3" },
      location: { town: "London", postCode: "n1" },
      kids: false,
      religion: "Christian",
      height: 140,
      gender: 1, //0 is male, 1 is female, 2 is other
      smokers: true,
    },
    preferences: {
      lifeStyle: { marriage: true, casual: true, openToKids: true },
      minAge: 28,
      maxAge: 45,
      acceptedReligions: ["", ""],
      height: { min: 150, max: 210 },
      gender: 0, //0 is male, 1 is female, 2 is other
      kidsAccepted: true,
      smokers: true,
    },
    matches: [1, 3, 4, 5, 6], //ids
    likes: [], //ids
    blocked: [], //ids
    login: { email: "", password: "" },
    status: { type: "admin", blocked: false, lastLoginTimestamp: 0 },
  },
  {
    userId: 3,
    signUpDate: 0,
    personalDetails: {
      name: { firstName: "Dante", lastName: "Perry" },
      dob: { year: "1993", months: "7", day: "28" },
      location: { town: "", postCode: "" },
      kids: false,
      religion: "Buddhist",
      height: 158,
      gender: 0, //0 is male, 1 is female, 2 is other
      smokers: true,
    },
    preferences: {
      lifeStyle: { marriage: true, casual: true, openToKids: false },
      minAge: 25,
      maxAge: 30,
      acceptedReligions: ["", ""],
      height: { min: 130, max: 200 },
      gender: 0, //0 is male, 1 is female, 2 is other
      kidsAccepted: false,
      smokers: true,
    },
    matches: [1, 3, 6], //ids
    likes: [], //ids
    blocked: [], //ids
    login: { email: "", password: "" },
    status: { type: "admin", blocked: false, lastLoginTimestamp: 0 },
  },
  {
    userId: 4,
    signUpDate: 0,
    personalDetails: {
      name: { firstName: "Jamari", lastName: "Zhang" },
      dob: { year: "1999", months: "1", day: "1" },
      location: { town: "Guilford", postCode: "" },
      kids: false,
      religion: "",
      height: 180,
      gender: 0, //0 is male, 1 is female, 2 is other
      smokers: false,
    },
    preferences: {
      lifeStyle: { marriage: false, casual: true, openToKids: false },
      minAge: 18,
      maxAge: 30,
      acceptedReligions: ["", ""],
      height: { min: 140, max: 175 },
      gender: 1, //0 is male, 1 is female, 2 is other
      kidsAccepted: true,
      smokers: true,
    },
    matches: [2, 1, 5], //ids
    likes: [], //ids
    blocked: [], //ids
    login: { email: "", password: "" },
    status: { type: "admin", blocked: false, lastLoginTimestamp: 0 },
  },
  {
    userId: 5,
    signUpDate: 0,
    personalDetails: {
      name: { firstName: "Araceli", lastName: "Trujilo" },
      dob: { year: "1988", months: "9", day: "19" },
      location: { town: "London", postCode: "w1" },
      kids: false,
      religion: "Athiest",
      height: 155,
      gender: 2, //0 is male, 1 is female, 2 is other
      smokers: false,
    },
    preferences: {
      lifeStyle: { marriage: true, casual: false, openToKids: false },
      minAge: 25,
      maxAge: 40,
      acceptedReligions: ["", ""],
      height: { min: 150, max: 210 },
      gender: 0, //0 is male, 1 is female, 2 is other
      kidsAccepted: true,
      smokers: true,
    },
    matches: [3, 6, 1], //ids
    likes: [], //ids
    blocked: [], //ids
    login: { email: "", password: "" },
    status: { type: "admin", blocked: false, lastLoginTimestamp: 0 },
  },
  {
    userId: 6,
    signUpDate: 0,
    personalDetails: {
      name: { firstName: "Hiro", lastName: "Nazuko" },
      dob: { year: "1997", months: "4", day: "4" },
      location: { town: "London", postCode: "e2" },
      kids: false,
      religion: "",
      height: 155,
      gender: 1, //0 is male, 1 is female, 2 is other
      smokers: true,
    },
    preferences: {
      lifeStyle: { marriage: true, casual: false, openToKids: true },
      minAge: 21,
      maxAge: 30,
      acceptedReligions: ["", ""],
      height: { min: 0, max: 0 },
      gender: 0, //0 is male, 1 is female, 2 is other
      kidsAccepted: false,
      smokers: false,
    },
    matches: [1, 3, 4], //ids
    likes: [], //ids
    blocked: [], //ids
    login: { email: "", password: "" },
    status: { type: "admin", blocked: false, lastLoginTimestamp: 0 },
  },
];

export const messages = [
  {
    userId: 1,
    messageId: 1,
    content: "",
    sendTimestamp: 0,
    read: false,
    blocked: false,
  },
];

// {
//   userId: 1,
//   signUpDate: 0,
//   personalDetails: {
//     name: { firstName: "", lastName: "" },
//     dob: { year: "", months: "", day: "" },
//     location: { town: "", postCode: "" },
//     kids: false,
//     religion: "",
//     height: 0,
//     gender: 0, //0 is male, 1 is female, 2 is other
//     smokers: false,
//   },
//   preferences: {
//     lifeStyle: { marriage: false, casual: false, openToKids: false },
//     minAge: 0,
//     maxAge: 0,
//     acceptedReligions: ["", ""],
//     height: { min: 0, max: 0 },
//     gender: 0, //0 is male, 1 is female, 2 is other
//     kidsAccepted: false,
//     smokers: false,
//   },
//   matches: [], //ids
//   likes: [], //ids
//   blocked: [], //ids
//   login: { email: "", password: "" },
//   status: { type: "admin", blocked: false, lastLoginTimestamp: 0 },
// },
