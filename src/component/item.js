import Icon from './icon';
function List(props) {
	return (
		<div
			className="list-box"
			onClick={() => {
				props.onClick();
			}}
		>
			<div className="list-item flex flex-j-s-b">
				<div className="left flex flex-a-c">
					<Icon icon={props.icon}></Icon>
					<span>{props.name}</span>
				</div>
				<div className="right">
					<span>{props.day ? props.day : 0}天</span>
					<span>坚持天数</span>
				</div>
			</div>
		</div>
	);
}

export default List;
