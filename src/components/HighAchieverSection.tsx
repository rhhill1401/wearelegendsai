// src/components/HighAchieversSection.tsx
import React from 'react';
import Image from 'next/image';

const HighAchieversSection: React.FC = () => {
	return (
		<div className='bg-LegendsLightGrey w-full h-screen flex flex-col justify-center items-center'>
			<div className='max-w-7xl mx-auto flex flex-col justify-center items-center h-full'>
				{/* White container with overlapping images */}
				<div className='bg-white w-full h-1/2 sm:h-[550px] rounded-t-md relative overflow-hidden'>
					<Image
						src='https://res.cloudinary.com/djfcozdnf/image/upload/v1726238149/michaekbrown_bcyg0l.png'
						alt='Michael Jordan'
						width={320}
						height={300}
						className='absolute left-0 bottom-0 z-10 w-[210px] h-[280px] sm:w-[320px] sm:h-[450px]'
					/>
					<Image
						src='https://res.cloudinary.com/djfcozdnf/image/upload/v1726238142/rockbadass_hwe5zq.png'
						alt='The Rock'
						width={400}
						height={400}
						className='absolute left-1/2 -translate-x-1/2 bottom-0 z-20 w-[240px] h-[240px] sm:w-[400px] sm:h-[400px]'
					/>
					<Image
						src='https://res.cloudinary.com/djfcozdnf/image/upload/v1726251024/david_folded_arms_transparent_zqmiai.png'
						alt='David Goggins'
						width={260}
						height={300}
						className='absolute right-0 bottom-0 z-0 w-[150px] h-[180px] sm:w-[260px] sm:h-[320px]'
					/>
				</div>

				{/* Blue container with text and button */}
				<div className='bg-LegendsSkyBlue w-screen sm:w-full h-1/2 sm:h-2/5  py-8 px-4 sm:py-24 sm:px-8 text-center relative z-30 desktop:min-w-[700px] flex flex-col justify-center'>
					<div className='flex flex-col items-center space-y-10 sm:space-y-16  sm:px-8 '>
						<h2 className='font-open-sans  text-4xl  sm:text-5xl lg-desktop:text-[42px] font-bold text-white '>
							What the hell you waiting for!
						</h2>
						<div className=' sm:space-y-4  '>
							<p className='font-open-sans text-lg  sm:text-2xl lg-desktop:text-[24px] text-white'>
								Join an Exclusive Community of High Achievers
							</p>
							<p className='font-open-sans text-lg sm:text-2xl lg-desktop:text-[24px] text-white'>
								Limited to Just 1000 Members Worldwide
							</p>
						</div>
						<button className='bg-LegendsYellow text-black rounded-2xl w-4/5 sm:w-3/5 font-open-sans font-semibold py-2 px-8 text-lg hover:bg-opacity-90 transition duration-300'>
							Join the waitlist
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HighAchieversSection;
