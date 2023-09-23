import Badge from '@/components/molecules/badge';
import Button from '@/components/molecules/button';
import Checkbox from '@/components/molecules/checkbox';
import Field from '@/components/molecules/field';
import Kbd from '@/components/molecules/kbd';
import Link from '@/components/molecules/link';
import Radiobox from '@/components/molecules/radiobox';
import Step from '@/components/molecules/step';
import Switch from '@/components/molecules/switch';
import Tag from '@/components/molecules/tag';
import Toast from '@/components/molecules/toast';

export default function Route() {
	return (
		<main className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2xl p-2xl'>
			<div className='flex flex-col items-center justify-center p-nm aspect-square outline-dashed outline-neutral-800 rounded-md gap-5xs overflow-hidden'>
				<Badge text='badge' variant='text' />
			</div>
			<div className='flex flex-col items-center justify-center p-nm aspect-square outline-dashed outline-neutral-800 rounded-md gap-5xs overflow-hidden'>
				<Button text='normal button' />
				<Button
					leading_icon='person'
					text='normal button with both icons'
					trailing_icon='tune'
				/>
			</div>
			<div className='flex flex-col items-center justify-center p-nm aspect-square outline-dashed outline-neutral-800 rounded-md gap-5xs overflow-hidden'>
				<Button borderless text='borderless button' />
				<Button borderless filled text='borderless + filled' />
				<Button borderless filled flat text='borderless + filled + flat' />
			</div>
			<div className='flex flex-col items-center justify-center p-nm aspect-square outline-dashed outline-neutral-800 rounded-md gap-5xs overflow-hidden'>
				<Button text='filled button with no icons' filled />
				<Button
					leading_icon='person'
					leading_icon_fill
					trailing_icon='tune'
					text='filled button with both icons'
					filled
				/>
			</div>
			<div className='flex flex-col items-center justify-center p-nm aspect-square outline-dashed outline-neutral-800 rounded-md gap-5xs overflow-hidden'>
				<Checkbox text='label for the checkbox' />
				<Checkbox text='label for the checkbox' checked />
			</div>
			<div className='flex flex-col items-center justify-center p-nm aspect-square outline-dashed outline-neutral-800 rounded-md gap-5xs overflow-hidden'>
				<Field
					placeholder='This is a field component'
					leading_icon='person'
					trailing_icon='tune'
				/>
				<Field placeholder='This is a field component' leading_icon='person' />
			</div>
			<div className='flex flex-col items-center justify-center p-nm aspect-square outline-dashed outline-neutral-800 rounded-md gap-5xs overflow-hidden'>
				<Kbd
					leading='keyboard_command_key'
					leading_variant='icon'
					trailing='k'
					trailing_variant='text'
				/>
			</div>
			<div className='flex flex-col items-center justify-center p-nm aspect-square outline-dashed outline-neutral-800 rounded-md gap-5xs overflow-hidden'>
				<Link text='link component' />
				<Link text='link with leading icon' leading_icon='account_circle' />
				<Link
					text='link with filled trailing icon'
					trailing_icon='folder_open'
					trailing_icon_fill
				/>
			</div>
			<div className='flex flex-col items-center justify-center p-nm aspect-square outline-dashed outline-neutral-800 rounded-md gap-5xs overflow-hidden'>
				<Radiobox groupName='test2' text='label for the checkbox' />
				<Radiobox groupName='test2' text='label for the checkbox' checked />
			</div>
			<div className='flex flex-col items-center justify-center p-nm aspect-square outline-dashed outline-neutral-800 rounded-md gap-5xs overflow-hidden'>
				<ul x-layout='col' className='g-5xs'>
					<Step text='Step 1' hasBar done />
					<Step text='Step 2' hasBar done />
					<Step text='Last sibling has no bar' hasBar={false} />
				</ul>
			</div>
			<div className='flex flex-col items-center justify-center p-nm aspect-square outline-dashed outline-neutral-800 rounded-md gap-5xs overflow-hidden'>
				<Switch />
				<Switch checked />
			</div>
			<div className='flex flex-col items-center justify-center p-nm aspect-square outline-dashed outline-neutral-800 rounded-md gap-5xs overflow-hidden'>
				<Tag text='demo tag' />
			</div>
			<div className='flex flex-col items-center justify-center p-nm aspect-square outline-dashed outline-neutral-800 rounded-md gap-5xs overflow-hidden'>
				<Toast text='toast action realized' />
			</div>
		</main>
	);
}
