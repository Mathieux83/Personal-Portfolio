import Image from "next/image";
import { useTranslations } from "next-intl";
import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorder";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

export const Experiences = () => {
	const t = useTranslations("experiences");
	return (
		<div className="py-20" id="experiences">
			<TextGenerateEffect
				className="text-center text-[40px] md:text-5xl lg:text-6xl"
				words={t("title")}
			/>
			<div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
				{workExperience.map((card) => (
					<Button
						key={card.id}
						duration={Math.floor(Math.random() * 10000 + 10000)}
						borderRadius="1.75rem"
						className={
							"flex-1 text-white border-neutral-200 dark:border-slate-800"
						}
					>
						<div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
							<Image
								src={card.thumbnail}
								alt={card.thumbnail}
								width={100}
								height={100}
								className="lg:w-32 md:w-20 w-16"
							/>
							<div className="lg:ms-5 ">
								<h1 className="text-start text-xl md:text-2xl font-bold">
									{card.id === 1
										? t("exp1.title")
										: card.id === 2
											? t("exp2.title")
											: card.id === 3
												? t("exp3.title")
												: card.id === 4
													? t("exp4.title")
													: card.id === 5
														? t("exp5.title")
														: ""}
								</h1>

								<p className="text-start mt-3 font-semibold text-gray-400">
									{card.id === 1
										? t("exp1.description")
										: card.id === 2
											? t("exp2.description")
											: card.id === 3
												? t("exp3.description")
												: card.id === 4
													? t("exp4.description")
													: card.id === 5
														? t("exp5.description")
														: ""}
								</p>
							</div>
						</div>
					</Button>
				))}
			</div>
		</div>
	);
};
