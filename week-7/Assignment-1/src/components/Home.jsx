/* eslint-disable react/prop-types */
import { bgState } from "./Atoms"
import Button from "./Button"
import { useRecoilValue } from "recoil"

function Home({ colors }) {
	const bgValue = useRecoilValue(bgState)
	return (
		<>
			<div style={{ backgroundColor: `${bgValue}`, minHeight: '100vh' }}>
				{(bgValue === 'black' || bgValue === 'blue') ? (
					<h1 style={{ color: 'white' }}>Assignment 1 Week 7</h1>
				) : (
					<h1>Assignment 1 Week 7</h1>
				)}

				<div style={{ display: 'flex', justifyContent: 'space-around' }}>
					{colors.map((clr, idx) => (<Button key={idx} color={clr} />))}
				</div>
			</div>
		</>
	)
}

export default Home
