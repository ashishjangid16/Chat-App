import Sidebar from "../../components/sidebar/Sidebar.jsx";
import MessageContainer from "../../components/messages/MessageContainer.jsx";

const Home = () => {
	return (
		<div className='flex flex-row h-screen w-screen gap-2 overflow-hidden'>
			<div className='w-1/3 min-w-[280px] max-w-md bg-gray-900 border-r border-gray-700 overflow-auto'>
				<Sidebar />
			</div>
			<div className='flex-1 w-2/3 bg-gray-900 flex flex-col overflow-hidden'>
				<MessageContainer />
			</div>
		</div>
	);
};

export default Home;