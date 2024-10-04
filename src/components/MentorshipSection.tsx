// src/components/MentorshipSection.tsx
import React from 'react';
import Image from 'next/image';

const MentorshipSection: React.FC = () => {
	return (
		<div className=' flex justify-center sm:items-center items-end  bg-LegendsSkyBlue  sm:bg-LegendsExtraLightGrey w-full min-h-screen relative'>
			{/* Container for content alignment */}
			<div className='container  mx-auto flex flex-col lg:flex-row items-center sm:justify-center'>
				{/* Image section with blue background */}
				<div className='flex justify-center items-end w-full mt-20 sm:mt-0 bg-LegendsSkyBlue   sm:pt-44  desktop:max-w-[791.923px] max-h-[707px] order-2 sm:order-1'>
					<Image
						src='https://res.cloudinary.com/djfcozdnf/image/upload/v1725928230/Warren_transparent_bmgl9s.png'
						alt='Warren Buffett'
						width={600}
						height={500}
						className='object-contain bottom '
					/>
				</div>
				{/* Text content section */}
				<div className='lg:w-3/5  sm:bg-white text-white sm:text-black  px-2  text-center sm:text-start  sm:py-28 sm:px-12 lg:px-20 sm:z-10 sm:shadow-lg lg:-ml-[150px] lg:-mt-[150px] sm:relative order-1 sm:order-2'>
					<h2 className='lg-desktop:text-[40px]   font-georgia pt-20   text-4xl  leading-tight  mb-20 sm:mb-0'>
						We are creating{' '}
						<span className='font-bold'>millionaires</span> through{' '}
						<span className='relative inline-block'>
							<span className='block relative pb-2'>
								mentorship
								<Image
									src='/squiggle.svg'
									alt='Squiggle'
									width={0}
									height={0}
									className='absolute -bottom-4  w-full h-10 left-0'
								/>
							</span>
						</span>
					</h2>
					<p className='font-open-sans text-lg   lg-desktop:text-[24px]  text-start font-thin leading-loose'>
						Experience unparalleled mentorship through AI-driven
						insights from industry titans like Warren Buffett and
						Gary Vaynerchuk. Tailored programs, 24/7 personalized
						support, and a thriving network of ambitious individuals
						all at your fingertips.
					</p>
				</div>
			</div>
		</div>
	);
};

export default MentorshipSection;
