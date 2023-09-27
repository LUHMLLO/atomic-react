import PageLayout from '@/layouts/lab';
import Chart from '@/components/widgets/chart';
import Fab from '@/components/widgets/fab';
import ThemeToggle from '@/components/widgets/themetoggle';

const DocBox =
	'flex items-center justify-center p-nm aspect-square outline-dashed outline-neutral-800 rounded-md gap-5xs overflow-hidden relative';

export default function Route(): JSX.Element {
	return (
		<PageLayout>
			{[
				'bar',
				'bubble',
				'doughnut',
				'line',
				'pie',
				'polarArea',
				'radar',
				'scatter',
			].map((type, index) => (
				<div className={`flex-col ${DocBox}`} key={index}>
					<Chart chartType={type} />
				</div>
			))}

			<div className={`flex-col ${DocBox}`}>
				<Fab filled rounded borderless icon='add' />
			</div>

			<div className={`flex-col ${DocBox}`}>
				<ThemeToggle />
			</div>
		</PageLayout>
	);
}
