import PageLayout from '@/layouts/lab';
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

const DocBox =
	'flex items-center justify-center p-nm aspect-square outline-dashed outline-zinc-800 rounded-md gap-5xs overflow-hidden relative';

export default function Route(): JSX.Element {
	return (
		<PageLayout>
			<div className={`flex-col ${DocBox}`}>
				<Badge text='badge' variant='text' />
			</div>

			<div className={`flex-col ${DocBox}`}>
				<Button text='normal button active' active />
				<Button text='normal button' />
				<Button
					leading_icon='person'
					text='normal button with both icons'
					trailing_icon='tune'
				/>
				<Button
					leading_icon='bolt'
					leading_icon_fill
					text='normal button with filled icon'
				/>
				<Button rounded text='normal rounded button' />
			</div>

			<div className={`flex-col ${DocBox}`}>
				<Button borderless text='borderless button active' active />
				<Button borderless text='borderless button' />
				<Button
					borderless
					leading_icon='person'
					text='borderless button with both icons'
					trailing_icon='tune'
				/>
				<Button
					borderless
					leading_icon='bolt'
					leading_icon_fill
					text='borderless button with filled icon'
				/>
				<Button borderless rounded text='borderless rounded button' />
			</div>

			<div className={`flex-col ${DocBox}`}>
				<Button filled text='filled button active' active />
				<Button filled text='filled button' />
				<Button
					filled
					leading_icon='person'
					text='filled button with both icons'
					trailing_icon='tune'
				/>
				<Button
					filled
					leading_icon='bolt'
					leading_icon_fill
					text='filled button with filled icon'
				/>
				<Button filled rounded text='filled rounded button' />
			</div>

			<div className={`flex-col ${DocBox}`}>
				<Checkbox text='label for the checkbox' />
				<Checkbox text='label for the checkbox' checked />
			</div>

			<div className={`flex-col ${DocBox}`}>
				<Field
					placeholder='This is a field component'
					leading_icon='person'
					trailing_icon='tune'
				/>
				<Field placeholder='This is a field component' leading_icon='person' />
			</div>

			<div className={`flex-col ${DocBox}`}>
				<Field
					label='username'
					leading_icon='person'
					placeholder='Labeled input'
				/>
				<Field
					label='password'
					leading_icon='person'
					placeholder='Labeled + Captioned'
					caption='invalid username or password'
				/>
			</div>

			<div className={`flex-col ${DocBox}`}>
				<Field
					borderless
					label='username'
					leading_icon='person'
					placeholder='Borderless'
				/>
				<Field
					borderless
					label='password'
					leading_icon='person'
					placeholder='Borderless'
					caption='invalid username or password'
				/>
			</div>

			<div className={`flex-col ${DocBox}`}>
				<Kbd
					leading='keyboard_command_key'
					leading_variant='icon'
					trailing='k'
					trailing_variant='text'
				/>
			</div>
			<div className={`flex-col ${DocBox}`}>
				<Link text='link component' />
				<Link text='link with leading icon' leading_icon='account_circle' />
				<Link
					text='link with filled trailing icon'
					trailing_icon='folder_open'
					trailing_icon_fill
				/>
			</div>
			<div className={`flex-col ${DocBox}`}>
				<Radiobox groupName='test2' text='label for the checkbox' />
				<Radiobox groupName='test2' text='label for the checkbox' checked />
			</div>
			<div className={`flex-col ${DocBox}`}>
				<ul x-layout='col' className='g-5xs'>
					<Step text='Step 1' hasBar done />
					<Step text='Step 2' hasBar done />
					<Step text='Last sibling has no bar' hasBar={false} />
				</ul>
			</div>
			<div className={`flex-col ${DocBox}`}>
				<Switch />
				<Switch checked />
			</div>
			<div className={`flex-col ${DocBox}`}>
				<Tag text='demo tag' />
			</div>

			<div className={`flex-col ${DocBox}`}>
				<Toast text='toast action realized' />
			</div>
		</PageLayout>
	);
}
