import React, { useState } from "react";
import "../../styles/App.scss";

export function Navbar() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<>
			<nav className="navbar navbar-expand-lg">
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>
				<a className="navbar-brand ripple" href="/">
					Final Project
				</a>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item active">
							<a className="nav-link ripple" href="/">
								Home <span className="sr-only">(current)</span>
							</a>
						</li>
						<li className="nav-item">
							<a
								className="nav-link ripple"
								href="/"
								data-toggle="modal"
								data-target="#exampleModalCenter">
								Login
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link ripple" href="/demo">
								Profile
							</a>
						</li>
						<li className="nav-item dropdown">
							<a
								className="nav-link dropdown-toggle ripple"
								href="#"
								id="navbarDropdown"
								role="button"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false">
								Topics
							</a>
							<div className="dropdown-menu" aria-labelledby="navbarDropdown">
								<a className="dropdown-item" href="#">
									Action
								</a>
								<a className="dropdown-item" href="#">
									Another action
								</a>
								<div className="dropdown-divider" />
								<a className="dropdown-item" href="#">
									Something else here
								</a>
							</div>
						</li>
					</ul>
					<form className="form-inline my-2 my-lg-0">
						<input
							className="form-control mr-sm-2"
							type="search"
							placeholder="Search"
							aria-label="Search"
						/>
						<button className="btn btn-outline-success my-2 my-sm-0" type="submit">
							Search
						</button>
					</form>
				</div>
			</nav>
			<div
				className="modal fade"
				id="exampleModalCenter"
				tabIndex="-1"
				role="dialog"
				aria-labelledby="exampleModalCenterTitle"
				aria-hidden="true">
				<div className="modal-dialog modal-dialog-centered" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalCenterTitle">
								Login
							</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							<form>
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
