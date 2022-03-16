export const users = [

  {
    userId: 1,
    signUpDate: 0,
    personalDetails: {
      name: { firstName: "", lastName: "" },
      dob: { year: "", months: "", day: "" },
      location: { town: "", postCode: "" },
      kids: false,
      religion: "",
      height: 0,
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
    status: {
      type: "admin",
      blocked: false,
      lastLoginTimestamp: 0,
      loggedIn: true,
      lastActiveTime: 0,
    },
  },
  {
    userId: 1,
    signUpDate: 0,
    personalDetails: {
      name: { firstName: "Abdul", lastName: "Aroyo" },
      dob: { year: "1990", months: "12", day: "23" },
      location: { town: "London", postCode: "se21 0pt" },
      kids: undefined, // undefined: not saying, false: no, true: Yes
      religion: 7,
      height: 165,
      gender: 0, // 0: not saying, 1: female, 2: male, 3: non-binary, 4: trans, 5: intersex
      smokers: 1, // 0: undefined: 1: no, 2: sometimes, 3: yes
    },
    preferences: {
      lifeStyle: { marriage: true, casual: false, openToKids: 1 },
      minAge: 24,
      maxAge: 32,
      acceptedReligions: [""],
      height: { min: 130, max: 160 },
      gender: 1,
      kidsAccepted: 2, // 0: not saying, 2: not sure, 3: open to kids, 4: want kids
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
      religion: 1,
      height: 140,
      gender: 1,
      smokers: 0,
    },
    preferences: {
      lifeStyle: { marriage: true, casual: undefined, openToKids: 3 },
      minAge: 28,
      maxAge: 45,
      acceptedReligions: ["", ""],
      height: { min: 150, max: 210 },
      gender: 0,
      kidsAccepted: 4,
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
      religion: 0,
      height: 158,
      gender: 0,
      smokers: 2,
    },
    preferences: {
      lifeStyle: { marriage: true, casual: true, openToKids: 0 },
      minAge: 25,
      maxAge: 30,
      acceptedReligions: ["", ""],
      height: { min: 130, max: 200 },
      gender: 0,
      kidsAccepted: 2,
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
      religion: 4,
      height: 180,
      gender: 0,
      smokers: 3,
    },
    preferences: {
      lifeStyle: { marriage: false, casual: true, openToKids: 2 },
      minAge: 18,
      maxAge: 30,
      acceptedReligions: ["", ""],
      height: { min: 140, max: 175 },
      gender: 1,
      kidsAccepted: 3,
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
      religion: 0,
      height: 155,
      gender: 2,
      smokers: 2,
    },
    preferences: {
      lifeStyle: { marriage: true, casual: false, openToKids: 1 },
      minAge: 25,
      maxAge: 40,
      acceptedReligions: ["", ""],
      height: { min: 150, max: 210 },
      gender: 0,
      kidsAccepted: 0,
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
      kids: undefined,
      religion: 0,
      height: 155,
      gender: 1,
      smokers: 3,
    },
    preferences: {
      lifeStyle: { marriage: true, casual: false, openToKids: 4 },
      minAge: 21,
      maxAge: 30,
      acceptedReligions: ["", ""],
      height: { min: 0, max: 0 },
      gender: 0,
      kidsAccepted: 0,
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
		toUserId: 2,
		fromUserId: 1,
		messageId: 1,
		content: "Hello user 2",
		sendTimestamp: 0,
		read: false,
		blocked: false,
	},
	{
		toUserId: 1,
		fromUserId: 2,
		messageId: 2,
		content: "Hello user 3",
		sendTimestamp: 0,
		read: false,
		blocked: false,
	},
	{
		toUserId: 4,
		fromUserId: 1,
		messageId: 3,
		content: "Hello user 4",
		sendTimestamp: 0,
		read: false,
		blocked: false,
	},
	{
		toUserId: 5,
		fromUserId: 1,
		messageId: 4,
		content: "Hello user 5",
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
export const currentUserId = 2;
