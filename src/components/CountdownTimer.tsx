'use client';

import React, {useState, useEffect} from 'react';

const CountdownTimer: React.FC = () => {
	const [timeLeft, setTimeLeft] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	});

	useEffect(() => {
		const endDate = new Date('2024-11-01T00:00:00').getTime();

		const timer = setInterval(() => {
			const now = new Date().getTime();
			const difference = endDate - now;

			if (difference > 0) {
				setTimeLeft({
					days: Math.floor(difference / (1000 * 60 * 60 * 24)),
					hours: Math.floor(
						(difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
					),
					minutes: Math.floor(
						(difference % (1000 * 60 * 60)) / (1000 * 60)
					),
					seconds: Math.floor((difference % (1000 * 60)) / 1000),
				});
			} else {
				clearInterval(timer);
			}
		}, 1000);

		return () => clearInterval(timer);
	}, []);

	return (
		<div className='bg-white text-black py-3 sm:px-4 rounded-md flex items-center justify-between  flex-grow lg-desktop:w-full'>
			<div className='flex items-center justify-center space-x-4  sm:space-x-8  text-center w-full'>
				<span className='font-bold text-xs  sm:text-sm  min-[1820px]:text-base'>
					SIGN UP ENDS
				</span>
				<div className='h-6 w-px bg-black'></div>{' '}
				<div className='flex space-x-4  sm:space-x-8'>
					{Object.entries(timeLeft).map(([unit, value]) => (
						<div key={unit} className='flex flex-col items-center'>
							<span className='text-xs lg-desktop:text-xl font-medium countdown-number'>
								{value.toString().padStart(2, '0')}
							</span>
							<span className='text-xs uppercase'>{unit}</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default CountdownTimer;
