import './App.scss';
import React, { useState } from 'react';
import List from './component/list';
import Icon from './component/icon';
import Dialog from './component/dialog';

function App() {
	const nameList = ['健身', '坚持喝水', '看书', '摄影', '登山'];
	const dayList = [10, 12, 30, 43, 21];
	const IconList = [
		'icon-jianshen ',
		'icon-shuibei',
		'icon-shu',
		'icon-chongwusheying1',
		'icon-dengshanma',
	];
	let [visible, setVisible] = useState(false);
	const toggle = (type) => setVisible((visible = type));
	return (
		<div className="container">
			<List nameList={nameList} dayList={dayList} IconList={IconList} />
			<Icon
				icon="icon-jiahao"
				className="add-icon"
				onclick={() => {
					setVisible((visible = true));
				}}
			/>
			<Dialog visible={visible} toggle={toggle} />
		</div>
	);
}

export default App;
