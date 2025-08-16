import type { Metadata } from "next";
import "./globals.css";
// import { ThemeProvider } from "next-themes";
import Provider from "./provider";

export const metadata: Metadata = {
	title:
	"Mathieux's Portfolio",
	description:
	"Modern & Minimalist Next.js Portfolio",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className=''>
				<Provider>{children}</Provider>
			</body>
		</html>
	);
}
