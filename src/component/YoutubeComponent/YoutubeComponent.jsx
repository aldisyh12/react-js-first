import React from 'react';
import './YoutubeComponent.css';

const YoutubeComponent = (props) => {
	return (
		<div className="youtube-wrapper">
			<div className="img-thumb">
				<img src="https://i2.wp.com/www.blogpress.id/wp-content/uploads/2020/06/YouTube-Thumbnail-Size.jpg?fit=750%2C500&ssl=1" alt="" />
				<p className="time">{props.time}</p>
			</div>
			<p className="title">{props.title}</p>
			<p className="desc">{props.desc}</p>
		</div>
	)
}

YoutubeComponent.defaultProps = {
	time: '00.00',
	title: 'Title Here',
	desc: 'Desc Here'
}

export default YoutubeComponent;