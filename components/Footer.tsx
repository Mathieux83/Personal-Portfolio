import React from "react";
import Image from "next/image";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";

const Footer = () => {
	return (
		<footer className='w-full mb-[100px] md:mb-5 pb-10' id='contact'>
			{/* <div className='w-full absolute left-0 -bottom-72 min-h-96'>
				<Image
					src={"/footer-grid.svg"}
					alt='Footer Grid'
					width={100}
					height={100}
					className='h-full w-full opacity-50'
				/>
			</div> */}
			<div className='flex flex-col items-center'>
				<h1 className='heading lg:max-w-[45vw]'>
					Ready to make <br></br><span className='text-rose-300'>your</span><br></br> project
					as Reality ?
				</h1>
				<p className='text-white-200 md:mt-10 my-5 text-center'>
					Reach out to me today and let&apos;s discuss how I can help you
					achieve your goals.
				</p>
				<a href='mailto:car.math@icloud.com'>
					<MagicButton
						title="Let's get in touch"
						icon={<FaLocationArrow />}
						position='right'
					/>
				</a>
			</div>
			<div className='flex mt-16 md:flex-row flex-col items-center justify-between'>
				<p className='md:text-base text-sm md:font-normal font-light'>
					Copyright © 2025 Mathieux&apos;s. All rights reserved.
				</p>
				<div className='flex items-center md:gap-3 gap-6 mt-5 md:mt-0'>
					{socialMedia.map((profile) => (
						<div
							key={profile.id}
							className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180  bg-black/75 rounded-lg border border-slate-700'
						>
							
							<a href={profile.link} target='_blank' rel='noreferrer'>
								<Image
								src={profile.img}
								width={20}
								height={20}
								alt={profile.title}
								className='cursor-pointer'
							/>
							</a>
						</div>
					))}
				</div>
			</div>
		</footer>
	);
};

export default Footer;
