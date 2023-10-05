import React from 'react'
import { Autoplay, Navigation, Pagination, Scrollbar } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import arrowPrev from '../../../assets/slider/arrowPrev.svg'
import arrowNext from '../../../assets/slider/arrowNext.svg'
import './Slider.scss'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { slides } from '../../../redux/Data/slider/slides'

const Slider = () => {
	return (
		<div className={'slider'}>
			<Swiper
				modules={[Navigation, Scrollbar, Pagination, Autoplay]}
				spaceBetween={0}
				slidesPerView={1}
				navigation={{
					nextEl: '.arrow-next',
					prevEl: '.arrow-prev',
				}}
				loop={false}
				autoplay={true}
				scrollbar={{ draggable: true, el: '.slider-scrollbar' }}
				pagination={{
					clickable: true,
					el: '.slider-pagination',
					type: 'custom',
					renderCustom: function (swiper, current, total) {
						return `<span>${current}</span>`
					},
				}}
			>
				{slides.map((slide, i) => (
					<SwiperSlide key={i}>
						<div
							style={{
								backgroundImage: `url(${slide})`,
							}}
							className={'slide'}
						></div>
					</SwiperSlide>
				))}
			</Swiper>

			<div className={'navigation'}>
				<img className='arrow-prev' src={arrowPrev} alt='arrow' />
				<div className='slider-pagination'></div>
				<div className='slider-scrollbar'></div>
				<div className='slidesTotal'>
					<p>{slides.length}</p>
				</div>
				<img className='arrow-next' src={arrowNext} alt='arrow' />
			</div>
		</div>
	)
}

export default Slider
