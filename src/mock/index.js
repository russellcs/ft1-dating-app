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

export const currentUserId = 2;
