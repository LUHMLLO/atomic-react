export default function Layout() {
	return (
		<main className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2xl p-2xl'>
			<slot />
		</main>
	);
}
