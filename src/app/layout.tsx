import type {Metadata} from 'next';
import {Inter, Open_Sans} from 'next/font/google';
import './globals.css';

const inter = Inter({subsets: ['latin']});
const openSans = Open_Sans({subsets: ['latin']});

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
		<html lang='en'>
			<body
				className={`${inter.className} ${openSans.className} bg-LegendsSkyBlue`}>
				{children}
			</body>
		</html>
	);
}
