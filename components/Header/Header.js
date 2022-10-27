import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import SiteLogo from "../../public/Assets/Images/siteLogo.svg"
import BlogImg from '../../public/Assets/Images/block-img.svg';
import russiaFlag from '../../public/Assets/Images/russia-flag.svg';
import dropImg from '../../public/Assets/Images/drop-img.svg';
import hamburgerMenu from '../../public/Assets/Images/hamburger.svg';
import phoneImg from '../../public/Assets/Images/phone-img.svg';
import logoMobile from "../../public/Assets/Images/logoMobile.svg"
import UZBflag from "../../public/Assets/Images/uzb-flag.svg"
import USAflag from "../../public/Assets/Images/usa-flag.svg"

function Header() {
	const [lang, setLang] = useState('Ru');
	return (
		<header className='bg-gray-bg_nav'>
			<div className='hidden md:block py-3 border-b-2'>
				<div className='max-w-[1220px] mx-auto px-5'>
					<div className='flex items-center justify-between'>
						<p className='text-sm text-gray-text font-medium hover:scale-105 duration-150'>
							10:00 - 22:00 Без выходных
						</p>
						<a
							className='text-base font-bold hover:scale-105 duration-150 text-blue-accent'
							href='tel:+998901288182'>
							+998 (90) 128 81 82
						</a>
						<div className='flex items-center'>
							<div className='hover:scale-105 duration-150'>
								<Link className='text-sm font-medium text-gray-text' href={'/'}>
									О Продукт
								</Link>
							</div>
							<div className='hover:scale-105 duration-150'>
								<Link
									className='text-sm font-medium text-gray-text ml-6'
									href={'/'}>
									Почему мы?
								</Link>
							</div>
							<div className='hover:scale-105 duration-150'>
								<Link
									className='text-sm font-medium text-gray-text ml-6 '
									href={'/'}>
									Контакты
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='border-b-2 md:border-none'>
				<div className='max-w-[1220px] mx-auto px-5 py-3.5 sm:py-4'>
					<div className='flex items-center justify-between'>
						<div className='flex items-center'>
							<Link href={'/'}>
								<Image className='w-52 h-5 hidden sm:inline-block' src={SiteLogo} width={200} height={20} alt="Site Logo"/>
								<Image className='w-36 h-3.5 sm:hidden' src={logoMobile} width={150} height={14} alt="Site Logo Mobile"/>
							</Link>
							<div className='hidden items-center ml-10 xl:flex'>
								<Link
									className='category pb-3 mt-3 relative pr-4 text-base text-black-black_dark font-medium'
									href={'/'}>
									Категории
									<ul className='category-list duration-300 absolute w-52 bg-white p-3 rounded-xl shadow-lg -translate-y-36 opacity-0'>
										<li>
											<Link className='font-normal text-sm hover:scale-110 inline-block duration-150 text-black-black_thin mb-2' href={'/'}>Надувные бассейны</Link>
										</li>
										<li>
											<Link className='font-normal hover:scale-110 inline-block duration-150 text-sm text-black-black_thin mb-2' href={'/'}>Каркасные бассейны</Link>
										</li>
										<li>
											<Link className='font-normal hover:scale-110 inline-block duration-150 text-sm text-black-black_thin mb-2' href={'/'}>Все чистки бассейна</Link>
										</li>
										<li>
											<Link className='font-normal hover:scale-110 inline-block duration-150 text-sm text-black-black_thin mb-2' href={'/'}>Аксессуары для бассейна</Link>
										</li>
									</ul>
								</Link>
								<Link
									className='ml-6 hover:scale-110 duration-150 text-base text-black-black_dark font-medium'
									href={'/'}>
									Популярное
								</Link>
								<Link
									className='ml-6 hover:scale-110 duration-150 text-base text-black-black_dark font-medium'
									href={'/'}>
									Новинки
								</Link>
								<Link
									className='ml-6 hover:scale-110 duration-150 text-base text-black-black_dark font-medium'
									href={'/'}>
									На скидке
								</Link>
							</div>
						</div>
						<div className='flex items-center'>
							<input
								id='input-searching'
								className='hidden md:inline-block focus:shadow-lg w-inputWidth py-2.5 rounded-xl pl-9 outline-none'
								type='text'
								placeholder='Поиск'
								aria-label='Enter your searching'
							/>
							<button className='bg-white hidden sm:flex ml-8 w-11 h-11 hover:scale-110 duration-150 hover:shadow-lg flex items-center justify-center cursor-pointer rounded-xl'>
								<Image
									className='w-6 h-6'
									src={BlogImg}
									width={24}
									height={24}
									alt='Blog Img'
								/>
							</button>

							<a className='flex sm:hidden' href='tel:+998901288182'>
								<Image
									className='w-6 h-6'
									src={phoneImg}
									width={24}
									height={24}
									alt='Phone Img'
								/>
							</a>

							<div className='bg-white language-wrap cursor-pointer relative sm:flex ml-8 w-20 flex items-center justify-between py-3 pl-1 pr-2 rounded-md'>
								<Image
									className='w-7 h-5'
									src={russiaFlag}
									width={28}
									height={20}
									alt='Flag Russia'
								/>
								<span>Ru</span>
								<Image
									className='w-3 h-2'
									src={dropImg}
									width={9}
									height={5}
									alt='Drop Img'
								/>
								<ul className='language-list duration-300 absolute -translate-y-16 opacity-0 shadow-lg rounded-md left-0 w-20 py-3 pl-3 pr-4 bg-white flex space-y-2 flex-col'>
									<li className='flex items-center justify-between'>
										<Image src={UZBflag} width={28} height={20} alt="Uzbek language"/>
										Uz
									</li>
									<li className='flex items-center justify-between'>
										<Image src={USAflag} width={28} height={20} alt="USA language"/>
										Us
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className=' flex py-3.5 px-5 items-center justify-between md:hidden'>
				<Image
					className='w-7 h-7'
					src={hamburgerMenu}
					width={26}
					height={19}
					alt='Hamburger Manu'
				/>
				<input
					id='input-searching'
					className='w-mobileInputWidth sm:w-inputWidth focus:shadow-lg py-3 rounded-xl pl-6 sm:pl-9 outline-none'
					type='text'
					placeholder=''
					aria-label='Enter your searching'
				/>
				<button className='bg-white w-11 h-11 hover:scale-110 duration-150 hover:shadow-lg flex items-center justify-center cursor-pointer rounded-xl'>
					<Image
						className='w-6 h-6'
						src={BlogImg}
						width={24}
						height={24}
						alt='Blog Img'
					/>
				</button>
			</div>
		</header>
	);
}

export default Header;
