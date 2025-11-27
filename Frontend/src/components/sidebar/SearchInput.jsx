import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import toast from "react-hot-toast";

import useConversation from "../../zustand/useConversation";
import useGetconversations from "../../hooks/useGetconversations";

const MIN_SEARCH_LENGTH = 3;

const SearchInput = () => {
	const [search, setSearch] = useState("");
	const { setSelectedConversation } = useConversation();
	const { conversations } = useGetconversations();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!search.trim()) return;

		if (search.trim().length < MIN_SEARCH_LENGTH) {
			return toast.error("search term must be at least 3 characters");
		}

		const conversation = conversations.find((c) =>
			c.fullname.toLowerCase().includes(search.trim().toLowerCase())
		);

		if (conversation) {
			setSelectedConversation(conversation);
			setSearch("");
		} else {
			toast.error("No such user found");
		}
	};

	return (
		<form onSubmit={handleSubmit} className='flex items-center gap-2'>
			<input
				type='text'
				placeholder='Search...'
				className='input input-bordered rounded-full h-12 text-base'
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>

			<button type='submit' className='btn btn-circle bg-sky-500 text-white h-12 w-12 min-h-12'>
				<IoSearchSharp className='w-7 h-7 outline-none' />
			</button>
		</form>
	);
};

export default SearchInput;