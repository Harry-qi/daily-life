import Icon from './icon';
import React, { useState, useContext } from 'react';
import ColorIconCon from './colorIconCon';
function IconList() {
	let icons = [
		'icon-dengshanma',
		'icon-chihaochide',
		'icon-dadalanqiu',
		'icon-quhaidaowan',
		'icon-youyonglejieyixia',
		'icon-wanyouxi',
		'icon-zuojiawu',
		'icon-qiupaileiyundong',
		'icon-xiaxiangqu',
		'icon-zhuizhuiju',
		'icon-dangzhiyuanzhe',
		'icon-huahua',
		'icon-gezhonghuodonggezhongparty',
		'icon-qujianzhi',
		'icon-xueleqi',
		'icon-kankanshuxiexiezi',
		'icon-jianshenlejieyixia',
		'icon-heshoujiguo',
		'icon-lianshufa',
		'icon-maidongxi',
		'icon-yinle',
		'icon-jianshen',
		'icon-shuibei',
		'icon-shu',
		'icon-chongwusheying1',
		'icon-taiyang',
	];
	let [activeIndex, setActiveIndex] = useState(0);
	let color = useContext(ColorIconCon);
	return (
		<div className="icon-container">
			<div className="inner-box">
				{icons.map((item, index) => {
					return (
						<span
							className={`icon-box flex flex-center ${
								index === activeIndex ? 'active-icon' : ''
							}`}
							style={{
								backgroundColor: index === activeIndex ? color : '#dcdcdc',
							}}
							key={item}
							onClick={() => {
								setActiveIndex(index);
							}}
						>
							<Icon icon={item} />
						</span>
					);
				})}
			</div>
		</div>
	);
}
export default IconList;
