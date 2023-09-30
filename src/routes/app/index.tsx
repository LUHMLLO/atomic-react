export default function Route() {
	return (
		<div>
			<h1>Index</h1>
			<b>{process.env.NODE_ENV}</b>
		</div>
	);
}
