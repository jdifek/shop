import Link from 'next/link'

const Header = () => {
	return (
		<header className='bg-white shadow-md fixed w-full z-10'>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16'>
				<Link
					href='/'
					className='text-2xl font-bold uppercase tracking-widest text-gray-800 font-[family-name:var(--font-quicksand-sans)]'
				>
					shop
				</Link>

				<div className='flex items-center space-x-4'>
					<Link
						href='/login'
						className='px-4 py-2 text-gray-800 border border-gray-300 rounded-lg hover:bg-gray-100 transition'
					>
						Log In
					</Link>
					<Link
						href='/signup'
						className='px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition'
					>
						Sign Up
					</Link>
				</div>
			</div>
		</header>
	)
}

export default Header
