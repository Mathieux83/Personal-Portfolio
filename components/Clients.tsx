"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import React from "react";
import { InfiniteMovingCards } from "@/components/ui/InfinitCards";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { companies, testimonials } from "@/data";

const Clients = () => {
	const t = useTranslations("testimonials");
	return (
		<section id='testimonials' className='py-20'>
			<TextGenerateEffect
				className='text-center text-[40px] md:text-5xl lg:text-6xl'
				words={t("title")}
			/>

			<div className='flex flex-col items-center max-lg:mt-10'>
				<div
					// remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
					className='h-[50vh] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden'
				>
					<InfiniteMovingCards
						items={testimonials}
						direction='left'
						speed='slow'
					/>
				</div>

				<div className='flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10'>
					{companies.map((company) => (
						<React.Fragment key={company.id}>
							<div className='flex md:max-w-60 max-w-32 gap-2'>
								<Image
									width={100}
									height={100}
									src={company.img}
									alt={company.name}
									className='md:w-10 w-5'
								/>
								<Image
									// width={100}
									height={100}
									src={company.nameImg}
									alt={company.name}
									width={company.id === 4 || company.id === 5 ? 100 : 150}
									className='md:w-24 w-20'
								/>
							</div>
						</React.Fragment>
					))}
				</div>
			</div>
		</section>
	);
};

export default Clients;
