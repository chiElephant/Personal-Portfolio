import ExperienceItem from './ExperienceItem'
import WorkIcon from '@/app/icons/WorkIcon'
import EducationIcon from '@/app/icons/EducationIcon'
import CertificationIcon from '@/app/icons/CertificationIcon'
import DownloadResumeBtn from '@/app/components/DownloadResumeBtn'

interface Props {
	type: string
	experiences: { [key: string]: any }
}

export default function ExperienceList({
	type,
	experiences,
}: Props): JSX.Element {
	return (
		<div className='rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40'>
			{/* Experience List Heading and Icon */}
			<h2 className='flex text-sm font-semibold text-zinc-900 dark:text-zinc-100'>
				{type === 'Professional' ? <WorkIcon /> : ''}
				{type === 'Education' ? <EducationIcon /> : ''}
				{type === 'Certifications' ? <CertificationIcon /> : ''}
				<span className='ml-3'>{type}</span>
			</h2>

			{/* Expereince List */}
			<ol className='mt-6 space-y-8'>
				{experiences.map((experience: { [key: string]: string }, i: number) => (
					<ExperienceItem
						key={i}
						experience={experience}
					/>
				))}
			</ol>
			{type === 'Professional' ? <DownloadResumeBtn /> : ''}
		</div>
	)
}
