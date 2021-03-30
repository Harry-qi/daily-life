import { useState } from 'react';
function ColorList(props) {
	let colors = [
		'#ffe268',
		'#ffb037',
		'#5f939a',
		'#fce38a',
		'#fc5185',
		'#30e3ca',
		'#ffde7d',
		'#00b8a9',
		'#f8f3d4',
		'#14ffec',
		'#e3fdfd',
		'#a1eafb',
		'#ff5722',
		'#00e0ff',
		'#74f9ff',
		'#a6fff2',
		'#e8ffe8',
	];
	let [activeIndex, setActiveIndex] = useState(0);
	return (
		<div className="icon-container">
			<div className="inner-box">
				{colors.map((item, index) => {
					return (
						<span
							onClick={() => {
								setActiveIndex(index);
								props.changeColor(item);
							}}
							className={`color-box ${
								activeIndex === index ? 'active-color' : ''
							}`}
							style={{ backgroundColor: item }}
							key={item}
						/>
					);
				})}
			</div>
		</div>
	);
}
export default ColorList;
