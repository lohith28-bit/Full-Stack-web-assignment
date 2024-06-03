import { createContext, useRef, useState } from "react"
import Wish from "./Wish"

const NameContext = createContext(null)
function Input() {
	const [name, setName] = useState(null)
	const inputEle = useRef()
	const handleSubmit = (e) => {
		e.preventDefault()
		setName(inputEle.current.value)
	}
	return (
		<NameContext.Provider value={name}>
			<div>
				<form action="" onSubmit={handleSubmit}>
					<input type="text" placeholder="Enter birthday person name" ref={inputEle} />
					<button style={{ backgroundColor: 'blue' }} type="submit">Submit</button>
				</form>
				{name && <Wish />}
			</div>
		</NameContext.Provider>
	)
}

export default Input

export { NameContext };

