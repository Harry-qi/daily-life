import Item from './item';
function List(props) {
	return (
		<div className="container">
			{props.nameList.map((item, index) => {
				return (
					<Item
						name={item}
						day={props.dayList[index]}
						icon={props.IconList[index]}
						key={index}
						onClick={() => {
							props.handelCheckIn(index);
						}}
					/>
				);
			})}
		</div>
	);
}
export default List;
