import ProductCard from '../ProductCard/ProductCard';
import { useSelector } from 'react-redux';
import { useState } from 'react';

function Popular({ title }) {
	let products = useSelector((state) => state.data);
  const [carusel, setCarusel] = useState(0)
  const [disable, setDisable] = useState("")
  const [disableLeft, setDisableLeft] = useState("")
  const [carMobile, setCaraMobile] = useState(0)

  const putRight = () => {
    setDisableLeft("")
    setCarusel(carusel + 300)
    setCaraMobile(carMobile + 242)
    if(carusel >= 1500) {
      setCarusel(1500)
      setDisable("cursor-not-allowed opacity-30 active:bg-azure")
    }
    if(carMobile >= 1452){
      setCaraMobile(1452)
      setDisable("cursor-not-allowed opacity-30 active:bg-azure")
    }
  }
  const putLeft = () => {
    setCarusel(carusel - 300)
    setDisable("")
    setCaraMobile(carMobile - 242)
    if(carusel <= 0) {
      setCarusel(0)
      setDisableLeft("cursor-not-allowed opacity-30 active:bg-azure")
    }
    if(carMobile <= 0) {
      setCaraMobile(0)
      setDisableLeft("cursor-not-allowed opacity-30 active:bg-azure")
    }
  }
	return (
		<section className='popular'>
			<div className='max-w-container mx-auto px-4 gap-x-10'>
				<div className='popular__top flex items-center justify-between mb-popularBottom  md:mb-10'>
					<h2 className='font-bold text-lg md:text-32  leading-36'>{title}</h2>
					<div className='popular__top-left flex'>
						<button diasbled="true" onClick={putLeft} className={`rightSide ${disableLeft} active:bg-blueActive w-9 h-9 rounded-[50%] bg-azure flex items-center justify-center`}>
							<svg
								className='rightSideTurn'
								width='18'
								height='14'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M6.336 1.545.818 7.064l5.518 5.518M16.273 7.063H.973'
									stroke='currentColor'
									strokeWidth='1.5'
									strokeMiterlimit='10'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						</button>
						<button onClick={putRight} className={`rightSide ${disable} active:bg-blueActive w-9 h-9 rounded-[50%] bg-azure flex items-center justify-center ml-4`}>
							<svg
								className='rotate-180 rightSideTurn'
								width='18'
								height='14'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									className='active:fill-white'
									d='M6.336 1.545.818 7.064l5.518 5.518M16.273 7.063H.973'
									stroke='currentColor'
									strokeWidth='1.5'
									strokeMiterlimit='10'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>
			<div className='products__list max-w-popularContainer overflow-hidden mx-auto px-3'>
				<div style={{transform: 'translateX(-'+ carusel + 'px)'}} className={`hidden md:flex gap-x-5 w-full duration-300`}>
					{products.map((el) => (
						<ProductCard
							key={el.id}
							status={el.status}
							name={el.name}
							price={el.price}
							sale={el.sale_price}
						/>
					))}
				</div>
				<div style={{transform: 'translateX(-'+ carMobile + 'px)'}} className={`md:hidden flex gap-x-5.5 w-full duration-300`}>
					{products.map((el) => (
						<ProductCard
							key={el.id}
							status={el.status}
							name={el.name}
							price={el.price}
							sale={el.sale_price}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
export default Popular;
