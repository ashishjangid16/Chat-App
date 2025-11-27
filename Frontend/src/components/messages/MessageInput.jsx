import { useState } from "react";
import { BsSend } from "react-icons/bs";

import useSendMessages from "../../hooks/useSendMessages";

const MessageInput = () => {
	const [message, setMessage] = useState("");
	const { loading, sendMessage } = useSendMessages();

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!message.trim()) return;
		await sendMessage(message);
		setMessage("");
	};
	return (
		<form className='px-4 my-3' onSubmit={handleSubmit}>
			<div className='w-full relative'>
				<input
					type='text'
					className='border-2 text-xl rounded-lg block w-full p-5 pr-14 bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-sky-500 focus:border-sky-500'
					placeholder='Send a message...'
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					disabled={loading}
				/>
				<button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-4' disabled={loading}>
					{loading ? <div className='loading loading-spinner w-7 h-7' /> : <BsSend className='w-7 h-7 text-sky-500 hover:text-sky-400' />}
				</button>
			</div>
		</form>
	);
};

export default MessageInput;