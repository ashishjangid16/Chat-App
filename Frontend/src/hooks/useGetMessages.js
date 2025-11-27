import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import useConversation from "../zustand/useConversation";

const useGetMessages = () => {
	const [loading, setLoading] = useState(false);
	const { messages, setMessages, selectedConversation } = useConversation();

	useEffect(() => {
		if (!selectedConversation?._id) {
			return;
		}

		const controller = new AbortController();

		const getMessages = async () => {
			setLoading(true);
			try {
				const res = await fetch(`/api/messages/${selectedConversation._id}`, {
					signal: controller.signal,
				});
				const data = await res.json();

				if (!res.ok) {
					throw new Error(data.error || "Failed to load messages");
				}

				setMessages(data);
			} catch (error) {
				if (error.name !== "AbortError") {
					toast.error(error.message);
				}
			} finally {
				setLoading(false);
			}
		};

		getMessages();

		return () => controller.abort();
	}, [selectedConversation?._id, setMessages]);

	return { loading, messages };
};

export default useGetMessages;