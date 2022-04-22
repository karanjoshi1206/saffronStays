import React, { useState } from "react";
import "./Card.scss";
import { ReactComponent as ArrowRight } from "./ArrowRight.svg";
import { ReactComponent as ArrowBack } from "./ArrowBack.svg";
import { ReactComponent as FilledStar } from "../../starIcons/star.svg";
import { ReactComponent as EmptyStar } from "../../starIcons/empty-star.svg";
import Slider from "react-slick";

const Card = ({ item }) => {
	const [clicked, setClicked] = useState(false);
	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,

		dotsClass: "caraouselDots",
		nextArrow: <ArrowRight />,
		prevArrow: <ArrowBack />,
	};
	console.log(item);
	return (
		<div className='card'>
			<div className='card-img'>
				<Slider {...settings}>
					{item.images.map((image, index) => {
						return <img src={image} alt='' key={index} />;
					})}
				</Slider>
				<div className='thumbnails'>
					<img src='./assets/cardThumb.svg' alt='' />
					<img src='./assets/cardThumb.svg' alt='' />
					<img src='./assets/cardThumb.svg' alt='' />
					<div className='thumbNail'>
						<p>View All</p>
						<img src='./assets/cardThumb.svg' alt='' />
					</div>
				</div>
			</div>

			<div className='cardContent'>
				<div onClick={() => setClicked(!clicked)} className='heart'>
					{clicked ? (
						<img src='./assets/redHeart.svg' />
					) : (
						<img src='./assets/heart.svg' alt='' />
					)}
				</div>
				<div className='cardContentTop'>
					<div className='cardContentTop-left'>
						<img src='./assets/location.svg' alt='' />
						<h1>{item.location}</h1>
					</div>

					<h1 className='title'>{item.title}</h1>
				</div>
				<span className='description'>
					{" "}
					Entire Villa • 3 Bedrooms • Sleeps 15
				</span>
				<div className='flex'>
					{window.innerWidth > 900 ? (
						<>
							<div className='ratingBtn'>
								<img src='./assets/star.svg' alt='' />
								{item.rating}{" "}
							</div>
							<span>(1000 reviews) • Excellent</span>
						</>
					) : (
						<>
							{[0, 0, 0, 0].map((elem, idx) => (
								<FilledStar key={idx} />
							))}
							<EmptyStar />
							<svg
								style={{
									marginLeft: "5px",
								}}
								width='1'
								height='14'
								viewBox='0 0 1 14'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<line
									x1='0.5'
									y1='14'
									x2='0.500001'
									y2='-2.18557e-08'
									stroke='#DDDDDD'
								/>
							</svg>

							<span style={{ textDecoration: "none", marginRight: "5px" }}>
								105 reviews
							</span>
						</>
					)}
				</div>
				<div className='extras'>
					<div className='extra'>
						<img src='./assets/wifi.svg' alt='' />
						<span>Wifi</span>
					</div>

					<div className='extra'>
						<img src='./assets/meals.svg' alt='' />
						<span>Meals</span>
					</div>
					<div className='extra'>
						<img src='./assets/swimming.svg' alt='' />
						<span>Swimming</span>
					</div>
					<span>+10 more</span>
				</div>
				<div className='cardContentBottom'>
					<div className='priceContainer'>
						<div className='price'>
							<h4>₹{item.price}</h4>
							<p>₹{item.discountedPrice} </p>
						</div>
						<div>
							<span>Per day</span>{" "}
						</div>
					</div>
					<button className='price-btn'>View Details</button>
				</div>
			</div>
		</div>
	);
};

export default Card;
