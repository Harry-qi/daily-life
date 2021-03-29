function Icon(props) {
	return (
		<svg
			className={`icon ${props.className}`}
			aria-hidden="true"
			onClick={props.onclick}
		>
			<use xlinkHref={`#${props.icon}`}></use>
		</svg>
	);
}
export default Icon;
