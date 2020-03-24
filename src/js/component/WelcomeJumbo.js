import React, { useState } from "react";
import "../../styles/WelcomeJumbo.scss";

export function WelcomeJumbo() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [username, setUsername] = useState("");
	return (
		<>
			<div className="jumbotron text-center">
				<h3 className="display-5">Welcome to Name!</h3>
				<p className="lead">
					This is a simple hero unit, a simple jumbotron-style component for calling extra attention to
					featured content or information.
				</p>
				<button
					className="btn btn-primary btn-lg ripple"
					href="/"
					role="button"
					data-toggle="modal"
					data-target="#signUpModal">
					Sign up
				</button>
			</div>
			<div
				className="modal fade"
				id="signUpModal"
				tabIndex="-1"
				role="dialog"
				aria-labelledby="signUpModalTitle"
				aria-hidden="true">
				<div className="modal-dialog modal-dialog-centered" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="signUpModalTitle">
								Sign up
							</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							<form>
								<div className="form-group">
									<label htmlFor="exampleInputEmail1">Username</label>
									<input
										type="text"
										className="form-control"
										id="exampleInputEmail1"
										aria-describedby="emailHelp"
										onChange={e => setUsername(e.target.value)}
										value={username}
									/>
								</div>
								<div className="form-group">
									<label htmlFor="exampleInputPassword1">Password</label>
									<input
										type="password"
										className="form-control"
										id="exampleInputPassword1"
										onChange={e => setPassword(e.target.value)}
										value={password}
									/>
								</div>
								<div className="form-group">
									<label htmlFor="exampleInputEmail1">Email address</label>
									<input
										type="email"
										className="form-control"
										id="exampleInputEmail1"
										aria-describedby="emailHelp"
										onChange={e => setEmail(e.target.value)}
										value={email}
									/>
								</div>
								<button type="submit" className="btn btn-primary">
									Submit
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
