import './App.scss';
import React, { useEffect, useState } from 'react';
import List from './component/list';
import Icon from './component/icon';
import Dialog from './component/dialog';

function App() {
	const [nameList, setNameList] = useState([]);
	const [dayList, setDayList] = useState([]);
	const [IconList, setIconList] = useState([]);
	let [habit, setHabit] = useState([]);
	useEffect(() => {
		init();
	}, []);
	let [visible, setVisible] = useState(false);
	const close = () => {
		setVisible(false);
	};
	const checkIn = (index) => {
		console.log(index);
		let tem = JSON.parse(JSON.stringify(habit));
		if (tem[index].status === 0) {
			tem[index].day++;
			tem[index].status = 1;
		}
		localStorage.setItem('habit', JSON.stringify(tem));
		setHabit(tem);
		init();
	};
	const init = () => {
		let localData = JSON.parse(localStorage.getItem('habit'));
		const temName = [];
		const temDay = [];
		const temIcon = [];
		if (localData) {
			localData.forEach((item) => {
				temName.push(item.title);
				temDay.push(item.day);
				temIcon.push(item.icon);
			});
			setHabit(localData);
			setNameList(temName);
			setDayList(temDay);
			setIconList(temIcon);
		}
	};
	return (
		<div className="container">
			{nameList.length !== 0 && (
				<List
					nameList={nameList}
					dayList={dayList}
					IconList={IconList}
					handelCheckIn={(i) => {
						checkIn(i);
					}}
				/>
			)}
			{!nameList.length && (
				<div className="tips">暂无任务，点击下面按钮添加吧</div>
			)}
			<Icon
				icon="icon-jiahao"
				className="add-icon"
				onclick={() => {
					setVisible(true);
				}}
			/>
			<Dialog
				visible={visible}
				close={close}
				init={() => {
					init();
				}}
			/>
		</div>
	);
}

export default App;
