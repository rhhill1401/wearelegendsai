import type {Metadata} from 'next';
import {Inter, Open_Sans, Montserrat} from 'next/font/google';
import './globals.css';
import Script from 'next/script';

const inter = Inter({subsets: ['latin']});
const openSans = Open_Sans({subsets: ['latin']});
const montserrat = Montserrat({
	subsets: ['latin'],
	variable: '--font-montserrat',
});

export const metadata: Metadata = {
	title: 'We Are Legends AI',
	description: 'We Are Legends AI Application',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' className={montserrat.variable}>
			<head>
				<Script
					src='https://code.jquery.com/jquery-3.6.0.min.js'
					strategy='beforeInteractive'
				/>
			</head>
			<body
				className={`${inter.className} ${openSans.className} bg-bg-LegendsLightGrey`}>
				{children}
			</body>
		</html>
	);
}
