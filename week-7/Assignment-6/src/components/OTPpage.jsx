import { useRef } from "react";


function OTPpage() {
	const input1 = useRef()
	const input2 = useRef()
	const input3 = useRef()
	const input4 = useRef()
	const handleSubmit = (e) => {
		e.preventDefault()
	}

	const moveFocus = (e, p, c, n) => {
		const maxLen = parseInt(e.target.getAttribute('maxLength'))
		const inputLen = e.target.value.length

		console.log(maxLen, "==>", inputLen)
		if (maxLen <= inputLen && n) {
			n.current.focus()
		}
		if (e.key === 'Backspace' && p) {
			p.current.focus();
		}
		if (inputLen > 1 && e.key !== 'Backspace') {
			e.preventDefault()
			e.target.value = e.target.value % 10
		}

	}

	return (
		<div>
			<h1>Enter the OTP</h1>
			<form action="" onSubmit={handleSubmit}>
				<input type="number" maxLength={1} ref={input1} onKeyUp={(e) => moveFocus(e, '', input1, input2)} />
				<input type="number" maxLength={1} ref={input2} onKeyUp={(e) => moveFocus(e, input1, input2, input3)} />
				<input type="number" maxLength={1} ref={input3} onKeyUp={(e) => moveFocus(e, input2, input3, input4)} />
				<input type="number" maxLength={1} ref={input4} onKeyUp={(e) => { moveFocus(e, input3, input4, '') }} />
				<div>
					<button style={{ backgroundColor: 'grey' }} >Submit</button>
				</div>
			</form>
		</div>
	)
}

export default OTPpage;
