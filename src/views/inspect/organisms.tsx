import PageLayout from '@/layouts/lab';
import Figure from '@/components/atoms/figure';
import Text from '@/components/atoms/text';
import Field from '@/components/molecules/field';
import Link from '@/components/molecules/link';
import Breadcrumb from '@/components/organisms/breadcrumb';
import Buttongroup from '@/components/organisms/buttongroup';
import Collapsible from '@/components/organisms/collapsible';
import Dialog from '@/components/organisms/dialog';
import Dropdown from '@/components/organisms/dropdown';
import List from '@/components/organisms/list';
import Stepper from '@/components/organisms/stepper';
import Tabs from '@/components/organisms/tabs';

const DocBox =
	'flex items-center justify-center p-nm aspect-square outline-dashed outline-zinc-800 rounded-md gap-5xs overflow-hidden';

export default function Route(): JSX.Element {
	return (
		<PageLayout>
			<div className={`flex-col ${DocBox}`}>
				<Breadcrumb>
					<Link
						text='Start'
						leading_icon='home'
						trailing_icon='chevron_right'
					/>
					<Link
						text='Leads'
						leading_icon='group'
						trailing_icon='chevron_right'
					/>
					<Link text='Jake Peralta' />
				</Breadcrumb>
			</div>
			<div className={`flex-col ${DocBox}`}>
				<Breadcrumb>
					<Link
						text='Users'
						leading_icon='group'
						trailing_icon='chevron_right'
					/>
					<Dropdown text='Mark' flat>
						{['Documents', 'Music', 'Pictures', 'Videos'].map((item, index) => (
							<Link key={index} text={item} />
						))}
					</Dropdown>
				</Breadcrumb>
			</div>

			<div className={`flex-col ${DocBox}`}>
				<Buttongroup
					filled
					borderless
					buttons={[{ text: 'Days' }, { text: 'Months' }, { text: 'Years' }]}
				/>

				<Buttongroup
					filled
					buttons={[
						{ text: 'Download for free', leading_icon: 'download' },
						{ text: '31k' },
					]}
				/>

				<Buttongroup
					filled
					buttons={[
						{ leading_icon: 'arrow_back' },
						{ trailing_icon: 'arrow_forward' },
					]}
				/>

				<Buttongroup
					filled
					buttons={[{ text: 'Live preview' }, { trailing_icon: 'open_in_new' }]}
				/>

				<Buttongroup
					filled
					buttons={[
						{ leading_icon: 'align_justify_flex_start' },
						{ leading_icon: 'align_justify_flex_end' },
						{ leading_icon: 'align_flex_start' },
						{ leading_icon: 'align_flex_center' },
						{ leading_icon: 'align_flex_end' },
					]}
				/>
			</div>

			<div className={`flex-col ${DocBox}`}>
				<Buttongroup
					buttons={[{ text: 'Days' }, { text: 'Months' }, { text: 'Years' }]}
				/>

				<Buttongroup
					buttons={[
						{ text: 'Download for free', leading_icon: 'download' },
						{ text: '31k' },
					]}
				/>

				<Buttongroup
					buttons={[
						{ leading_icon: 'arrow_back' },
						{ trailing_icon: 'arrow_forward' },
					]}
				/>

				<Buttongroup
					buttons={[{ text: 'Live preview' }, { trailing_icon: 'open_in_new' }]}
				/>

				<Buttongroup
					buttons={[
						{ leading_icon: 'align_justify_flex_start' },
						{ leading_icon: 'align_justify_flex_end' },
						{ leading_icon: 'align_flex_start' },
						{ leading_icon: 'align_flex_center' },
						{ leading_icon: 'align_flex_end' },
					]}
				/>
			</div>

			<div className={`flex-col ${DocBox}`}>
				<Collapsible text='Collapsible'>
					{Array.from({ length: 10 }).map((_, index) => (
						<Text key={index} tag='p' text={index.toString()} className='z-1' />
					))}
				</Collapsible>
			</div>

			<div className={`flex-col ${DocBox}`}>
				<Collapsible text='Collapsible minimal' minimal>
					{Array.from({ length: 10 }).map((_, index) => (
						<Text key={index} tag='p' text={index.toString()} className='z-1' />
					))}
				</Collapsible>
			</div>

			<div className='relative flex flex-col items-center justify-center p-nm aspect-square outline-dashed outline-zinc-800 rounded-md gap-5xs overflow-hidden'>
				<Dialog text='Just a Dialog' open>
					<Text
						tag='p'
						text='A dialog is a type of modal window that appears in front of app content to provide critical information, or ask for a decision.'
					/>
				</Dialog>
			</div>

			<div className='relative flex flex-col items-center justify-center p-nm aspect-square outline-dashed outline-zinc-800 rounded-md gap-5xs overflow-hidden'>
				<Dialog text='Normal Dialog with Figure' open>
					<Figure src='/vite.svg' />
				</Dialog>
			</div>

			<div className='relative flex flex-col items-center justify-center p-nm aspect-square outline-dashed outline-zinc-800 rounded-md gap-5xs overflow-hidden'>
				<Dialog text='Fullscreen dialog' open fullscreen>
					<Field placeholder='Name' leading_icon='person' />
					<Field placeholder='E-Mail' leading_icon='mail' />
					<Text
						tag='p'
						text='Mauris vitae ultricies leo integer. Eu nisl nunc mi ipsum faucibus vitae aliquet. Sollicitudin tempor id eu nisl nunc mi ipsum. Vitae congue mauris rhoncus aenean vel elit scelerisque mauris. Sapien pellentesque habitant morbi tristique senectus et netus. Vulputate eu scelerisque felis imperdiet proin. Aenean et tortor at risus viverra adipiscing at. Sit amet facilisis magna etiam tempor orci eu. Nibh tortor id aliquet lectus proin nibh nisl condimentum id. Ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus. Luctus accumsan tortor posuere ac ut consequat semper viverra nam. Consectetur adipiscing elit ut aliquam purus. Vulputate odio ut enim blandit volutpat. Sit amet purus gravida quis blandit turpis. Tristique senectus et netus et malesuada fames. Ultrices gravida dictum fusce ut placerat orci.'
					/>
				</Dialog>
			</div>

			<div className={`flex-col ${DocBox}`}>
				<Dropdown filled text='dropdown filled'>
					<Text tag='p' text='option' />
					<Text tag='p' text='option' />
					<Text tag='p' text='option' />
				</Dropdown>
			</div>

			<div className={`flex-col ${DocBox}`}>
				<Dropdown filled>
					<Text tag='p' text='dropdown filled' />
					<Text tag='p' text='but with no text' />
					<Text tag='p' text='option' />
				</Dropdown>
			</div>

			<div className={`flex-col ${DocBox}`}>
				<Dropdown flat text='Dropdown flat'>
					<Text tag='p' text='option' />
					<Text tag='p' text='option' />
					<Text tag='p' text='option' />
				</Dropdown>
			</div>

			<div className={`flex-col ${DocBox}`}>
				<Stepper
					steps={[
						{ name: 'Step 1', hasBar: true, done: true },
						{ name: 'Step 2', hasBar: true, done: false },
						{ name: 'Step 3', hasBar: false, done: false },
					]}
				/>
			</div>

			<div className={`flex-col ${DocBox}`}>
				<List tag='dl'>
					<dt>dt item</dt>
					<dd>dd item</dd>
					<dt>dt item</dt>
					<dd>
						<details open>
							<summary>details summary</summary>
							<p>inside a dd item</p>
						</details>
					</dd>
					<dt>dt item</dt>
					<dd>
						<ul x-variant='ul'>
							<li>ul; li</li>
							<li>inside a</li>
							<li>dd item</li>
						</ul>
					</dd>
				</List>
			</div>

			<div className={`flex-col ${DocBox}`}>
				<List tag='ol'>
					<li>organized - li item</li>
					<li>organized - li item</li>
					<li>organized - li item</li>
					<li>organized - li item</li>
					<li>organized - li item</li>
					<li>organized - li item</li>
					<li>organized - li item</li>
					<li>organized - li item</li>
					<li>organized - li item</li>
					<li>organized - li item</li>
				</List>
			</div>

			<div className={`flex-col ${DocBox}`}>
				<List tag='ol' x-variant='ol'>
					<li>organized - li item</li>
					<li>organized - li item</li>
					<li>organized - li item</li>
					<li>organized - li item</li>
					<li>organized - li item</li>
					<li>organized - li item</li>
					<li>organized - li item</li>
					<li>organized - li item</li>
					<li>organized - li item</li>
					<li>organized - li item</li>
				</List>
			</div>

			<div className={`flex-col ${DocBox}`}>
				<List tag='ul'>
					<li>unorganized - li item</li>
					<li>unorganized - li item</li>
					<li>unorganized - li item</li>
					<li>unorganized - li item</li>
					<li>unorganized - li item</li>
				</List>
			</div>

			<div className={`flex-col ${DocBox}`}>
				<List tag='ul' x-variant='ul'>
					<li>unorganized - li item</li>
					<li>unorganized - li item</li>
					<li>unorganized - li item</li>
					<List tag='ul' x-variant='ul'>
						<li>unorganized - li item</li>
						<li>unorganized - li item</li>
						<li>unorganized - li item</li>
					</List>
				</List>
			</div>

			<div className={`flex-col ${DocBox}`}>
				<List tag='ul' x-variant='dir'>
					<li>unorganized - li item</li>
					<li>unorganized - li item</li>
					<li>unorganized - li item</li>
					<List tag='ul'>
						<li>unorganized - li item</li>
						<li>unorganized - li item</li>
						<li>unorganized - li item</li>
					</List>
				</List>
			</div>

			<div className={`flex-col ${DocBox}`}>
				<Tabs
					tabs={[
						{ leading_icon: 'info', text: 'General information', active: true },
						{ leading_icon: 'style', text: 'Customization' },
						{ leading_icon: 'notes', text: 'Notes' },
						{ leading_icon: 'accessibility_new', text: 'Accessibility' },
						{ leading_icon: 'Explore', text: 'Explore' },
						{ leading_icon: 'more_vert' },
					]}
				/>
			</div>

			<div className={`flex-col ${DocBox}`}>
				<Tabs
					variant='rounded'
					tabs={[
						{ leading_icon: 'info', text: 'General information', active: true },
						{ leading_icon: 'style', text: 'Customization' },
						{ leading_icon: 'notes', text: 'Notes' },
						{ leading_icon: 'accessibility_new', text: 'Accessibility' },
						{ leading_icon: 'Explore', text: 'Explore' },
						{ leading_icon: 'more_vert' },
					]}
				/>
			</div>
		</PageLayout>
	);
}
