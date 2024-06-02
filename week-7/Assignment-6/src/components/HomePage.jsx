import OTPpage from './OTPpage'
import { useState } from 'react';
function HomePage() {
	const [redirectToOTP, setRedirectToOTP] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		setRedirectToOTP(true);
	};

	if (redirectToOTP) {
		return <OTPpage />;
	}
	return (
		<div>
			<h2>Register here</h2>
			<form action="" onSubmit={handleSubmit}>
				<label htmlFor="">Email : </label>
				<input type="email" placeholder="example@gmail.com" required />
				<button>Submit</button>
			</form>
		</div>
	)
}

export default HomePage
