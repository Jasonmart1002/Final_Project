import React from "react";
import "../../styles/TopicTable.scss";
import { Link } from "react-router-dom";

export function TopicTable() {
	return (
		<div className="container">
			<h2 className="text-center">Games Of The Day</h2>
			<div className="card-deck homeCardDeck">
				<Link to="/single">
					<div className="card gameCard">
						<img src="https://via.placeholder.com/150x300" className="card-img" alt="..." />
						<div className="card-img-overlay">
							<h5 className="card-title">League Of Legends</h5>
						</div>
					</div>
				</Link>
				<div className="card gameCard">
					<img src="https://via.placeholder.com/150x300" className="card-img" alt="..." />
					<div className="card-img-overlay">
						<h5 className="card-title">Team Fortress 2</h5>
					</div>
				</div>
				<div className="card gameCard">
					<img src="https://via.placeholder.com/150x300" className="card-img" alt="..." />
					<div className="card-img-overlay">
						<h5 className="card-title">Sonic</h5>
					</div>
				</div>
				<div className="card gameCard">
					<img src="https://via.placeholder.com/150x300" className="card-img" alt="..." />
					<div className="card-img-overlay">
						<h5 className="card-title">Grand Theft Auto</h5>
					</div>
				</div>
				<div className="card gameCard">
					<img src="https://via.placeholder.com/150x300" className="card-img" alt="..." />
					<div className="card-img-overlay">
						<h5 className="card-title">Resident Evil</h5>
					</div>
				</div>
			</div>
		</div>
	);
}
