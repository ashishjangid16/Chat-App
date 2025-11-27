import { useState } from "react";
import toast from "react-hot-toast";

import { useAuthContext } from "../context/Authcontext";
import { handleJSONResponse } from "../utils/http";

const useLogout = () => {
	const [loading, setLoading] = useState(false);
	const { setauthUser } = useAuthContext();

	const logout = async () => {
		setLoading(true);

		try {
			const res = await fetch("/api/auth/logout", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				credentials: "include",
			});

			await handleJSONResponse(res, "Unable to logout");

			localStorage.removeItem("chat-user");
			setauthUser(null);
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	return { loading, logout };
};

export default useLogout;