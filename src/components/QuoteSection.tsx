// src/components/QuoteSection.tsx

import React from 'react';
import Image from 'next/image';
import FeatureList from './FeatureList';
import CountdownTimer from './CountdownTimer';

const QuoteSection: React.FC = () => {
	return (
		<div className=' sm:py-16 bg-LegendsSkyBlue text-white flex flex-col  justify-center  sm:justify-items-center  sm:min-h-screen'>
			<div className='flex flex-col mt-20  items-center   px-6   sm:px-8 min-[1820px]:px-0  w-full'>
				<div className='flex flex-col items-start gap-10 max-w-[500px]'>
					<Image
						src='/quotes.svg'
						alt='Quotes'
						width={64}
						height={64}
						className='w-[42px] h-[42px] sm:w-[62px] sm:h-[62px]'
					/>

					<div className='flex flex-col gap-12  sm:gap-16'>
						<div className=' text-xl   sm:text-3xl min-[1820px]:text-4xl font-bold leading-tight'>
							You are in danger of living a life so comfortable
							and soft, that you will die without ever realizing
							your true potential.
						</div>

						<div className='flex items-center gap-8 '>
							<div className=' w-12 h-12 sm:w-16 sm:h-16  rounded-full bg-white flex items-center justify-center'>
								<Image
									src='https://res.cloudinary.com/djfcozdnf/image/upload/v1724817209/DavidGogginsPortrait_c8dehm.png'
									alt='David Goggins'
									width={64}
									height={64}
									className='rounded-full object-cover'
								/>
							</div>
							<div>
								<div className='font-bold'>David Goggins</div>
								<div className='text-sm'>
									Ultra Marathon Runner, Former Navy SEAL
								</div>
							</div>
						</div>
						<div className='flex flex-col   gap-12     sm:gap-40 mb-12'>
							<FeatureList />
							<div className='text-center text-sm sm:text-base space-y-4 '>
								<p>
									Your transformation starts here. Don’t miss
									out!
								</p>
								<CountdownTimer />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default QuoteSection;
