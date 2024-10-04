'use client';

import React, {useState, useEffect} from 'react';
import SignupForm from '../components/signupform';
import QuoteSection from '../components/QuoteSection';
import ParallaxSection from '@/components/ParrallaxSection';
import WelcomeModal from '@/components/WelcomeModal';
import MentorshipSection from '@/components/MentorshipSection';
import HighAchieversSection from '@/components/HighAchieverSection';

const SignupPage: React.FC = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [showFormDirectly, setShowFormDirectly] = useState(false);

	useEffect(() => {
		setIsModalOpen(true);
	}, []);

	const handleSecureSpot = () => {
		console.log('Spot secured!');
		setIsModalOpen(false);
		setShowFormDirectly(true);
		console.log('Should show form now');
	};

	return (
		<div className='flex flex-col min-h-screen bg-LegendsLightGrey overflow-x-hidden'>
			<WelcomeModal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				onSecureSpot={handleSecureSpot}
			/>
			{/* Corrected responsive layout */}
			<div className='flex flex-col md:flex-row min-h-screen'>
				<div className='w-full sm:p-8 flex justify-center items-center order-2 lg:order-1 xl:w-9/12 '>
					<SignupForm showFormDirectly={showFormDirectly} />
				</div>
				<div className='w-screen bg-LegendsSkyBlue flex-grow order-1 lg:order-2 lg:w-10/12 xl:w-4/12 '>
					<QuoteSection />
				</div>
			</div>
			<MentorshipSection />
			<ParallaxSection />
			<HighAchieversSection />
		</div>
	);
};

export default SignupPage;
