function Icon(props) {
	let cName = props.className || '';
	return (
		<svg className={`icon ${cName}`} aria-hidden="true" onClick={props.onclick}>
			<use xlinkHref={`#${props.icon}`}></use>
		</svg>
	);
}
export default Icon;
