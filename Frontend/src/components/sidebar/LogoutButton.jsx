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
					className='w-14 h-14 flex items-center justify-center rounded-full text-white bg-red-600 hover:bg-red-700 transition'
					aria-label='Logout'
				>
					<BiLogOut className='w-7 h-7' />
				</button>
			) : (
				<span className='loading loading-spinner' />
			)}
		</div>
	);
};

export default LogoutButton;