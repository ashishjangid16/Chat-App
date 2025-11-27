import { useState } from "react";
import toast from "react-hot-toast";

import { useAuthContext } from "../context/Authcontext";
import { handleJSONResponse } from "../utils/http";

const useSignup = () => {
	const [loading, setLoading] = useState(false);
	const { setauthUser } = useAuthContext();

	const signup = async (payload) => {
		const isValid = handleinputerrors(payload);
		if (!isValid) return;

		setLoading(true);
		try {
			const res = await fetch("/api/auth/signup", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(payload),
				credentials: "include",
			});

			const data = await handleJSONResponse(res, "Unable to create account");

			localStorage.setItem("chat-user", JSON.stringify(data));
			setauthUser(data);
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	return { loading, signup };
};

export default useSignup;

function handleinputerrors({ fullname, username, password, confirmpassword, gender }) {
	if (!fullname || !username || !password || !confirmpassword || !gender) {
		toast.error("please fill all the fields");
		return false;
	}

	if (password !== confirmpassword) {
		toast.error("passwords do not match");
		return false;
	}

	if (password.length < 6) {
		toast.error("password length must be at least 6 characters");
		return false;
	}

	return true;
}
