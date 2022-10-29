import React from 'react';
import Image from 'next/image';

function AboutUs() {
	return (
		<section className='my-40'>
			<div className='max-w-[1220px] mx-auto px-5'>
				<h2 className='text-black text-lg sm:text-3xl font-bold mb-10'>
					Почему нужно выбрать нас?
				</h2>
				<ul className='flex-col flex items-center flex-wrap lg:flex-row lg:justify-between'>
					<li className='mb-6 sm:mb-0'>
						<Image
							className='w-full sm:w-96 h-56 mb-4'
							src={'/Assets/Images/about-man.png'}
							width={380}
							height={220}
							alt='About Man Img'
						/>
						<strong className='text-base sm:text-lg font-bold mb-2.5'>Опыт</strong>
						<p className='text-sm sm:text-base text-black-black_thin'>
							Профессионализм наших сотрудников
						</p>
					</li>
					<li className='ml-1 mb-6 sm:mb-0'>
						<Image
							className='w-full sm:w-96 mb-4'
							src={'/Assets/Images/about-car.png'}
							width={380}
							height={220}
							alt='About Man Img'
						/>
						<strong className='text-base sm:text-lg font-bold mb-2.5'>Доставка</strong>
						<p className='text-sm sm:text-base text-black-black_thin'>
							Бесплатная доставка по городу
						</p>
					</li>
					<li className='ml-1 mb-6 sm:mb-0'>
						<Image
							className='w-full sm:w-96 h-56 mb-4'
							src={'/Assets/Images/about-pool.png'}
							width={380}
							height={220}
							alt='About Man Img'
						/>
						<strong className='text-base sm:text-lg font-bold mb-2.5'>Качество</strong>
						<p className='text-sm sm:text-base text-black-black_thin'>
							Прочные, качественные бассейны
						</p>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default AboutUs;
