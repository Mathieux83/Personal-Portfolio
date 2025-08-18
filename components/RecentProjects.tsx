import { projects } from "@/data";
import React from "react";
import Image from "next/image";
// import BG from "@/public/bg.png";
import { CardContainer, CardItem, CardBody } from "./ui/3DCard";
import { FaLocationArrow } from "react-icons/fa6";

const RecentProjects = () => {
	return (
		<div className='py-20' id="projects">
			<h1 className='heading'>
				A selection of <span className='text-rose-300 '>Recent Projects</span>
			</h1>
			<div className='flex flex-wrap items-center justify-center p-4 gap-6 md:gap-25 lg:gap-32 mt-10 lg:mt-15'>
				{projects.map(({ id, title, des, img, iconLists, link }) => (
					<div key={id}>
						<div className='lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]'>
							<CardContainer className='inter-var '>
								<CardBody className="relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-[url('/bg.png')] bg-cover border-white/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
									<CardItem
										translateZ='50'
										className='font-bold lg:text-xl md:text-md text-base line-clamp-1'
									>
										{title}
									</CardItem>
									<CardItem
										as='p'
										translateZ='60'
										className='text-sm mt-2 lg:text-lg lg:font-normal font-light line-clamp-2'
									>
										{des}
									</CardItem>
									<CardItem translateZ='100' className='w-full lg:mt-0.5   '>
										<Image
											src={img}
											height='1000'
											width='1000'
											className='h-full  w-full object-cover rounded-xl group-hover/card:shadow-xl '
											alt='thumbnail'
										/>
									</CardItem>
									<div className='flex justify-between items-center mt-2 mb-3  '>
										{/* <div className='flex justify-between items-center lg:mt-15 mt-5'> */}
										<CardItem
											translateZ={20}
											className='flex items-center justify-center '
										>
											{iconLists.map((icon, id) => (
												<div
													key={id}
													className='border border-white/[0.2] rounded-full bg-black p-2 flex justify-center items-center lg:w-10 lg:h-10 h-8 w-8'
													style={{ transform: `translateX(-${5 * id * 2}px)` }}
												>
													<Image
														src={icon}
														alt='icon'
														width={50}
														height={50}
														className=''
													/>
												</div>
											))}
										</CardItem>

										<CardItem
											translateZ={20}
											as='a'
											href={link}
											target='__blank'
											className='lg:text-xl md:text-xs text-sm text-blue-100 flex items-center justify-center '
											// className=' lg:px-5 lg:py-3 lg:rounded-xl bg-white text-black text-xs font-bold w-fit text-center px-2 py-2 rounded-lg flex items-center justify-center'
										>
											Check
											<FaLocationArrow
												className='ms-2 inline '
												color='#dbeafe'
											/>
											{/* <FaLocationArrow className="ms-3 inline" color="#000"  /> */}
										</CardItem>
									</div>
								</CardBody>
							</CardContainer>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default RecentProjects;
