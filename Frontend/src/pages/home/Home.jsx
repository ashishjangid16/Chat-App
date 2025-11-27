import Sidebar from "../../components/sidebar/Sidebar.jsx";
import MessageContainer from "../../components/messages/MessageContainer.jsx";

const Home = () => {
	return (
		<div className='flex h-screen w-screen gap-2'>
			<div className='w-1/3 min-w-[280px] max-w-md bg-gray-900 border-r border-gray-700'>
				<Sidebar />
			</div>
			<div className='flex-1 bg-gray-900'>
				<MessageContainer />
			</div>
		</div>
	);
};

export default Home;