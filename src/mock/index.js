export const users = [
  // NEED:
  // Preferences form (check-boxes?):
  //   // Interest in: gender(s) (array)
  //   // Age range?
  //   // height range?
  //   // smokers ok? (boolean)
  //   // religions? (array, default ALL)
  //   // kids ok? (boolean)

  // Option to show on profile for some personal details?:
  // // Religion, haveKids, smoker, lifestyles
  // [force answer but give option to hide on profile?]
  // [OR: allow no answer and always show on profile if answered]
  // [OR: allow no answer AND give option to hide on profile if answered?]

  // REQUIRED OR POINTS?
  // age/height/gender(/seen): required
  // lifestyle: points
  // religion: points
  // has Kids: required? (but why would anyone say they have kids then? maybe scrap)

  // CHANGE LIST:
  // option to "not say" removed from PD.gender
  // pref.gender made into array
  // min/max age made into object
  // added "seen" object

  {
    userId: 1,
    signUpDate: 0,
    personalDetails: {
      name: { firstName: "1Abdul", lastName: "Aroyo" },
      dob: { year: "1993", months: "12", day: "23" },
      location: {
        town: "London",
        postCode: "se27 0sr",
        longitude: -0.105,
        latitude: 51.43,
      },
      kids: undefined, // undefined: not saying, false: no, true: Yes
      religion: 7,
      height: 165,
      gender: 0, // 0: female, 1: male, 2: non-binary, 3: trans, 4: intersex
      smokers: 1, // 0: undefined: 1: no, 2: sometimes, 3: yes
    },
    preferences: {
      lifeStyle: { marriage: true, casual: false, openToKids: 1 },
      age: { min: 24, max: 42 }, //
      acceptedReligions: [],
      height: { min: 130, max: 160 }, //
      gender: [1], //
      kidsAccepted: 2, // 0: not saying, 2: not sure, 3: open to kids, 4: want kids //Check this during merge!
      smokers: false,
      acceptedDistance: 20, //
    },
    seen: [],
    matches: [6, 3, 2],
    likes: [], // pointless? I've used matches as "likes"
    blocked: [],
    login: { email: "a@a.com", password: "abdul90" },
    status: { type: "admin", blocked: false, lastLoginTimestamp: 0 },
  },
  {
    userId: 2,
    signUpDate: 0,
    personalDetails: {
      name: { firstName: "2Simone", lastName: "Duboir" },
      dob: { year: "1987", months: "3", day: "3" },
      location: {
        town: "London",
        postCode: "n1 0sr",
        longitude: -0.118,
        latitude: 51.54,
      },
      kids: false,
      religion: 1,
      height: 140,
      gender: 1,
      smokers: 0,
    },
    preferences: {
      lifeStyle: { marriage: true, casual: false, openToKids: 3 },
      age: { min: 28, max: 45 },
      acceptedReligions: [1, 2],
      height: { min: 100, max: 210 },
      gender: [0, 1, 2, 3, 4],
      kidsAccepted: 4,
      smokers: true,
      acceptedDistance: 10, //
    },
    seen: [1, 3, 5, 2, 3],
    matches: [1, 3, 4, 5, 6], //ids
    likes: [],
    blocked: [], //ids
    login: { email: "", password: "" },
    status: { type: "admin", blocked: false, lastLoginTimestamp: 0 },
  },
  {
    userId: 3,
    signUpDate: 0,
    personalDetails: {
      name: { firstName: "3Dante", lastName: "Perry" },
      dob: { year: "1993", months: "7", day: "28" },
      location: {
        town: "",
        postCode: "SW19 1AA",
        longitude: -0.1862,
        latitude: 51.421,
      },
      kids: false,
      religion: 1,
      height: 158,
      gender: 0,
      smokers: 2,
    },
    preferences: {
      lifeStyle: { marriage: true, casual: true, openToKids: 0 },
      age: { min: 25, max: 30 },
      acceptedReligions: [],
      height: { min: 130, max: 200 },
      gender: [0],
      kidsAccepted: 2,
      smokers: true,
      acceptedDistance: 10, //
    },
    seen: [],
    matches: [1, 2, 6], //ids
    likes: [], //ids
    blocked: [], //ids
    login: { email: "", password: "" },
    status: { type: "admin", blocked: false, lastLoginTimestamp: 0 },
  },
  {
    userId: 4,
    signUpDate: 0,
    personalDetails: {
      name: { firstName: "4Jamari", lastName: "Zhang" },
      dob: { year: "1999", months: "1", day: "1" },
      location: {
        town: "Guildford",
        postCode: "GU1 4DN",
        longitude: -0.5685,
        latitude: 51.24,
      },
      kids: false,
      religion: 4,
      height: 180,
      gender: 0,
      smokers: 3,
    },
    preferences: {
      lifeStyle: { marriage: false, casual: true, openToKids: 2 },
      age: { min: 18, max: 30 },
      acceptedReligions: [],
      height: { min: 140, max: 175 },
      gender: [1, 2, 3],
      kidsAccepted: 3,
      smokers: true,
      acceptedDistance: 10, //
    },
    seen: [],
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
      name: { firstName: "5Araceli", lastName: "Trujilo" },
      dob: { year: "1988", months: "9", day: "19" },
      location: {
        town: "London",
        postCode: "W1 0AA",
        longitude: -0.134,
        latitude: 51.517,
      },
      kids: false,
      religion: 0,
      height: 155,
      gender: 2,
      smokers: 2,
    },
    preferences: {
      lifeStyle: { marriage: true, casual: false, openToKids: 1 },
      age: { min: 25, max: 40 },
      acceptedReligions: [],
      height: { min: 150, max: 210 },
      gender: [0, 1],
      kidsAccepted: 0,
      smokers: true,
      acceptedDistance: 10, //
    },
    seen: [],
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
      name: { firstName: "6Hiro", lastName: "Nazuko" },
      dob: { year: "1997", months: "4", day: "4" },
      location: {
        town: "London",
        postCode: "E2 8EA",
        longitude: -0.076,
        latitude: 51.315,
      },
      kids: undefined,
      religion: 0,
      height: 155,
      gender: 1,
      smokers: 3,
    },
    preferences: {
      lifeStyle: { marriage: false, casual: true, openToKids: 4 },
      age: { min: 21, max: 30 },
      acceptedReligions: [],
      height: { min: 120, max: 165 },
      gender: [0],
      kidsAccepted: 0,
      smokers: false,
      acceptedDistance: 10, //
    },
    seen: [],
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

export const currentUserId = 1;
