import Link from 'next/link';
import React from 'react';
import Image from 'next/dist/client/image';
import SiteLogo from '../../public/Assets/Images/intex-logo.svg';
import korzina from '../../public/Assets/Images/karzinka.svg';
import ruFlag from '../../public/Assets/Images/ru-flag.svg';
import drop from '../../public/Assets/Images/drop.svg';
import uzFlag from '../../public/Assets/Images/uzb-flag.svg';
import usaFlag from '../../public/Assets/Images/usa-flag.svg';
import { useState } from 'react';

function Header() {
	const [lang, setLang] = useState('Ru');
	function handlClick(prop) {
		setLang(prop)
	}
	return (
		<header className='bg-[#FAFAFA]'>
			<div className='py-3 border-b-2'>
				<div className='w-[1180px] mx-auto'>
					<div className='flex items-center justify-between'>
						<p className='text-sm hover:scale-105 duration-150'>
							10:00 - 22:00 Без выходных
						</p>
						<a
							className='text-base font-bold hover:scale-105 duration-150 text-blue-500'
							href='tel:+998901288182'>
							+998 (90) 128 81 82
						</a>
						<ul className='flex items-center'>
							<li className='hover:scale-105 duration-150'>
								<Link className='text-sm' href=''>
									О Продукт
								</Link>
							</li>
							<li className='hover:scale-105 duration-150'>
								<Link className='text-sm ml-6' href=''>
									Почему мы?
								</Link>
							</li>
							<li className='hover:scale-105 duration-150'>
								<Link className='text-sm ml-6 ' href=''>
									Контакты
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className='py-4'>
				<div className='w-[1220px] mx-auto px-5'>
					<div className='flex items-center justify-between'>
						<div className='flex items-center'>
							<Link href={'/'}>
								<Image src={SiteLogo} width={200} height={19} alt='Site Logo' />
							</Link>
							<ul className='flex items-center ml-10'>
								<li className=''>
									<Link
										className={`categoryItem relative pb-4 text-base font-medium`}
										href=''>
										Категории
										<div className='drop-down-list duration-300 absolute w-52 p-3 rounded-xl bg-white shadow-lg top-9 -translate-y-44 opacity-0 flex flex-col'>
											<Link
												className='text-sm mb-2 hover:scale-105 duration-200'
												href=''>
												Надувные бассейны
											</Link>
											<Link
												className='text-sm mb-2 hover:scale-105 duration-200'
												href=''>
												Каркасные бассейны
											</Link>
											<Link
												className='text-sm mb-2 hover:scale-105 duration-200'
												href=''>
												Все чистки бассейна
											</Link>
											<Link
												className='text-sm hover:scale-105 duration-200'
												href=''>
												Аксессуары для бассейна
											</Link>
										</div>
									</Link>
								</li>
								<li className='ml-7 hover:scale-105 duration-150'>
									<Link className='text-base font-medium' href=''>
										Популярное
									</Link>
								</li>
								<li className='ml-6 hover:scale-105 duration-150'>
									<Link className='text-base font-medium' href=''>
										Новинки
									</Link>
								</li>
								<li className='ml-6 hover:scale-105 duration-150'>
									<Link className='text-base font-medium' href=''>
										На скидке
									</Link>
								</li>
							</ul>
						</div>
						<div className='flex items-center'>
							<input
								className='searching-input py-2.5 pl-9 cursor-pointer w-64 outline-none rounded-xl focus:shadow-lg'
								type='text'
								placeholder='Поиск'
								aria-label='Enter your needs'
							/>
							<span className='flex items-center ml-8 justify-center hover:scale-125 duration-150 bg-white rounded-lg cursor-pointer w-10 h-10'>
								<Image src={korzina} width={24} height={24} alt='Korzina Img' />
							</span>
							<div
								id='language'
								className='flex relative h-10 z-50  bg-white items-center w-[86px] justify-between pl-1 pr-2 py-2.5 rounded-md cursor-pointer ml-8'>
								<Image src={ruFlag} width={28} height={20} alt='RU language' />
								<input
									className='langInput outline-none w-5 placeholder:font-medium placeholder:text-sm placeholder:text-black'
									readOnly
									type='text'
									placeholder={lang}
								/>
								<Image src={drop} width={9} height={5} alt='drop img' />

								<div
									id='langDrop'
									className='absolute -z-50 opacity-0 duration-300 w-full left-0 bg-white py-2.5 pl-2.5 pr-4 rounded-md -translate-y-4 '>
									<div
										onClick={() => handlClick('Uz')}
										className='flex items-center mb-2 justify-between'>
										<Image
											src={uzFlag}
											width={28}
											height={20}
											alt='Uz language'
										/>
										<span className='text-sm font-medium'>Uz</span>
									</div>
									<div
										onClick={() => handlClick('Us')}
										className='flex items-center justify-between'>
										<Image
											src={usaFlag}
											width={28}
											height={20}
											alt='Us language'
										/>
										<span className='text-sm font-medium'>Us</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
