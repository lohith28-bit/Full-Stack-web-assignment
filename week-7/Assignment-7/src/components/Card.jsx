/* eslint-disable react/prop-types */

import { useContext } from "react"
import { NameContext } from './Input'

function Card({ wish }) {
	const Name1 = useContext(NameContext) 
	return (
		<div>

			<h3>{wish.replace('${name}', Name1)}</h3>
		</div>
	)
}

export default Card

