import type { Metadata } from "next";
import "../globals.css";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { locales } from "@/i18n";
import Provider from "../provider";

export const metadata: Metadata = {
	title: "Mathieux's Portfolio",
	description: "Modern & Minimalist Next.js Portfolio",
};

export function generateStaticParams() {
	return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}>) {
	const { locale } = await params;

	// Validate locale
	if (!locales.includes(locale as (typeof locales)[number])) {
		notFound();
	}

	// Providing all messages to the client
	const messages = await getMessages({ locale });

	return (
		<html lang={locale} suppressHydrationWarning={true}>
			<body className=''>
				<NextIntlClientProvider locale={locale} messages={messages}>
					<Provider>{children}</Provider>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
