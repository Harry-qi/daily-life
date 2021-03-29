import { Popup, Input } from 'zarm';
import React, { useState, useEffect } from 'react';

function Dialog(props) {
	const [title, setTitle] = useState('');
	let [dialogHeight, setHeight] = useState(100);
	const toggle = (type) => props.toggle(type);
	useEffect(() => {
		setHeight((dialogHeight = window.innerHeight));
	});
	return (
		<Popup
			visible={props.visible}
			direction="bottom"
			onMaskClick={() => toggle(false)}
		>
			<div className="pop-box" style={{ height: dialogHeight + 'px' }}>
				<div className="flex flex-j-s-b handle-box">
					<span
						onClick={() => {
							toggle(false);
						}}
					>
						取消
					</span>
					<span>保存</span>
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
