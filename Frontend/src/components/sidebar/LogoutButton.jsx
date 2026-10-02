import { BiLogOut } from "react-icons/bi";

import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
	const { loading, logout } = useLogout();

	return (
		<div className='mt-auto'>
			{!loading ? (
				<button
					type='button'
					onClick={logout}
					className='w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 flex items-center justify-center rounded-full text-white bg-red-600 hover:bg-red-700 transition'
					aria-label='Logout'
				>
					<BiLogOut className='w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7' />
				</button>
			) : (
				<span className='loading loading-spinner' />
			)}
		</div>
	);
};

export default LogoutButton;