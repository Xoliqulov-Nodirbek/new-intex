import React from 'react';
import CallBtn from '../CallBtn/CallBtn';
import HeroBg from '../../public/Assets/Images/hero-bg.png';
import Image from 'next/image';
function Hero() {
	return (
		<section className='mt-10'>
			<div className='max-w-[1220px] mx-auto px-5 '>
				<div className='bg-gray-bg_main py-6 sm:py-24 pl-4 sm:pl-8 rounded-3xl flex-col lg:flex-row flex lg:items-center justify-between'>
					<div className='w-full lg:w-heroContent pr-4'>
						<h1 className='font-bold text-2xl sm:text-4xl xl:text-5xl text-black-black_dark mb-4'>
							Бассейны от intex в Ташкенте
						</h1>
						<p className='font-normal text-sm lg:text-base text-black-black_thin mb-6 sm:mb-12'>
							Бассейны от intex - доступная по цене, качественная, надежная и
							экологически чистая продукция, которая предназначена для приятного
							отдыха всей семьи.{' '}
						</p>
						<div className='hidden sm:inline-block'>
							<CallBtn />
						</div>
					</div>
					<Image
						id='hero-bg'
						src={HeroBg}
						width={571}
						height={319}
						alt='Hero Bg'
					/>
					<div className='sm:hidden mt-7 pr-4'>
						<CallBtn />
					</div>
				</div>
			</div>
		</section>
	);
}

export default Hero;
