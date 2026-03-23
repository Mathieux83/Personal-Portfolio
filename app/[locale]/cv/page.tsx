import { Analytics } from "@vercel/analytics/next";
import Link from "next/link";
import Cv_comp from "@/components/Cv_comp";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Cv() {
	return (
		<div className='relative bg-black-100 flex justify-center items-center overflow-hide flex-col mx-auto sm:px-10 px-5'>
			<div className='max-w-7xl w-full'>
				<Analytics />
				<span className='fixed md:top-5 right-5 top-10 z-50'>
					<LanguageSwitcher />
				</span>
				<div className='tracking-wide fixed md:top-5 left-5 top-10 rounded-xl mx-auto inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl'>
					<Link href={"/"}>Home</Link>
				</div>
				<Cv_comp />
			</div>
		</div>
	);
}
