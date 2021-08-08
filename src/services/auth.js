import { api } from "./axios";
import { apiDetail } from "../utils/constants";
import { setHeadersWithUserToken } from "./axios";
const login = async (email, password) => {
	const userDetail = { email, password };

	try {
		const afterSuccess = await api.post(apiDetail.login.url, userDetail);
		if (afterSuccess) {
			return afterSuccess;
		}
	} catch (error) {
		console.log("error in login : ", error);
		// throw error;
		return error.response;
	}
};

const register = async (firstname, lastname, phone, email, password, role) => {
	const userDetail = {
		firstName: firstname,
		lastName: lastname,
		mobileNo: "+91" + phone,
		email: email,
		password,
		role: role.charAt(0).toUpperCase() + role.slice(1),
	};
	try {
		const afterRegistration = await api.post(
			apiDetail.register.url,
			userDetail
		);
		return afterRegistration;
	} catch (error) {
		console.error("error in partner signup in auth servier = ", error);
		throw error;
	}
};

export { login, register };
