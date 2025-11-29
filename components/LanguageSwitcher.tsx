"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { useState, useTransition } from "react";

export default function LanguageSwitcher() {
	const locale = useLocale();
	const router = useRouter();
	const pathname = usePathname();
	const [isPending, startTransition] = useTransition();
	const [isHovered, setIsHovered] = useState(false);

	const switchLocale = (newLocale: string) => {
		if (newLocale === locale) return;

		startTransition(() => {
			// Remove current locale from pathname and add new one
			const segments = pathname.split("/");
			segments[1] = newLocale;
			const newPath = segments.join("/");
			router.push(newPath);
		});
	};

	return (
		<div
			className="relative flex items-center gap-1 p-1 rounded-full bg-black-100 border border-slate-700 backdrop-blur-lg"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			{/* English Button */}
			<button
			type="button"
				onClick={() => switchLocale("en")}
				disabled={isPending}
				className={`
					relative px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300
					${
						locale === "en"
							? "text-white bg-gradient-to-r from-purple-500 to-cyan-500 shadow-lg"
							: "text-slate-400 hover:text-white"
					}
					${isPending ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
				`}
				aria-label="Switch to English"
			>
				<span className="relative z-10 flex items-center gap-1">EN</span>
			</button>

			{/* French Button */}
			<button
			type="button"
				onClick={() => switchLocale("fr")}
				disabled={isPending}
				className={`
					relative px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300
					${
						locale === "fr"
							? "text-white bg-gradient-to-r from-purple-500 to-cyan-500 shadow-lg"
							: "text-slate-400 hover:text-white"
					}
					${isPending ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
				`}
				aria-label="Passer au Français"
			>
				<span className="relative z-10 flex items-center gap-1">FR</span>
			</button>

			{/* Animated glow effect on hover */}
			{isHovered && (
				<div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 blur-xl animate-pulse" />
			)}
		</div>
	);
}
