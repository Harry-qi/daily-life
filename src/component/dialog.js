import { Popup, Input } from 'zarm';
import React, { useState, useEffect } from 'react';

function Dialog(props) {
	const [title, setTitle] = useState('');
	let [dialogHeight, setHeight] = useState(100);
	let [habit, setHabit] = useState([]);
	const close = () => props.close();
	const save = () => {
		let tem = habit;
		tem.push(title);
		setHabit(tem);
		localStorage.setItem('habit', JSON.stringify(tem));
		setTitle('');
		props.close();
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
				<div>
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
			</div>
		</Popup>
	);
}
export default Dialog;
