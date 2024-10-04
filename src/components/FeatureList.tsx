// src/components/FeatureList.tsx

import React from 'react';
import {IoMdCheckmarkCircleOutline} from 'react-icons/io';

const FeatureList: React.FC = () => {
	const features = [
		'24/7 Access to Legendary Wisdom to over 20 AI Legends',
		'Personalized Growth Plans Tailored by AI',
	];

	return (
		<div className='space-y-2 text-xs sm:text-base'>
			{features.map((feature, index) => (
				<div key={index} className='flex items-center'>
					<IoMdCheckmarkCircleOutline className='w-5 h-5 mr-2 text-green-300' />
					{feature}
				</div>
			))}
		</div>
	);
};

export default FeatureList;
