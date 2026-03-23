import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "CV - Mathieux's Portfolio",
	description: "Download or view Mathieux Carpentier's CV",
};

export default function CvLayout({ children }: { children: React.ReactNode }) {
	return children;
}
