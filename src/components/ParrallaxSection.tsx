'use client';

import React, {useEffect, useRef, useState} from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import {FaPlay, FaPause} from 'react-icons/fa';

const ReactPlayer = dynamic(() => import('react-player'), {ssr: false});

const ParallaxSection: React.FC = () => {
	const sectionRef = useRef<HTMLDivElement>(null);
	const steveRef = useRef<HTMLDivElement>(null);
	const circlesRef = useRef<HTMLDivElement>(null);
	const [isClient, setIsClient] = useState(false);
	const [isPlaying, setIsPlaying] = useState(false);
	const [hasInteracted, setHasInteracted] = useState(false);
	const [isVideoEnded, setIsVideoEnded] = useState(false);

	useEffect(() => {
		setIsClient(true);

		const handleScroll = () => {
			// ... existing scroll logic ...
		};

		const handleIntersection = (
			entries: IntersectionObserverEntry[]
		): void => {
			entries.forEach((entry) => {
				if (entry.isIntersecting && !hasInteracted) {
					setIsPlaying(true);
					setHasInteracted(true);
				}
			});
		};

		const observer = new IntersectionObserver(handleIntersection, {
			threshold: 0.5,
		});

		if (steveRef.current) {
			observer.observe(steveRef.current);
		}

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
			if (steveRef.current) {
				observer.unobserve(steveRef.current);
			}
		};
	}, [hasInteracted]);

	return (
		<div
			ref={sectionRef}
			className='sm:bg-white  bg-LegendsYellow   sm:relative flex w-full justify-center      sm:items-center'>
			<div className='flex w-full max-w-screen-2xl   '>
				<div className='sm:w-1/2  w-full flex  flex-col justify-between  mt-20  sm:mt-0 sm:flex-col  sm:gap-16 md:gap-20 px-4 sm:px-8 md:px-12 '>
					<div className='flex items-start justify-start '>
						<div className='flex flex-col justify-center items-start gap-4 pb-20'>
							{/* Updated text styling */}
							<p className='text-black text-right text-4xl  sm:text-2xl md:text-4xl lg-desktop:text-5xl  font-openSans'>
								REAL ADVICE.
							</p>
							<p className='text-black   text-right text-4xl sm:text-2xl md:text-4xl  lg-desktop:text-5xl font-openSans'>
								REAL INSPIRATION.
							</p>
							<p className='text-black text-4xl sm:text-2xl md:text-4xl lg-desktop:text-5xl font-openSans'>
								REAL <span className='font-bold'>RESULTS</span>
								{/* Added larger, bold colored dot */}
								<span className='text-LegendsSkyBlue font-bold sm:text-3xl md:text-4xl lg-desktop:text-5xl'>
									.
								</span>
							</p>
						</div>
					</div>
					<div className='flex  justify-center sm:items-center  items-end w-full'>
						<div className='relative flex   sm:justify-center   justify-end   items-center   sm:items-start sm:z-10 w-full'>
							{/* Circular container for Steve Harvey's image */}
							<div className=' w-2/3  bg-LegendsYellow   sm:min-w-[500px] lg-desktop:min-w-[700px]  aspect-square sm:rounded-full   overflow-hidden relative'>
								{/* Steve Harvey image */}
								<Image
									src='https://res.cloudinary.com/djfcozdnf/image/upload/v1725568512/steve_transparent_hb6mbc.png'
									alt='Steve Harvey'
									fill
									sizes='(max-width: 768px) 100vw, 80vw'
									className='object-cover object-bottom  w-[300px] h- sm:scale-[0.8] sm:translate-y-[12%] sm:translate-x-[10%]'
								/>
							</div>
						</div>
					</div>
				</div>

				<div className='hidden sm:block w-1/2 relative mt-20 '>
					<div
						ref={circlesRef}
						className='w-full h-full absolute inset-0'>
						{/* Colored circles */}
						<div className='absolute top-40  left-72 w-7 h-7 rounded-full bg-LegendsLightBlue'></div>
						<div className='absolute  top-20 left-52 w-4 h-4 rounded-full bg-LegendsBluePurple'></div>
						<div className='absolute top-60  left-96 w-4 h-4 rounded-full bg-LegendsBluePurple'></div>
						<div className='absolute   bottom-2/3    left-40 w-4 h-4 rounded-full bg-LegendsOrange'></div>
						<div className='absolute bottom-[60%] left-60 w-10 h-10 rounded-full bg-LegendsViolet'></div>
						<div className='absolute top-[45%] right-[20%] w-14 h-14 rounded-full bg-LegendsSkyBlue'></div>
						<div className='absolute top-[50%] left-[98%]  w-5 h-5 rounded-full bg-LegendsSkyBlue'></div>
						<div className='absolute bottom-[40%]  left-52 w-14 h-14 rounded-full bg-LegendsTurquoise'></div>

						{/* Circular images */}
						<Image
							src='https://res.cloudinary.com/djfcozdnf/image/upload/v1724817209/DavidGogginsPortrait_c8dehm.png'
							alt='David Goggins'
							width={64}
							height={64}
							className='absolute top-1/4  left-[90%] rounded-full bg-LegendsLimeGreen'
						/>
						<Image
							src='https://res.cloudinary.com/djfcozdnf/image/upload/v1724382749/OprahTransparenrt_nop0oa.png'
							alt='Oprah'
							width={64}
							height={64}
							className='absolute top-40 left-10 rounded-full  bg-LegendsPurple'
						/>
						<Image
							src='https://res.cloudinary.com/djfcozdnf/image/upload/v1724381792/kobetransparent_kfyuoq.png'
							alt='Kobe'
							width={64}
							height={64}
							className='absolute top-16  w-12 h-12 left-[70%] rounded-full bg-LegendsOrange'
						/>
						<Image
							src='https://res.cloudinary.com/djfcozdnf/image/upload/v1719775985/code2capital_Steve_jobs_Portrait_Focused_Expression_Todd_McFa_1140026c-bb97-4eeb-9bbe-da809ddb6bed_3_1_lshdz5.png'
							alt='Kobe'
							width={64}
							height={64}
							className='absolute bottom-[20%]   left-72 w-20 h-20   rounded-full bg-LegendsGreenBlue'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ParallaxSection;
