import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { handleJSONResponse } from "../utils/http";

const useGetconversations = () => {
	const [loading, setLoading] = useState(false);
	const [conversations, setConversations] = useState([]);

	useEffect(() => {
		const controller = new AbortController();

		const getConversations = async () => {
			setLoading(true);
			try {
				const res = await fetch("/api/users", {
					signal: controller.signal,
					credentials: "include",
				});

				const data = await handleJSONResponse(res, "Failed to fetch conversations");

				setConversations(data);
			} catch (error) {
				if (error.name !== "AbortError") {
					toast.error(error.message);
				}
			} finally {
				setLoading(false);
			}
		};

		getConversations();

		return () => controller.abort();
	}, []);

	return { loading, conversations };
};

export default useGetconversations;