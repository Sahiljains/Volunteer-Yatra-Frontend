const defaultEnv = {
	baseURL: process.env.REACT_APP_API_BASE_URL,
};
let environment = {
	baseURL: defaultEnv.baseURL,
};

const shorts = {
	auth: "/vy/api/v1/auth",
	admin: "/admin",
	host: "/vy/api/v1/host",
};

// console.log("shorts auth:", shorts.auth);

let apiDetail = {
	login: {
		url: `${shorts.auth}/login`,
		method: "POST",
		header: {
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*",
		},
	},
	register: {
		url: `${shorts.auth}/register`,
		method: "POST",
		header: {
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*",
		},
	},
	// ------------------------------------------------------------- //
};

export { environment, apiDetail };
