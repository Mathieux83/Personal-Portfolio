"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const InfiniteMovingCards = ({
	items,
	direction = "left",
	speed = "fast",
	pauseOnHover = true,
	className,
}: {
	items: {
		quote: string;
		name: string;
		title: string;
		id: number;
		img: string;
	}[];
	direction?: "left" | "right";
	speed?: "fast" | "normal" | "slow";
	pauseOnHover?: boolean;
	className?: string;
}) => {
	const containerRef = React.useRef<HTMLDivElement>(null);
	const scrollerRef = React.useRef<HTMLUListElement>(null);
	const [start, setStart] = useState(false);

	useEffect(() => {
		function addAnimation() {
			if (containerRef.current && scrollerRef.current) {
				const scrollerContent = Array.from(scrollerRef.current.children);

				if (!start) {
					scrollerContent.forEach((item) => {
						const duplicatedItem = item.cloneNode(true);
						if (scrollerRef.current) {
							scrollerRef.current.appendChild(duplicatedItem);
						}
					});
					setStart(true);
				}

				getDirection();
				getSpeed();
			}
		}
		const getDirection = () => {
			if (containerRef.current) {
				if (direction === "left") {
					containerRef.current.style.setProperty(
						"--animation-direction",
						"forwards",
					);
				} else {
					containerRef.current.style.setProperty(
						"--animation-direction",
						"reverse",
					);
				}
			}
		};
		const getSpeed = () => {
			if (containerRef.current) {
				if (speed === "fast") {
					containerRef.current.style.setProperty("--animation-duration", "20s");
				} else if (speed === "normal") {
					containerRef.current.style.setProperty("--animation-duration", "40s");
				} else {
					containerRef.current.style.setProperty("--animation-duration", "80s");
				}
			}
		};
		addAnimation();
	}, [direction, speed, start]);

	const t = useTranslations("testimonials");
	return (
		<div
			ref={containerRef}
			className={cn(
				// max-w-7xl to w-screen
				"scroller relative z-20 w-screen overflow-hidden mask-[linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
				className,
			)}
		>
			<ul
				ref={scrollerRef}
				className={cn(
					// change gap-16
					" flex min-w-full shrink-0 gap-16 py-4 w-max flex-nowrap",
					start && "animate-scroll",
					pauseOnHover && "hover:[animation-play-state:paused]",
				)}
			>
				{items.map((item) => (
					<li
						//   change md:w-[450px] to md:w-[60vw] , px-8 py-6 to p-16, border-slate-700 to border-slate-800
						className='w-[90vw] max-w-full lg:w-[30vw] relative rounded-2xl border border-b-0
             shrink-0 border-slate-800 p-5 md:p-16 md:w-[60vw]'
						style={{
							//   background:
							//     "linear-gradient(180deg, var(--slate-800), var(--slate-900)", //remove this one
							//   add these two
							//   you can generate the color from here https://cssgradient.io/
							background: "rgb(4,7,29)",
							backgroundColor:
								"linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
						}}
						// change to idx cuz we have the same name
						key={item.id}
					>
						<blockquote>
							<div className='relative z-20 flex flex-row items-center mb-5'>
								<div className='me-3'>
									{item.id === 1 && (
										<Image
											width={50}
											height={50}
											src={"/gigi.svg"}
											alt='profile'
										/>
									)}
									{item.id === 2 && (
										<Image
											width={50}
											height={50}
											src={"/sophie.svg"}
											alt='profile'
										/>
									)}
									{item.id === 3 && (
										<Image
											width={50}
											height={50}
											src={"/david.svg"}
											alt='profile'
										/>
									)}
									{item.id === 4 && (
										<Image
											width={50}
											height={50}
											src={"/karim.svg"}
											alt='profile'
										/>
									)}
									{item.id === 5 && (
										<Image
											width={50}
											height={50}
											src={"/emily.svg"}
											alt='profile'
										/>
									)}
								</div>
								<span className='flex flex-col gap-1'>
									{/* change text color, font-normal to font-bold, text-xl */}
									<span className='text-xl font-bold leading-[1.6] text-white'>
										{/* {item.name} */}
										{item.id === 1 && t("testimonial1.name")}
										{item.id === 2 && t("testimonial2.name")}
										{item.id === 3 && t("testimonial3.name")}
										{item.id === 4 && t("testimonial4.name")}
										{item.id === 5 && t("testimonial5.name")}
									</span>
									{/* change text color */}
									<span className=' text-sm leading-[1.6] text-white-200 font-normal'>
										{item.id === 1 && t("testimonial1.title")}
										{item.id === 2 && t("testimonial2.title")}
										{item.id === 3 && t("testimonial3.title")}
										{item.id === 4 && t("testimonial4.title")}
										{item.id === 5 && t("testimonial5.title")}
									</span>
								</span>
							</div>
							<div
								aria-hidden='true'
								className='user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%+4px)] w-[calc(100%+4px)]'
							></div>
							{/* change text color, text-lg */}
							<span className=' relative z-20 text-sm md:text-lg leading-[1.6] text-white font-normal'>
								{/* {item.quote} */}
								{item.id === 1 && t("testimonial1.quote")}
								{item.id === 2 && t("testimonial2.quote")}
								{item.id === 3 && t("testimonial3.quote")}
								{item.id === 4 && t("testimonial4.quote")}
								{item.id === 5 && t("testimonial5.quote")}
							</span>
						</blockquote>
					</li>
				))}
			</ul>
		</div>
	);
};
