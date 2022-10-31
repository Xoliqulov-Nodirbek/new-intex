import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { useState } from 'react';

function Header() {
	const [openLang, setOpenLang] = useState(false);
	const [menuLang, setMenuLang] = useState(false);
	const [clickMenu, setClickMenu] = useState(false);
	const [menuCatOpen, setMenuCatOpen] = useState(false)
	const [flagImg, setFlagImg] = useState(
		'/Assets/Images/HeaderAndHeroImg/russia-flag.svg',
	);
	const [flagName, setFlagName] = useState('Ру');
	function handleClickedFlag(evt) {
		setFlagName(evt.target.textContent);
		if (evt.target.textContent == 'Uz') {
			setFlagImg('/Assets/Images/HeaderAndHeroImg/uzb-flag.svg');
			setOpenLang(false);
			setMenuLang(false);
		}
		if (evt.target.textContent == 'En') {
			setFlagImg('/Assets/Images/HeaderAndHeroImg/usa-flag.svg');
			setOpenLang(false);
			setMenuLang(false);
		}
		if (evt.target.textContent == 'Ру') {
			setFlagImg('/Assets/Images/HeaderAndHeroImg/russia-flag.svg');
			setOpenLang(false);
			setMenuLang(false);
		}
	}
	function handlMenuOpen(e){
		if(e.target.id === "menuBar") setClickMenu(false)
	}
	return (
		<header id='header' className='fixed w-full -top-1  z-40 shadow-sm'>
			<div className='bg-gray-bg_nav hidden md:block py-3 border-b-2'>
				<div className='w-full max-w-container mx-auto px-5'>
					<div className='flex items-center justify-between'>
						<p className='text-sm text-gray-text font-medium'>
							10:00 - 22:00 Без выходных
						</p>
						<a
							className='text-base font-bold text-blue-accent'
							href='tel:+998901288182'>
							+998 (90) 128 81 82
						</a>
						<div className='flex items-center'>
							<div>
								<Link className='text-sm font-medium text-gray-text' href={'/'}>
									О Продукт
								</Link>
							</div>
							<div>
								<Link
									className='text-sm font-medium text-gray-text ml-6'
									href={'/'}>
									Почему мы?
								</Link>
							</div>
							<div>
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
			<div className={`bg-gray-bg_nav border-b-2 md:border-none`}>
				<div className='w-full max-w-container mx-auto px-5 py-3.5 sm:py-4'>
					<div className='flex items-center justify-between'>
						<div className='flex items-center'>
							<Link href={'/'}>
								<Image
									priority={true}
									className='w-52 h-5 hidden sm:inline-block'
									src={'/Assets/Images/HeaderAndHeroImg/siteLogo.svg'}
									width={200}
									height={20}
									alt='Site Logo'
								/>
								<Image
									priority={true}
									className='w-36 h-3.5 sm:hidden'
									src={'/Assets/Images/HeaderAndHeroImg/logoMobile.svg'}
									width={150}
									height={14}
									alt='Site Logo Mobile'
								/>
							</Link>
							<div className='hidden items-center ml-10 xl:flex'>
								<Link
									id='dropdown'
									className='z-50 pb-4 mt-4 category inline-block relative pr-4 text-base text-black-black_dark font-medium'
									href={'/'}>
									Категории
									<Image
										className={`drop-img duration-200 absolute w-3 h-2 right-0 top-2.5`}
										src={'/Assets/Images/HeaderAndHeroImg/drop-img.svg'}
										width={9}
										height={5}
										alt='Drop_img'
										priority={true}
									/>
									<ul

									className={` duration-100 w-28 h-0 overflow-hidden category-list -translate-y-4 opacity-0  absolute bg-white p-3 rounded-xl shadow-lg `}>
									<li>
										<Link
											className='font-normal text-sm inline-block duration-150 text-black-black_thin mb-2'
											href={'/naduvniy'}>
											Надувные бассейны
										</Link>
									</li>
									<li>
										<Link
											className='font-normal inline-block duration-150 text-sm text-black-black_thin mb-2'
											href={'/'}>
											Каркасные бассейны
										</Link>
									</li>
									<li>
										<Link
											className='font-normal inline-block duration-150 text-sm text-black-black_thin mb-2'
											href={'/'}>
											Все чистки бассейна
										</Link>
									</li>
									<li>
										<Link
											className='font-normal  inline-block duration-150 text-sm text-black-black_thin mb-2'
											href={'/'}>
											Аксессуары для бассейна
										</Link>
									</li>
								</ul>

										className={` duration-100 w-28 h-0 overflow-hidden category-list -translate-y-4 opacity-0  absolute bg-white p-3 rounded-xl shadow-lg `}>
										<li>
											<Link
												className='font-normal text-sm inline-block duration-150 text-black-black_thin mb-2'
												href={'/'}>
												Надувные бассейны
											</Link>
										</li>
										<li>
											<Link
												className='font-normal inline-block duration-150 text-sm text-black-black_thin mb-2'
												href={'/'}>
												Каркасные бассейны
											</Link>
										</li>
										<li>
											<Link
												className='font-normal inline-block duration-150 text-sm text-black-black_thin mb-2'
												href={'/'}>
												Все чистки бассейна
											</Link>
										</li>
										<li>
											<Link
												className='font-normal  inline-block duration-150 text-sm text-black-black_thin mb-2'
												href={'/'}>
												Аксессуары для бассейна
											</Link>
										</li>
									</ul>

								</Link>

								<Link
									className='ml-6 text-base text-black-black_dark font-medium'
									href={'/'}>
									Популярное
								</Link>
								<Link
									className='ml-6 text-base text-black-black_dark font-medium'
									href={'/'}>
									Новинки
								</Link>
								<Link
									className='ml-6 text-base text-black-black_dark font-medium'
									href={'/'}>
									На скидке
								</Link>
							</div>
						</div>
						<div className='flex items-center'>
							<input
								id='input-searching'
								className='hidden md:inline-block  w-inputWidth py-2.5 rounded-xl pl-9 outline-none'
								type='text'
								autoComplete='off'
								placeholder='Поиск'
								aria-label='Enter your searching'
							/>
							<button className='bg-white z-50 hidden md:flex ml-8 w-11 h-11   items-center justify-center cursor-pointer rounded-xl'>
								<Image
									priority={true}
									className='w-6 h-6'
									src={'/Assets/Images/HeaderAndHeroImg/block-img.svg'}
									width={24}
									height={24}
									alt='Blog Img'
								/>
							</button>

							<a className='flex sm:hidden z-50' href='tel:+998901288182'>
								<Image
									priority={true}
									className='w-6 h-6'
									src={'/Assets/Images/HeaderAndHeroImg/phone-img.svg'}
									width={24}
									height={24}
									alt='Phone Img'
								/>
							</a>

							<div className='relative '>
								<div
									onClick={() => setOpenLang(!openLang)}
									className='bg-white relative language-wrap hidden cursor-pointer sm:flex ml-8 w-20  items-center justify-between py-3 z-40 pl-1 pr-2 rounded-md'>
									<Image
										priority={true}
										className='w-7 h-5'
										src={flagImg}
										width={28}
										height={20}
										alt='Flag Russia'
									/>
									<span>{flagName}</span>
									<Image
										priority={true}
										className={`${
											openLang
												? '-rotate-180 duration-300'
												: '-rotate-0 duration-300'
										}  w-3 h-2`}
										src={'/Assets/Images/HeaderAndHeroImg/drop-img.svg'}
										width={9}
										height={5}
										alt='Drop img'
									/>
								</div>
								<ul
									className={`${
										openLang
											? 'translate-y-0.5 opacity-1 h-auto'
											: '-translate-y-16 opacity-0 h-2 overflow-hidden '
									} duration-300 absolute cursor-pointer shadow-lg rounded-md right-0 w-20 bg-white flex flex-col`}>
									<li
										onClick={handleClickedFlag}
										className='items-lang flex  pt-3 pl-3 pr-4 pb-1.5 items-center justify-end'>
										Uz
									</li>
									<li
										onClick={handleClickedFlag}
										className='items-lang flex pl-3 pt-1.5 pr-4  pb-3 items-center justify-end'>
										En
									</li>
									<li
										onClick={handleClickedFlag}
										className='items-lang flex pl-3 pr-4  pb-3 items-center justify-end'>
										Ру
									</li>
								</ul>
							</div>
							<button className='hidden cursor-pointer md:inline-block ml-3 xl:hidden'>
								<Image
									onClick={() => setClickMenu(true)}
									priority={true}
									className='w-8 h-5'
									src={'/Assets/Images/HeaderAndHeroImg/hamburger.svg'}
									width={32}
									height={20}
									alt='Hamburger Menu'
								/>
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className='bg-gray-bg_nav flex py-3.5 px-5 items-center justify-between md:hidden'>
				<Image
				onClick={() => setClickMenu(true)}
					priority={true}
					className='w-6 h-6 sm:w-7 sm:h-7 cursor-pointer'
					src={'/Assets/Images/HeaderAndHeroImg/hamburger.svg'}
					width={26}
					height={19}
					alt='Hamburger Manu'
				/>
				<input
					id='input-searching'
					className='w-full mx-2 max-w-inputWidth py-2 sm:py-3 rounded-xl pl-8 sm:pl-9 outline-none'
					type='text'
					autoComplete='off'
					placeholder='Поиск'
					aria-label='Enter your searching'
				/>
				<button className='bg-white  w-10 h-10 sm:w-11 sm:h-11  flex items-center justify-center cursor-pointer rounded-xl'>
					<Image
						priority={true}
						className='w-5 h-5 sm:w-6 sm:h-6'
						src={'/Assets/Images/HeaderAndHeroImg/block-img.svg'}
						width={24}
						height={24}
						alt='Blog Img'
					/>
				</button>
			</div>
			<div id='menuBar' onClick={handlMenuOpen} className={`${clickMenu ? "left-0 bg-black w-auto inset-0 bg-opacity-25 backdrop-blur-sm duration-300" : "-left-80 duration-300 w-0 bg-none backdrop-blur-0" } fixed w-full z-50 top-0 `}>
				<div className='w-modalMenu h-modalMenuHe bg-white pt-14 px-5'>
					<Link className='mb-11 inline-block' href={'/'}>
						<Image
							className='w-menuBarWidth h-menuBarHeight'
							src={'/Assets/Images/HeaderAndHeroImg/siteLogo.svg'}
							width={150}
							height={14}
							alt='Menu Bar Logo'
						/>
					</Link>
					<div
						onClick={() => setMenuLang(!menuLang)}
						className={`flex z-50 relative items-center justify-between ${
							menuLang ? '' : 'border-b-2'
						} pb-2.5 cursor-pointer`}>
						<div className='flex items-center text-sm font-medium text-black-black_dark'>
							<Image
								className='w-7 h-5 mr-2.5'
								src={flagImg}
								width={28}
								height={20}
								alt='Russia Flag Img'
							/>
							{flagName}
						</div>
						<Image
							className={`w-3 h-2 ${
								menuLang ? '-rotate-180 duration-300' : 'rotate-0 duration-300'
							}`}
							src={'/Assets/Images/HeaderAndHeroImg/drop-img.svg'}
							width={9}
							height={5}
							alt='Drop Down Img'
						/>
					</div>
					{/* Language Drop Down */}
					<ul
						className={`${
							menuLang
								? 'translate-y-0 opacity-1 h-auto mb-2'
								: '-translate-y-8 opacity-0 h-5 duration-300 overflow-hidden '
						}  duration-300 pb-2.5 cursor-pointer relative z-20 border-b-2 bg-white flex flex-col`}>
						<li
							onClick={handleClickedFlag}
							className='items-lang flex py-3 pl-12 items-center'>
							Uz
						</li>
						<li
							onClick={handleClickedFlag}
							className='items-lang flex pt-1.5 mb-4 pl-12 items-center'>
							En
						</li>
						<li
							onClick={handleClickedFlag}
							className='items-lang flex  pl-12 items-center'>
							Ру
						</li>
					</ul>
					<div onClick={() => setMenuCatOpen(!menuCatOpen)}  className={`${menuCatOpen ? "" : "border-b-2"} flex items-center justify-between pb-2 mb-1 cursor-pointer`}>
						<Link
							href={'/'}
							className='flex items-center text-base font-medium text-black-black_dark'>
							Категории
						</Link>
						<Image
							className={`${menuCatOpen ? "-rotate-180 duration-300" : "rotate-0 duration-300"} w-3 h-2`}
							src={'/Assets/Images/HeaderAndHeroImg/drop-img.svg'}
							width={9}
							height={5}
							alt='Drop Down Img'
						/>
					</div>
					{/* category Drop Down */}
					<ul
						className={` ${menuCatOpen ? "h-auto border-b-2 opacity-1 duration-200" : "h-0 opacity-0 duration-200 overflow-hidden"} w-full category-list bg-white  pb-2 pl-3 `}>
						<li>
							<Link
								className='font-normal text-sm inline-block duration-150 text-black-black_thin mb-5'
								href={'/'}>
								Надувные бассейны
							</Link>
						</li>
						<li>
							<Link
								className='font-normal inline-block duration-150 text-sm text-black-black_thin mb-5'
								href={'/'}>
								Каркасные бассейны
							</Link>
						</li>
						<li>
							<Link
								className='font-normal inline-block duration-150 text-sm text-black-black_thin mb-5'
								href={'/'}>
								Все чистки бассейна
							</Link>
						</li>
						<li>
							<Link
								className='font-normal  inline-block duration-150 text-sm text-black-black_thin'
								href={'/'}>
								Аксессуары для бассейна
							</Link>
						</li>
					</ul>

					<div className='flex flex-col space-y-5 mt-4 font-medium text-base text-black-black_dark '>
						<Link href={'/'}>Популярное</Link>
						<Link href={'/'}>Новинки</Link>
						<Link href={'/'}>На скидке</Link>
						<Link href={'/'}>О Продукт</Link>
						<Link href={'/'}>Почему мы?</Link>
						<Link href={'/'}>Контакты</Link>
					</div>
				</div>
			</div>
		</header>
	);
}
export default Header;
