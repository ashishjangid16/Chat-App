import SearchInput from "./SearchInput.jsx";
import Conversations from "./Conversations.jsx";
import LogoutButton from "./LogoutButton.jsx";

const Sidebar = () => {
	return (
		<div className='p-2 sm:p-3 md:p-4 flex flex-col h-full'>
			<SearchInput />
			<div className='divider px-2 sm:px-3 md:px-4' />
			<Conversations />
			<LogoutButton />
		</div>
	);
};

export default Sidebar;