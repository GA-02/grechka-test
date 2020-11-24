import React from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28ShareOutline from '@vkontakte/icons/dist/28/share_outline';
import Icon28DocumentOutline from '@vkontakte/icons/dist/28/document_outline';
import Sliders from '../components/Sliders';
import showWallPost from '../components/Sliders';
import './Home.css';

const Home = ({ id, snackbarError, fetchedState, }) => {


return (
		<Panel id={id}>
			
			{fetchedState && <Sliders fetchedState={fetchedState} snackbarError={snackbarError} />}
		</Panel>
	);
};

	

export default Home;
