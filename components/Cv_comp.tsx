import { useTranslations } from "next-intl";
import { HiDocumentArrowDown } from "react-icons/hi2";
import MagicButton from "./ui/MagicButton";

export default function Cv_comp() {
	const t = useTranslations("cv");

	return (
		<div className='min-h-screen bg-black-100 flex flex-col items-center justify-center py-20 px-5'>
			<div className='max-w-4xl w-full'>
				<div className='text-center mb-8'>
					<h1 className='text-4xl md:text-5xl font-bold text-white mb-4'>
						{t("title")}
					</h1>
					<p className='text-gray-300 text-lg'>{t("description")}</p>
				</div>

				<div className='bg-white rounded-lg shadow-2xl overflow-hidden'>
					<iframe
						src='/CV_Mathieux_Carpentier.pdf'
						className='w-full h-[800px] md:h-[1255px] '
						title='CV Mathieux Carpentier'
					/>
				</div>

				<div className='text-center mt-8'>
					<a
						href='/CV_Mathieux_Carpentier.pdf'
						download='CV_Mathieux_Carpentier.pdf'
						className=''
					>
						<MagicButton
							title={t("download")}
							icon={<HiDocumentArrowDown />}
							position='right'
						></MagicButton>
					</a>
				</div>
			</div>
		</div>
	);
}
