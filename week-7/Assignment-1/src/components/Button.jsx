import { useSetRecoilState } from "recoil"
import { bgState } from "./Atoms"

// eslint-disable-next-line react/prop-types
function Button({ color }) {
	const setBgState = useSetRecoilState(bgState)
	const handleClick = () => {
		setBgState(color)
	}
	return (
		<div>
			<button style={{ cursor: 'pointer' }} onClick={handleClick}>{color}</button>
		</div>
	)
}

export default Button
