"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import React from "react";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Approach = () => {
	const t = useTranslations("approach");
	return (
		<section className='w-full py-20'>
			<TextGenerateEffect words={t("title")} className='heading' />
			<div className='my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-6'>
				<Card
					title={t("phase1.title")}
					icon={<AceternityIcon order='Phase 1' />}
					des={t("phase1.description")}
				>
					<CanvasRevealEffect
						animationSpeed={3}
						containerClassName='bg-emerald-900 rounded-3xl overflow-hidden'
					/>
				</Card>
				<Card
					title={t("phase2.title")}
					icon={<AceternityIcon order='Phase 2' />}
					des={t("phase2.description")}
				>
					<CanvasRevealEffect
						animationSpeed={3}
						containerClassName='bg-rose-900 rounded-3xl overflow-hidden'
						colors={[
							[255, 166, 158],
							[221, 255, 247],
						]}
						dotSize={2}
					/>
				</Card>
				<Card
					title={t("phase3.title")}
					icon={<AceternityIcon order='Phase 3' />}
					des={t("phase3.description")}
				>
					<CanvasRevealEffect
						animationSpeed={3}
						containerClassName='bg-indigo-900 rounded-3xl overflow-hidden'
						colors={[[125, 211, 252]]}
					/>
				</Card>
			</div>
		</section>
	);
};

export default Approach;

const Card = ({
	title,
	icon,
	children,
	des,
}: {
	title: string;
	icon: React.ReactNode;
	children?: React.ReactNode;
	des: string;
}) => {
	const [hovered, setHovered] = React.useState(false);
	const isTouchRef = React.useRef(false);
	return (
		<div
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
			onTouchStart={() => {
				// mark touch and enable hovered state for touch devices
				isTouchRef.current = true;
				setHovered(true);
			}}
			onClick={() => {
				// prevent double-toggle when a touch event already triggered
				if (isTouchRef.current) {
					isTouchRef.current = false;
					return;
				}
				setHovered((s) => !s);
			}}
			className='border border-black/20 group/canvas-card flex items-center justify-center dark:border-white/20  max-w-sm w-full mx-auto p-4 relative lg:h-140 rounded-3xl '
			style={{
				background: "rgb(4,7,29)",
				backgroundColor:
					"linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
			}}
		>
			<Icon className='absolute h-8 w-8 -top-4 -left-4 dark:text-white text-black opacity-30' />
			<Icon className='absolute h-8 w-8 -bottom-4 -left-4 dark:text-white text-black opacity-30' />
			<Icon className='absolute h-8 w-8 -top-4 -right-4 dark:text-white text-black opacity-30' />
			<Icon className='absolute h-8 w-8 -bottom-4 -right-4 dark:text-white text-black opacity-30' />

			<AnimatePresence>
				{hovered && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						className='h-full w-full absolute inset-0'
					>
						{children}
					</motion.div>
				)}
			</AnimatePresence>

			<div className='relative z-20 px-10'>
				<div
					className={`text-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] transition duration-200 min-w-40 mx-auto flex items-center justify-center ${
						hovered ? "-translate-y-4 opacity-0" : "opacity-100"
					}`}
				>
					{icon}
				</div>
				<h2
					className={`dark:text-white text-center text-3xl relative z-10 text-black mt-4 font-bold transition duration-200 ${
						hovered ? "opacity-100 text-white -translate-y-2" : "opacity-0"
					}`}
				>
					{title}
				</h2>
				<p
					className={`text-sm relative z-10 mt-4 text-center transition duration-200 ${
						hovered ? "opacity-100 text-white -translate-y-2" : "opacity-0"
					}`}
					style={{ color: "#E4ECFF" }}
				>
					{des}
				</p>
			</div>
		</div>
	);
};
// add order prop for the Phase number change
const AceternityIcon = ({ order }: { order: string }) => {
	return (
		<div>
			<button
				type='button'
				className='relative inline-flex overflow-hidden rounded-full p-px '
			>
				<span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
				<span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-2 text-purple backdrop-blur-3xl font-bold text-2xl'>
					{order}
				</span>
			</button>
		</div>
	);
};

export const Icon = ({ className, ...rest }: React.ComponentProps<"svg">) => {
	return (
		<svg
			aria-label='svg'
			xmlns='http://www.w3.org/2000/svg'
			fill='none'
			viewBox='0 0 24 24'
			strokeWidth='1.5'
			stroke='currentColor'
			className={className}
			{...rest}
		>
			<path strokeLinecap='round' strokeLinejoin='round' d='M12 6v12m6-6H6' />
		</svg>
	);
};
