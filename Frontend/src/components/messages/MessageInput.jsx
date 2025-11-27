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
					className='border text-base rounded-lg block w-full p-3.5 bg-gray-700 border-gray-600 text-white'
					placeholder='Send a message...'
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					disabled={loading}
				/>
				<button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-4' disabled={loading}>
					{loading ? <div className='loading loading-spinner' /> : <BsSend className='w-5 h-5' />}
				</button>
			</div>
		</form>
	);
};

export default MessageInput;