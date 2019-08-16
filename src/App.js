import React from 'react';
import './App.css';
import NasaParentData from './components/NasaParentData';
import styled from 'styled-components';
import { Button, Icon } from 'semantic-ui-react';

const Header = styled.header`
	background: black;
	height: 100px;
	margin-bottom: 5%;
`;

const Footer = styled.footer`
	background: black;
	height: 100px;
	margin-top: 5%;
`;

const Icons = styled.div`padding: 25px;`;

const HeaderButtons = styled.div`padding: 25px;`;

function App() {
	return (
		<div className="App">
			<Header>
				<HeaderButtons>
					<Button primary>Sign-Up</Button>
					<Button secondary>Login</Button>
				</HeaderButtons>
			</Header>

			<NasaParentData />

			<Footer>
				<Icons>
					<Button color="facebook">
						<Icon name="facebook" /> Facebook
					</Button>
					<Button color="twitter">
						<Icon name="twitter" /> Twitter
					</Button>
					<Button color="google plus">
						<Icon name="google plus" /> Google Plus
					</Button>
					<Button color="vk">
						<Icon name="vk" /> VK
					</Button>
					<Button color="linkedin">
						<Icon name="linkedin" /> LinkedIn
					</Button>
					<Button color="instagram">
						<Icon name="instagram" /> Instagram
					</Button>
					<Button color="youtube">
						<Icon name="youtube" /> YouTube
					</Button>
				</Icons>
			</Footer>
		</div>
	);
}

export default App;
