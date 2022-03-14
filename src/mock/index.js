export const users = [
	{
		userId: 1,
		signUpDate: 0,
		personalDetails: {
			name: { firstName: "John", lastName: "" },
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
		userId: 1,
		messageId: 1,
		content: "",
		sendTimestamp: 0,
		read: false,
		blocked: false,
	},
];
