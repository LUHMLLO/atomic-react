import Text from '@/components/atoms/text.tsx';
import Figure from '@/components/atoms/figure.tsx';
import Button from '@/components/molecules/button.tsx';

export default function Route() {
	return (
		<main className='flex flex-col items-center justify-center w-screen h-screen bg-neutral-100 dark:bg-neutral-900 isolate overflow-hidden'>
			<Figure
				src='https://vuero.cssninja.io/assets/station-d05ed495.svg'
				className='flex-grow max-h-[32rem]'
			/>
			<Text tag='h1' text='Internal Server Error' />
			<Text
				tag='p'
				text='Looks like an unexpacted problem occured. Please try again or contact the website administrator.'
			/>
			<Button text='Take me Back' />
		</main>
	);
}
