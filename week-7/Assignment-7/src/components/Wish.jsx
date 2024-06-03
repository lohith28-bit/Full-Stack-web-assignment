import wishApi from "../assets/wishApi"
import { useMemo, useContext } from "react";
import Card from "./Card";
import React from "react";
import { NameContext } from './Input'
// eslint-disable-next-line react/prop-types
function Wish() {
	const name = useContext(NameContext);
	const wishData = useMemo(() => {
		const idx = Math.floor(Math.random() * wishApi.length)
		const lst = [wishApi[idx]]
		let idx1 = Math.floor(Math.random() * wishApi.length)
		while (idx == idx1) {
			idx1 = Math.floor(Math.random() * wishApi.length)
		}
		lst.push(wishApi[idx1])
		return lst
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [name])
	return (
		<div>
			{
				wishData.map((wish, index) => (
					<React.Fragment key={index}>
						<div>
							<Card wish={wish} />
						</div>
					</React.Fragment>
				))
			}
		</div>
	)
}

export default Wish

