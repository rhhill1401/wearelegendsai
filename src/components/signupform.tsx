// src/components/signupform.tsx

'use client';

import React, {useEffect, useState} from 'react';
import Image from 'next/image';
import Script from 'next/script';

interface SignupFormProps {
	showFormDirectly?: boolean;
}

const SignupForm: React.FC<SignupFormProps> = ({showFormDirectly = false}) => {
	const [showForm, setShowForm] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false); // Tracks form submission
	const [error, setError] = useState<string | null>(null); // Tracks errors
	const [isLoading, setIsLoading] = useState(false); // Tracks loading state
	const [formOpened, setFormOpened] = useState(false);

	useEffect(() => {
		console.log('SignupForm rendered. showFormDirectly:', showFormDirectly);
		setShowForm(showFormDirectly);
		setFormOpened(showFormDirectly);
	}, [showFormDirectly]);

	useEffect(() => {
		// Add Mailchimp stylesheet
		const link = document.createElement('link');
		link.href = '//cdn-images.mailchimp.com/embedcode/classic-061523.css';
		link.rel = 'stylesheet';
		link.type = 'text/css';
		document.head.appendChild(link);

		return () => {
			document.head.removeChild(link);
		};
	}, []);

	const handleSecureSpot = () => {
		setShowForm(true);
		setFormOpened(true);
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault(); // Prevent default form submission

		setError(null); // Reset error state
		setIsLoading(true); // Set loading state

		// Collect form data
		const formData = new FormData(e.currentTarget);
		const data = {
			EMAIL: formData.get('EMAIL'),
			FNAME: formData.get('FNAME'),
			LNAME: formData.get('LNAME'),
		};

		try {
			const response = await fetch('/api/subscribe', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});

			const result = await response.json();

			if (response.ok) {
				setIsSubmitted(true); // Show success message
			} else {
				setError(
					result.error || 'Something went wrong. Please try again.'
				);
			}
		} catch (err) {
			setError('Something went wrong. Please try again.');
		} finally {
			setIsLoading(false); // Reset loading state
		}
	};

	return (
		<div
			className={`flex flex-col items-center ${
				isSubmitted ? 'bg-LegendsYellow pt-10' : 'bg-white py-16 '
			} lg:bg-transparent sm:py-0`}>
			<div className='mb-[34px] hidden sm:block'>
				<Image
					src='https://res.cloudinary.com/djfcozdnf/image/upload/v1721312475/BlueFlame_qipnte.svg'
					alt='Blue Flame Logo'
					width={32}
					height={32}
					className='w-14 h-14 sm:w-20 sm:h-20'
				/>
			</div>

			<div
				className={`flex flex-col items-center ${
					isSubmitted
						? 'bg-LegendsYellow   sm:pt-20  sm:pb-0 sm:drop-shadow-md'
						: 'bg-white lg:min-w-[790px] sm:py-4 px-8 sm:px-10 w-full'
				}  ${!isSubmitted && 'sm:drop-shadow-md'}`}>
				{!isSubmitted ? (
					<div className='w-full flex flex-col items-center text-center sm:py-20'>
						{!formOpened && (
							<div className='mb-10'>
								<h2 className='text-2xl sm:text-3xl font-normal mb-2 font-montserrat'>
									Do not Miss your chance for
								</h2>
								<h2 className='text-2xl sm:text-3xl mb-4 font-montserrat'>
									<span className='font-montserrat-bold'>
										$100,000 Cash Prize
									</span>{' '}
									<span className='font-normal'>
										sign up today!
									</span>
								</h2>
							</div>
						)}
						<section className='w-full max-w-md mx-auto'>
							{!formOpened && (
								<>
									<div className='mb-10 text-center'>
										<h3 className='text-lg sm:text-xl font-semibold mb-2'>
											Limited Availability
										</h3>
										<p className='text-LegendsSubtitleGrey mb-6'>
											A $500 entry fee secures your spot
											for a chance to win the $100,000
											Cash Prize!
										</p>
									</div>
									<p className='text-xs sm:text-sm mb-4 text-center'>
										{`Only a few spots left! Don't wait—secure
										your spot today!!`}
									</p>
								</>
							)}

							{!showForm ? (
								<button
									onClick={handleSecureSpot}
									className='w-full bg-LegendsYellow hover:bg-yellow-400 text-black font-semibold py-2 sm:py-3 rounded-full sm:text-lg transition duration-300 ease-in-out'>
									Secure My Spot
								</button>
							) : (
								<div
									id='mc_embed_signup'
									className='w-full max-w-lg mx-auto'>
									{/* Introductory message to encourage users to sign up */}
									<p className='text-2xl text-LegendsSubtitleGrey font-open-sans text-center mb-12'>
										{`Only 1000 applicants will be accepted.
										Don't miss your chance to register
										before spots fill up!`}
									</p>

									{/* Display Error Message if there's any error during form submission */}
									{error && (
										<div className='mb-4 text-red-500 text-sm'>
											{error}
										</div>
									)}

									{/* Signup form with validation */}
									<form
										onSubmit={handleSubmit}
										className='validate'>
										<div
											id='mc_embed_signup_scroll'
											className='space-y-5 w-full'>
											{/* Email Address Field */}
											<div className='mc-field-group w-full'>
												<label
													htmlFor='mce-EMAIL'
													className='block mb-1 text-sm font-medium text-gray-700'>
													Email Address
													<span className='text-red-500'>
														*
													</span>{' '}
													{/* Required field indicator */}
												</label>
												<input
													type='email'
													name='EMAIL'
													className='required email w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-LegendsSkyBlue'
													id='mce-EMAIL'
													required
												/>
											</div>

											{/* First Name Field */}
											<div className='mc-field-group w-full'>
												<label
													htmlFor='mce-FNAME'
													className='block mb-1 text-sm font-medium text-gray-700'>
													First Name
													<span className='text-red-500'>
														*
													</span>{' '}
												</label>
												<input
													type='text'
													name='FNAME'
													className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-LegendsSkyBlue'
													id='mce-FNAME'
												/>
											</div>

											{/* Last Name Field */}
											<div className='mc-field-group w-full pb-4'>
												<label
													htmlFor='mce-LNAME'
													className='block mb-1 text-sm font-medium text-gray-700'>
													Last Name
													<span className='text-red-500'>
														*
													</span>{' '}
												</label>
												<input
													type='text'
													name='LNAME'
													className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-LegendsSkyBlue'
													id='mce-LNAME'
												/>
											</div>

											{/* Hidden Anti-Spam Field to prevent bots from submitting the form */}
											<div
												style={{
													position: 'absolute',
													left: '-5000px',
												}}
												aria-hidden='true'>
												<input
													type='text'
													name='b_5938b10c5e4dfc7ec8c4d1784_aa2ee680ef'
													tabIndex={-1}
													value=''
												/>
											</div>

											{/* Secure Spot Button Aligned with Fields */}
											<div className='w-1/2 p-0 m-0'>
												<button
													type='submit'
													name='subscribe'
													id='mc-embedded-subscribe'
													className='bg-LegendsYellow hover:bg-yellow-400 text-black font-semibold py-2 w-full rounded-lg transition duration-300 ease-in-out'
													style={{
														width: '100%',
														marginLeft: 0,
														paddingLeft: 0,
													}}
													disabled={isLoading}>
													{isLoading
														? 'Submitting...'
														: 'Secure My Spot'}
												</button>
											</div>
										</div>
										{/* Additional Information for users after they submit the form */}
										<p className='text-xs text-gray-500 mt-8  text-start'>
											<span className='text-LegendsRed'>
												*
											</span>
											{`After you secure your spot, we'll follow
										up with next steps to join the
										challenge!`}
										</p>
									</form>
								</div>
							)}
						</section>
					</div>
				) : (
					// Custom Success Message
					<div className='flex flex-col lg:min-w-[790px] w-full  items-center overflow-hidden'>
						{/* Success Text */}
						<div className='text-center w-3/5 mb-8   '>
							<h2 className='text-2xl sm:text-4xl font-bold mb-6 sm:mb-14  text-black relative'>
								You&apos;re In! Get ready for a life changing{' '}
								<span className='text-black relative pb-3 sm:pb-4 '>
									challenge!
									<Image
										src='/strike.svg'
										alt='Underline'
										width={100}
										height={10}
										className='absolute bottom-0 left-0 w-full '
									/>
								</span>
							</h2>
							<p className='text-lg text-gray-800'>
								Keep an eye on your inbox for an email with the
								competition rules and next steps.
							</p>
						</div>

						{/* Success Image */}
						<div className='w-full flex-grow flex items-end justify-end'>
							<div className='relative w-full aspect-[16/9] sm:aspect-[22/9]'>
								<Image
									src='https://res.cloudinary.com/djfcozdnf/image/upload/v1728062774/Daviud_thumbs_up_ullc7c.png'
									alt='Success Image'
									layout='fill'
									objectFit='contain'
									objectPosition='center bottom'
								/>
							</div>
						</div>
					</div>
				)}
			</div>
			{/* Mailchimp Validation Scripts (Optional, can be removed if not needed) */}
			<Script
				src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'
				strategy='lazyOnload'
			/>
			<Script id='mcjs' strategy='lazyOnload'>
				{`
          (function($) {
            window.fnames = new Array();
            window.ftypes = new Array();
            fnames[0]='EMAIL';
            ftypes[0]='email';
            fnames[1]='FNAME';
            ftypes[1]='text';
            fnames[2]='LNAME';
            ftypes[2]='text';
            // Add more fields if needed
          })(jQuery);
        `}
			</Script>
		</div>
	);
};

export default SignupForm;
