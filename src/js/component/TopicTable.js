import React, { useState, useEffect } from "react";
import "../../styles/TopicTable.scss";
import { Link } from "react-router-dom";

export function TopicTable() {
	const [favorite, setFavorite] = useState(false);

	return (
		<div className="container tableContainer">
			<h2 className="text-center">Games Of The Day</h2>
			<div className="card-deck homeCardDeck justify-content-center">
				<Link to="/single">
					<div className="card gameCard">
						<img src="https://via.placeholder.com/150x300" className="card-img" alt="..." />
						<div className="card-img-overlay">
							<h5 className="card-title">League Of Legends</h5>
							<p className="card-text text-right">
								<button
									type="button"
									className="btn btn-primary favbtn ripple"
									onClick={e => setFavorite(true)}>
									<i className="fas fa-plus" />
								</button>
							</p>
						</div>
					</div>
				</Link>
				{/* <Link to="/single"> */}
				<div className="card gameCard">
					<img src="https://via.placeholder.com/150x300" className="card-img" alt="..." />
					<div className="card-img-overlay">
						<h5 className="card-title">Team Fortress 2</h5>
						<p className="card-text text-right">
							<button type="button" className="btn btn-primary favbtn ripple">
								<i className="fas fa-plus" />
							</button>
						</p>
					</div>
				</div>
				{/* </Link> */}
				{/* <Link to="/single"> */}
				<div className="card gameCard">
					<img src="https://via.placeholder.com/150x300" className="card-img" alt="..." />
					<div className="card-img-overlay">
						<h5 className="card-title">Sonic</h5>
						<p className="card-text text-right">
							<button type="button" className="btn btn-primary favbtn ripple">
								<i className="fas fa-plus" />
							</button>
						</p>
					</div>
				</div>
				{/* </Link> */}
				{/* <Link to="/single"> */}
				<div className="card gameCard">
					<img src="https://via.placeholder.com/150x300" className="card-img" alt="..." />
					<div className="card-img-overlay">
						<h5 className="card-title">Grand Theft Auto</h5>
						<p className="card-text text-right">
							<button type="button" className="btn btn-primary favbtn ripple">
								<i className="fas fa-plus" />
							</button>
						</p>
					</div>
				</div>
				{/* </Link> */}
				{/* <Link to="/single"> */}
				<div className="card gameCard">
					<img src="https://via.placeholder.com/150x300" className="card-img" alt="..." />
					<div className="card-img-overlay">
						<h5 className="card-title">Resident Evil</h5>
						<p className="card-text text-right">
							<button type="button" className="btn btn-primary favbtn ripple">
								<i className="fas fa-plus" />
							</button>
						</p>
					</div>
				</div>
				{/* </Link> */}
			</div>
		</div>
	);
}
