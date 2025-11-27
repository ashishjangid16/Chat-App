import { useState } from "react";
import toast from "react-hot-toast";

import { useAuthContext } from "../context/Authcontext";
import { handleJSONResponse } from "../utils/http";

const useLogin = () => {
	const [loading, setLoading] = useState(false);
	const { setauthUser } = useAuthContext();

	const login = async (username, password) => {
		const success = handleinputerrors(username, password);
		if (!success) {
			return;
		}

		setLoading(true);
		try {
			const res = await fetch("/api/auth/login", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ username, password }),
				credentials: "include",
			});

			const data = await handleJSONResponse(res, "Unable to login");

			localStorage.setItem("chat-user", JSON.stringify(data));
			setauthUser(data);
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	return { loading, login };
};

export default useLogin;

function handleinputerrors(username, password) {
	if (!username || !password) {
		toast.error("please fill all the fields");
		return false;
	}

	if (password.length < 6) {
		toast.error("password length must be at least 6 characters");
		return false;
	}

	return true;
}