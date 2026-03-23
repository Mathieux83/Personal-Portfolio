"use client";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { GridBackground } from "./ui/DotsBackground";
import LightRays from "./ui/LightRays";
import MagicButton from "./ui/MagicButton";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
	const t = useTranslations("hero");
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const userAgent =
			typeof window.navigator === "undefined" ? "" : navigator.userAgent;
		setIsMobile(/iPhone|iPad|iPod|Android/i.test(userAgent));
	}, []);

	return (
		<div className='flex items-center justify-center pb-50 pt-50'>
			{/* <div className='pb-20 pt-36'> */}
			<div className=''>
				<div className=''>
					<GridBackground />
				</div>
				{!isMobile && (
					<div className='absolute left-0 top-0 w-screen h-screen  '>
						<LightRays
							raysOrigin='top-center'
							raysColor='#00D4FF'
							raysSpeed={0.1}
							lightSpread={0.5}
							rayLength={1}
							pulsating={false}
							fadeDistance={2}
							saturation={1}
							followMouse={true}
							mouseInfluence={0.2}
							noiseAmount={0.2}
							distortion={0}
							className='  '
						/>
					</div>
				)}

				<div className='flex justify-center items-center relative my-25 z-50 '>
					<div className='maw-w-[80vw] md:max-w-2xl lg:maw-w-[60vw] flex flex-col items-center justify-center'>
						<h2 className='uppercase tracking-widest text-sx text-center text-blue-100 max-w-80 '>
							{t("subtitle")}
						</h2>
						<TextGenerateEffect
							className='text-center text-[40px] md:text-5xl lg:text-6xl'
							words={t("title")}
						/>
						<p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
							{t("description")}
						</p>
						<a href='#about'>
							<MagicButton
								title={t("cta")}
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
