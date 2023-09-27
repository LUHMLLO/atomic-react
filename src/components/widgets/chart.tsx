import React, { useEffect, useRef } from 'react';
import Chart, { ChartConfiguration } from 'chart.js/auto';

const ChartComponent: React.FC = () => {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);
	const chartRef = useRef<Chart | null>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (canvas) {
			const ctx = canvas.getContext('2d');
			if (ctx) {
				const config: ChartConfiguration = {
					type: 'line',
					data: {
						labels: [
							'Feb',
							'Mar',
							'Apr',
							'May',
							'Jun',
							'Jul',
							'Aug',
							'Sept',
							'Oct',
						],
						datasets: [
							{
								label: 'Revenue',
								data: [100000, 80000, 60000, 40000, 20000, 1000],
								fill: true,
								borderColor: 'rgb(75, 192, 192)',
								tension: 0.1,
							},
						],
					},
					options: {
						maintainAspectRatio: false,
						responsive: true,
						scales: {
							y: {
								beginAtZero: true,
							},
						},
					},
				};

				// Destroy the previous chart instance if it exists
				if (chartRef.current) {
					chartRef.current.destroy();
				}

				// Create a new chart instance
				chartRef.current = new Chart(ctx, config);
			}
		}

		// Cleanup function
		return () => {
			// Destroy the chart when the component unmounts
			if (chartRef.current) {
				chartRef.current.destroy();
			}
		};
	}, []);

	return (
		<div className='place-center text-center corners bord bord-second aspect-10:3 no-overflow'>
			<canvas ref={canvasRef} className='p-fixed inset w-100 h-100 bg-first' />
		</div>
	);
};

export default ChartComponent;
