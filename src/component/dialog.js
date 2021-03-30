import { Popup, Input } from 'zarm';
import React, { useState, useEffect } from 'react';
import ColorList from './colorList';
import IconList from './iconList';
import ColorIconCon from './colorIconCon';

function Dialog(props) {
	const [title, setTitle] = useState('');
	let [dialogHeight, setHeight] = useState(100);
	let [habit, setHabit] = useState([]);
	// 关闭dialog
	const close = () => props.close();
	// 保存后关闭dialog
	const save = () => {
		let tem = habit;
		tem.push(title);
		setHabit(tem);
		localStorage.setItem('habit', JSON.stringify(tem));
		setTitle('');
		props.close();
	};
	// 改变颜色
	let [nowColor, setNowColor] = useState('#eee');
	let changeColor = (val) => {
		setNowColor(val);
	};
	useEffect(() => {
		setHeight(window.innerHeight);
		let tem = localStorage.getItem('habit');
		if (tem) {
			setHabit(JSON.parse(tem));
		}
	}, []);
	return (
		<Popup
			visible={props.visible}
			direction="bottom"
			onMaskClick={() => close(false)}
		>
			<div className="pop-box" style={{ height: dialogHeight + 'px' }}>
				<div className="flex flex-j-s-b handle-box">
					<span
						onClick={() => {
							close();
						}}
					>
						取消
					</span>
					<span
						onClick={() => {
							save();
						}}
					>
						保存
					</span>
				</div>
				<div className="input-box">
					<span className="label-span">给习惯取个名字吧</span>
					<Input
						className="input"
						clearable
						type="text"
						placeholder="例如：跑步"
						value={title}
						onChange={(value) => {
							setTitle(value);
						}}
					/>
				</div>
				<ColorIconCon.Provider value={nowColor}>
					<ColorList
						changeColor={(e) => {
							changeColor(e);
						}}
					/>
					<IconList />
				</ColorIconCon.Provider>
			</div>
		</Popup>
	);
}
export default Dialog;
