import React from 'react';
import styled from 'styled-components';
// import galaxy from "./galaxy.jpg";

const Title = styled.h1`
	color: black;
	margin: 5%;
    border-left: 5px solid black;
    border-right: 5px solid black;
    font-size:3rem;
`;

const Img = styled.img`
	width: 550px;
	height: auto;
`;

const NasaChild = (props) => {
	return (
		<div>
			<div>
				<Title className="title">{props.title}</Title>
				<Img src={props.imgUrl} />
                {/* <img src={galaxy}/> */}
			</div>

			<div>
				<h2 className="date">{props.date}</h2>
				<p className="explanation">{props.explanation}</p>
			</div>
		</div>
	);
};

export default NasaChild;
