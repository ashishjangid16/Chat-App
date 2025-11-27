import Sidebar from "../../components/sidebar/Sidebar.jsx";
import MessageContainer from "../../components/messages/MessageContainer.jsx";

const Home = () => {
	return (
		<div className='flex sm:h-[450px] md:h-[550px] gap-4 w-full max-w-6xl mx-auto'>
			<div className='w-1/3 min-w-[250px] rounded-lg overflow-hidden bg-gray-900 border border-gray-700 shadow-xl'>
				<Sidebar />
			</div>
			<div className='flex-1 rounded-lg overflow-hidden bg-gray-900 border border-gray-700 shadow-xl'>
				<MessageContainer />
			</div>
		</div>
	);
};

export default Home;