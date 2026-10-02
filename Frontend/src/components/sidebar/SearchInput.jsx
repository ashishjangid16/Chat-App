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
		<form onSubmit={handleSubmit} className='flex items-center gap-2 sm:gap-3 px-2'>
			<input
				type='text'
				placeholder='Search...'
				className='input input-bordered rounded-full h-12 sm:h-14 md:h-16 text-sm sm:text-base md:text-lg flex-1 min-w-0 bg-gray-700 border-2 border-gray-600 text-white placeholder-gray-400 px-4 sm:px-5 md:px-6'
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>

			<button type='submit' className='btn btn-circle bg-sky-500 text-white hover:bg-sky-600 h-12 sm:h-14 md:h-16 w-12 sm:w-14 md:w-16 min-h-12 sm:min-h-14 md:min-h-16 flex-shrink-0'>
				<IoSearchSharp className='w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8 outline-none' />
			</button>
		</form>
	);
};

export default SearchInput;