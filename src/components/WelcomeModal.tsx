// src/components/WelcomeModal.tsx

import React from 'react';
import {IoMdCloseCircle} from 'react-icons/io';
import Image from 'next/image';

interface WelcomeModalProps {
	isOpen: boolean;
	onClose: () => void;
	onSecureSpot: () => void;
}

const WelcomeModal: React.FC<WelcomeModalProps> = ({
	isOpen,
	onClose,
	onSecureSpot,
}) => {
	if (!isOpen) return null;

	const handleSecureSpot = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		onSecureSpot();
	};

	const handleClose = () => {
		onClose();
	};

	return (
		<div className='fixed inset-0 z-50 flex items-center justify-center'>
			{/* Overlay */}
			<div
				className='absolute inset-0 bg-black bg-opacity-70'
				onClick={handleClose}></div>

			{/* Modal container */}
			<div className='relative bg-LegendsYellow w-[90vw]  sm:w-[70vw] max-w-[1487px] h-[90vh] sm:h-[60vh] max-h-[750px] flex flex-col'>
				{/* Top row: Close button */}
				<div className='flex justify-end px-5 pt-4'>
					<button
						className='text-LegendsUltraDarkBlue hover:text-LegendsSkyBlue transition-colors'
						onClick={handleClose}
						aria-label='Close Modal'>
						<IoMdCloseCircle size={32} />
					</button>
				</div>

				{/* Bottom row: Content */}
				<div className='flex flex-col h-full px-4 pt-6  sm:flex-row sm:pt-10'>
					{/* Left column: Text and button */}
					<div className='sm:w-3/5 mb-12 lg-desktop:w-4/5 px-3 w-full  sm:pl-10 flex flex-col justify-start space-y-9 sm:space-y-9  min-[1800px]:space-y-10'>
						<h2 className='text-2xl sm:text-2xl text-center sm:text-left lg-desktop:text-4xl desktop:text-3xl font-montserrat'>
							Transform Your Life & Win{' '}
							<span className='font-montserrat-bold'>
								$100,000!
							</span>
							<br />
							<p className='pt-12 sm:pt-1 lg-desktop:text-3xl text-center font-montserrat sm:text-left'>
								Join the 90-Day Transformation Challenge
							</p>
						</h2>

						<p className='text-base sm:text-xl lg-desktop:text-2xl text-center sm:text-left font-light font-open-sans'>
							{`Spaces are limited – don't miss your chance to transform your life. `}
							<br />
							<span className='font-bold'>{`$500 entry fee`}</span>
							{` to secure your spot!`}
						</p>
						<button
							className='bg-LegendsSkyBlue text-white py-2 px-2 xl:py-3 xl:px-8 font-bold rounded-md  text-sm  xl:rounded-xl   xl:text-xl hover:bg-LegendsLightBlue transition-colors lg:w-2/3'
							onClick={handleSecureSpot} // Updated handler
						>
							Secure My Spot
						</button>
					</div>

					{/* Right column: Image */}
					<div className='sm:flex   w-full  flex-grow   items-end justify-end   xl:w-1/2 desktop:w-3/5 xl:mr-28  lg-desktop:w-2/4 relative'>
						<Image
							src='https://res.cloudinary.com/djfcozdnf/image/upload/v1728061935/DavidGoggins_pointig_at_user_hzurtc.png'
							alt='Man holding money bags'
							layout='fill'
							objectFit='contain'
							objectPosition='center bottom'
							priority
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WelcomeModal;
