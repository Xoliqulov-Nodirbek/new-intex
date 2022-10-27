import Link from 'next/link';
import React from 'react';
import Image from 'next/dist/client/image';
import { useState } from 'react';

function Header() {
	const [lang, setLang] = useState('Ru');
	return (
		<header className='bg-gray-bg_nav'>
			<div className='py-3 border-b-2'>
				<div className='w-container mx-auto px-5'>
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
								<Link className='text-sm font-medium text-gray-text ml-6' href={'/'}>
									Почему мы?
								</Link>
							</div>
							<div className='hover:scale-105 duration-150'>
								<Link className='text-sm font-medium text-gray-text ml-6 ' href={'/'}>
									Контакты
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='w-container mx-auto px-5'>
				<div>
					<div>
						{/* {/* bOSHLASH  */}
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
