import { useState } from "react";
import toast from "react-hot-toast";

import useConversation from "../zustand/useConversation";

const useSendMessages = () => {
	const [loading, setLoading] = useState(false);
	const { setMessages, selectedConversation } = useConversation();

	const sendMessage = async (message) => {
		if (!selectedConversation?._id) {
			toast.error("Please select a conversation first");
			return;
		}

		if (!message || !message.trim()) {
			return;
		}

		setLoading(true);
		try {
			const res = await fetch(`/api/messages/send/${selectedConversation._id}`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ message }),
			});

			const data = await res.json();

			if (!res.ok) {
				throw new Error(data.error || "Failed to send message");
			}

			setMessages((prevMessages) => [...prevMessages, data]);
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	return { sendMessage, loading };
};

export default useSendMessages;