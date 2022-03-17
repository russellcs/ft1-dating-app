export const users = [
  {
    userId: 1,
    signUpDate: 0,
    personalDetails: {
      name: { firstName: "", lastName: "" },
      dob: { year: "", months: "", day: "" },
      location: { town: "", postCode: "" },
      kids: false,
      religion: "none",
      height: 0,
      gender: 0, //0 is male, 1 is female, 2 is other
      smokers: false,
    },
    preferences: {
      lifeStyle: { marriage: false, casual: false, openToKids: false },
      minAge: 20,
      maxAge: 60,
      acceptedReligions: ["Christian", "Muslim", "None"],
      height: { min: 165, max: 205 },
      gender: 0, //0 is male, 1 is female, 2 is other
      kidsAccepted: false,
      smokers: false,
    },
    matches: [], //ids
    likes: [], //ids
    blocked: [], //ids
    login: { email: "", password: "" },
    status: { type: "admin", blocked: false, lastLoginTimestamp: 0 },
  },

  {
    userId: 2,
    signUpDate: 0,
    personalDetails: {
      name: { firstName: "Rex", lastName: "Ranger" },
      dob: { year: "1995", months: "Jan", day: "9" },
      location: { town: "London", postCode: "SW19" },
      kids: false,
      religion: "Christian",
      height: 185,
      gender: 0, //0 is male, 1 is female, 2 is other
      smokers: false,
    },
    preferences: {
      lifeStyle: { marriage: false, casual: false, openToKids: false },
      minAge: 0,
      maxAge: 0,
      acceptedReligions: ["", ""],
      height: { min: 0, max: 0 },
      gender: 0, //0 is male, 1 is female, 2 is other
      kidsAccepted: false,
      smokers: false,
    },
    matches: [], //ids
    likes: [], //ids
    blocked: [], //ids
    login: { email: "", password: "" },
    status: { type: "admin", blocked: false, lastLoginTimestamp: 1647269998 },
  },

  {
    userId: 3,
    signUpDate: 0,
    personalDetails: {
      name: { firstName: "Nick", lastName: "Nagle" },
      dob: { year: "1992", months: "September", day: "30" },
      location: { town: "Leeds", postCode: "LS7" },
      kids: false,
      religion: "Muslim",
      height: 195,
      gender: 2, //0 is male, 1 is female, 2 is other
      smokers: true,
    },
    preferences: {
      lifeStyle: { marriage: false, casual: false, openToKids: false },
      minAge: 0,
      maxAge: 0,
      acceptedReligions: ["", ""],
      height: { min: 0, max: 0 },
      gender: 0, //0 is male, 1 is female, 2 is other
      kidsAccepted: false,
      smokers: false,
    },
    matches: [], //ids
    likes: [], //ids
    blocked: [], //ids
    login: { email: "", password: "" },
    status: { type: "admin", blocked: false, lastLoginTimestamp: 1647229998 },
  },

  {
    userId: 4,
    signUpDate: 0,
    personalDetails: {
      name: { firstName: "Otis", lastName: "Olson" },
      dob: { year: "1968", months: "January", day: "20" },
      location: { town: "Dorking", postCode: "RH3" },
      kids: true,
      religion: "None",
      height: 190,
      gender: 0, //0 is male, 1 is female, 2 is other
      smokers: false,
    },
    preferences: {
      lifeStyle: { marriage: false, casual: false, openToKids: false },
      minAge: 0,
      maxAge: 0,
      acceptedReligions: ["", ""],
      height: { min: 0, max: 0 },
      gender: 0, //0 is male, 1 is female, 2 is other
      kidsAccepted: false,
      smokers: false,
    },
    matches: [], //ids
    likes: [], //ids
    blocked: [], //ids
    login: { email: "", password: "" },
    status: { type: "admin", blocked: false, lastLoginTimestamp: 1647221998 },
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
