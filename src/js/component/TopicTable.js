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
					<div className="card gameCard hover">
						<img
							src="https://static-cdn.jtvnw.net/ttv-boxart/League%20of%20Legends.jpg"
							className="card-img gameCard"
							alt="..."
						/>
						<div className="card-img-overlay">
							{/* <h5 className="card-title">League Of Legends</h5> */}
							<p className="card-text text-right">
								<button
									type="button"
									className="btn btn-primary favbtn ripple constantHover"
									onClick={e => setFavorite(true)}>
									<i className="fas fa-plus" />
								</button>
							</p>
						</div>
					</div>
				</Link>
				{/* <Link to="/single"> */}
				<div className="card gameCard hover">
					<img
						src="https://upload.wikimedia.org/wikipedia/en/thumb/5/5f/Tf2_standalonebox.jpg/220px-Tf2_standalonebox.jpg"
						className="card-img gameCard"
						alt="..."
					/>
					<div className="card-img-overlay">
						{/* <h5 className="card-title">Team Fortress 2</h5> */}
						<p className="card-text text-right">
							<button type="button" className="btn btn-primary favbtn ripple constantHover">
								<i className="fas fa-plus" />
							</button>
						</p>
					</div>
				</div>
				{/* </Link> */}
				{/* <Link to="/single"> */}
				<div className="card gameCard hover">
					<img
						src="https://ubistatic19-a.akamaihd.net/ubicomstatic/en-us/global/game-info/ac1_nakedbox_mobile_164648.jpg"
						className="card-img gameCard"
						alt="..."
					/>
					<div className="card-img-overlay">
						<p className="card-text text-right">
							<button type="button" className="btn btn-primary favbtn ripple constantHover">
								<i className="fas fa-plus" />
							</button>
						</p>
					</div>
				</div>
				{/* </Link> */}
				{/* <Link to="/single"> */}
				<div className="card gameCard hover">
					<img
						src="https://store-images.s-microsoft.com/image/apps.13587.70644597693904836.cde9dd08-509f-4054-8190-24728e59ad5e.b122adbd-e812-41be-bc09-4dd7b0078036?mode=scale&q=90&h=300&w=200"
						className="card-img gameCard"
						alt="..."
					/>
					<div className="card-img-overlay">
						<p className="card-text text-right">
							<button type="button" className="btn btn-primary favbtn ripple constantHover">
								<i className="fas fa-plus" />
							</button>
						</p>
					</div>
				</div>
				{/* </Link> */}
				{/* <Link to="/single"> */}
				<div className="card gameCard hover">
					<img
						src="https://www.residentevil.com/_asset/images/re2-panel.jpg"
						className="card-img gameCard"
						alt="..."
					/>
					<div className="card-img-overlay">
						<p className="card-text text-right">
							<button type="button" className="btn btn-primary favbtn ripple constantHover">
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
