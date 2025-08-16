"use client"
import React, { useState, useEffect } from "react";
import { GridBackground } from "./ui/DotsBackground";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import LightRays from "./ui/LightRays";

const Hero = () => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const userAgent =
			typeof window.navigator === "undefined" ? "" : navigator.userAgent;
		setIsMobile(/iPhone|iPad|iPod|Android/i.test(userAgent));
	}, []);

	return (
		<div className='pb-20 pt-36'>
			<div className=''>
				<div className=''>
					<GridBackground />
				</div>
				{!isMobile && (
					<div className='absolute left-0 top-0 w-full h-full '>
						<LightRays
							raysOrigin='top-center'
							raysColor='#5be1ff'
							raysSpeed={0.5}
							// lightSpread={0.5}
							// rayLength={0.5}
							pulsating={false}
							// fadeDistance={0.7}
							saturation={2}
							followMouse={true}
							mouseInfluence={0.2}
							noiseAmount={0.15}
							distortion={0}
							className=''
						/>
					</div>
				)}

				<div className='flex justify-center items-center relative my-25 z-10 '>
					<div className='maw-w-[80vw] md:max-w-2xl lg:maw-w-[60vw] flex flex-col items-center justify-center'>
						<h2 className='uppercase tracking-widest text-sx text-center dark:text-blue-100 max-w-80 '>
							A Dynamic Portfolio
						</h2>
						<TextGenerateEffect
							className='text-center text-[40px] md:text-5xl lg:text-6xl'
							words='Turn your ideas into reality'
						/>
						<p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
							Hi I&apos;m Mathieux, a fresh Developer based in France.
						</p>
						<a href='#about'>
							<MagicButton
								title='Show my Works'
								icon={<FaLocationArrow />}
								position='right'
							/>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
